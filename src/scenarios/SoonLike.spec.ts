/* eslint-disable prettier/prettier */
import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import SoonPage from '../support/pages/SoonPage';

test.describe('Gostar de um filme da sessão Em Breve', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let soonPage: SoonPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    soonPage = new SoonPage(page);
    await page.goto(BASE_URL);
    await page.locator('a', { hasText: 'Criciúma' }).click();
  });

  test('Clica em Gostei', async () => {
    await soonPage.like();
  });
});
