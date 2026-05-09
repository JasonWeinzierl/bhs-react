import * as core from '@actions/core';

export const config: WebdriverIO.Config = {
  specs: [
    './test/specs/**/*.ts',
  ],

  baseUrl: 'https://localhost:8081',

  maxInstances: 10,
  capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: [
        'headless',
        'window-size=1920,1080',
      ],
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
        'window-size=1920,1080',
      ],
    },
  }],

  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10_000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  reporters: ['spec'],

  framework: 'jasmine',
  jasmineOpts: {
    defaultTimeoutInterval: 60000,
  },

  onPrepare(_cfg, capabilities) {
    if (!core.platform.isMacOS && Array.isArray(capabilities)) {
      core.warning(`Safari is not available on ${core.platform.platform}. Removing Safari capabilities.`);
      const safariIndex = capabilities.findIndex(cap => 'browserName' in cap && cap.browserName === 'safari');
      capabilities.splice(safariIndex, 1);
    }
  },
};
