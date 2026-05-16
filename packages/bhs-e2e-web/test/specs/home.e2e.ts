import { expect } from '@wdio/globals';

import HomePage from '../pageobjects/home.page';

describe('home', () => {
  it('should display welcome message', async () => {
    await HomePage.open();

    await expect(HomePage.self).toBeDisplayed();
    await expect(HomePage.title).toHaveText('The City Hall Museum sponsored by the Belton Historical Society');
    await expect(HomePage.description).toHaveText('A non-profit, charitable organization whose purpose is to discover, collect, and research artifacts, documents, and material relating to the history of the surrounding community and to record historical information of the present.');
  });
});
