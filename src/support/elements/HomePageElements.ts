import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class HomePageElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getFirstButton(): Locator {
    return this.page.locator('a', { hasText: 'Criciúma' });
  }

  getCalendarButton(): Locator {
    return this.page.getByRole('link', {
      name: 'CONSULTE OUTRAS DATAS',
      exact: true
    });
  }

  getPriceButton(): Locator {
    return this.page.getByRole('link', {
      name: 'PREÇOS',
      exact: true
    });
  }

  getPriceButtonClose(): Locator {
    return this.page.locator('a[id="fancybox-close"]');
  }

  getDateButton(): Locator {
    return this.page.getByRole('link', { name: '8', exact: true });
  }
}
