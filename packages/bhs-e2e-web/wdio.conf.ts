import * as core from '@actions/core';

const ALL_CAPABILITIES = [{
  browserName: 'chrome',
  'goog:chromeOptions': {
    binary: process.env.CHROME_BIN,
    args: [
      'headless',
      'no-sandbox',
      'disable-dev-shm-usage',
      'window-size=1920,1080',
    ],
  },
  'wdio:chromedriverOptions': {
    binary: process.env.CHROMEDRIVER_BIN,
  },
}, {
  browserName: 'firefox',
  'moz:firefoxOptions': {
    args: [
      '-headless',
    ],
  },
}, {
  browserName: 'safari',
}, {
  browserName: 'MicrosoftEdge',
  'ms:edgeOptions': {
    args: [
      'headless',
      'no-sandbox',
      'disable-dev-shm-usage',
      'window-size=1920,1080',
    ],
  },
}] satisfies WebdriverIO.Capabilities[];

function getCapabilities() {
  if (process.env.CI) {
    if (core.platform.isMacOS) {
      return ALL_CAPABILITIES;
    } else {
      core.warning(`Safari is not available on ${core.platform.platform}. Removing Safari capabilities.`);
      return ALL_CAPABILITIES.filter(cap => cap.browserName !== 'safari');
    }
  } else if (process.env.BROWSERS) {
    const requestedBrowsers = new Set(process.env.BROWSERS
      .split(',')
      .map(browser => browser.trim().toLowerCase())
      .map(browser => browser === 'edge' ? 'MicrosoftEdge' : browser));
    return ALL_CAPABILITIES.filter(cap => requestedBrowsers.has(cap.browserName));
  } else if (process.env.BROWSER) {
    const browser = process.env.BROWSER.trim().toLowerCase();
    const mappedBrowser = browser === 'edge' ? 'MicrosoftEdge' : browser;
    const cap = ALL_CAPABILITIES.find(cap => cap.browserName === mappedBrowser);
    if (!cap) throw new Error(`Unsupported browser specified in BROWSER environment variable: ${process.env.BROWSER}`);
    return [cap];
  } else {
    return [ALL_CAPABILITIES[0]];
  }
}

export const config: WebdriverIO.Config = {
  specs: [
    './test/specs/**/*.ts',
  ],

  baseUrl: 'http://localhost:8081',

  maxInstances: 10,
  capabilities: getCapabilities(),

  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10_000,
  connectionRetryTimeout: 120_000,
  connectionRetryCount: 3,

  reporters: ['spec'],

  framework: 'jasmine',
  jasmineOpts: {
    defaultTimeoutInterval: 60_000,
  },
};
