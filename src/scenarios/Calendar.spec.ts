/* eslint-disable prettier/prettier */
import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import HomePage from '../support/pages/HomePage';

test.describe('Trocar a data do calendario', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let homePage: HomePage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto(BASE_URL);
  });

  test('Troca a data', async () => {
    await homePage.changeDate();
  });
});
