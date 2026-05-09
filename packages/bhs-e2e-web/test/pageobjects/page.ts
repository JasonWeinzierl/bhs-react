import { browser } from '@wdio/globals'

export default class Page {
  protected open(path: string) {
    return browser.url(`https://the-internet.herokuapp.com/${path}`)
  }

  protected getByTestID(testID: string) {
    return browser.$(`[data-testid="${testID}"]`)
  }
}
