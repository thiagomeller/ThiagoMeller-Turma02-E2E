/* eslint-disable prettier/prettier */
import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import HomeContactPage from '../support/pages/HomeContactPage';

test.describe('Acessa Cricuma', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let homePage: HomeContactPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    homePage = new HomeContactPage(page);
    await page.goto(BASE_URL);
  });

  test('Enviar formulario de contato', async () => {
    await homePage.accessContatos();
  });
});
