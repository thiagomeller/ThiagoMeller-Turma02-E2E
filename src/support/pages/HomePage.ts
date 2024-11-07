import { Page } from '@playwright/test';
import BasePage from './BasePage';
import HomePageElements from '../elements/HomePageElements';

export default class HomePage extends BasePage {
  readonly homeElements: HomePageElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.homeElements = new HomePageElements(page);
  }

  async changeDate(): Promise<void> {
    await this.homeElements.getFirstButton().click();
    await this.homeElements.getCalendarButton().click();
    await this.homeElements.getDateButton().click();
  }

  async viewPrices(): Promise<void> {
    await this.homeElements.getFirstButton().click();
    await this.homeElements.getPriceButton().click();
    await this.homeElements.getPriceButtonClose().click();
  }
}
