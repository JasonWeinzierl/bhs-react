import { browser } from '@wdio/globals';

export default class Page {
  /** {@link path} is prepended with baseUrl using node:url.resolve. */
  protected open(path: string) {
    return browser.url(path);
  }

  protected getByTestID(testID: string) {
    return browser.$(`[data-testid="${testID}"]`);
  }
}
