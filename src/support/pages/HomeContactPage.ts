import { Page } from '@playwright/test';
import BasePage from './BasePage';
import HomeContactPageElements from '../elements/HomeContactPageElements';

export default class HomeContactPage extends BasePage {
  readonly homeElements: HomeContactPageElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.homeElements = new HomeContactPageElements(page);
  }

  async accessContatos(): Promise<void> {
    await this.homeElements.getRegisterFirstButton().click();
    await this.homeElements.getRegisterSecondButton().click();
    await this.homeElements.fillForm();
  }
}
