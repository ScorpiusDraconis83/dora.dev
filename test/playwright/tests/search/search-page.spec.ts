import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/search/');
    await page.getByRole('searchbox', { name: 'Search dora.dev for...' }).fill('generative');
    await page.getByRole('button', { name: 'search' }).click();
});

test('A search for "generative" finds results.', async ({ page }) => {
    await expect(page.locator('#webResults')).toContainText('Generative Organizational Culture');
    await expect(page.locator('#publicationResults')).toContainText('Read the full report');
});
