import { Page } from '@playwright/test';
import BasePage from './BasePage';
import SoonPageElements from '../elements/SoonPageElements';

export default class SoonPage extends BasePage {
  readonly commingSoon: SoonPageElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.commingSoon = new SoonPageElements(page);
  }

  async like(): Promise<void> {
    await this.commingSoon.getCommingSoonButton().click();
    await this.commingSoon.getLikeButton().click();
  }
}
