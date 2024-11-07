import { faker } from '@faker-js/faker';
import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class HomeContactPageElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getRegisterFirstButton(): Locator {
    return this.page.locator('a', { hasText: 'Criciúma' });
  }

  getRegisterSecondButton(): Locator {
    this.page.getByRole('link', { name: 'contatos', exact: true }).hover();

    return this.page.locator('a[href="index.php/fale-conosco"]');
  }

  async fillForm() {
    await this.page.fill('input[name=nome]', faker.internet.email());
    await this.page.fill('input[name=email]', faker.internet.email());
    await this.page.fill('input[name=telefone]', '48999999999');
    await this.page.fill('textarea[name=comentario]', 'bla bla bla');
    await this.page.click('input[type=submit]');
  }
}
