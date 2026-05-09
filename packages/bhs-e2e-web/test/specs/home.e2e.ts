import { expect } from '@wdio/globals';

import HomePage from '../pageobjects/home.page';

describe('home', () => {
  it('should display welcome message', async () => {
    await HomePage.open();

    await expect(HomePage.self).toBeDisplayed();
    await expect(HomePage.title).toHaveText('The City Hall Museum sponsored by the Belton Historical Society.');
  });
});
