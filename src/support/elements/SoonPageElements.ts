import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class SoonPageElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getCommingSoonButton(): Locator {
    return this.page.getByRole('link', { name: 'em breve', exact: true });
  }

  getLikeButton(): Locator {
    return this.page.locator('a[filme_id="4733"]');
  }
}
