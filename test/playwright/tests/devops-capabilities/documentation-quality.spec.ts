import { test, expect } from '@playwright/test';

test('Documentation quality page loads correctly', async ({ page }) => {
  await page.goto('/devops-capabilities/process/documentation-quality/');

  // Check for page title
  await expect(page).toHaveTitle('DORA | DevOps Capabilities: Documentation quality');

  // Check for page heading
  await expect(page.locator('h1')).toContainText('Documentation quality');

  // Check for table
  await expect(page.locator('table')).toBeVisible();

  // Check for links
  await expect(page.locator('a[href="/research/archives/2022/?tab_archives=questions"]')).toBeVisible();
  await expect(page.locator('a[href="/research/archives/2022/?tab_archives=structural-equation-model"]')).toBeVisible();
  await expect(page.locator('a[href="/publications/pdf/state-of-devops-2021.pdf"]')).toBeVisible();
  await expect(page.locator('a[href="https://developers.google.com/tech-writing"]')).toBeVisible();
  await expect(page.locator('a[href="https://developers.google.com/style"]')).toBeVisible();
  await expect(page.locator('a[href="https://www.oreilly.com/library/view/software-engineering-at/9781492082781/"]')).toBeVisible();
  await expect(page.locator('a[href="https://cloud.google.com/blog/products/devops-sre/deep-dive-into-2022-state-of-devops-report-on-documentation"]')).toBeVisible();
  await expect(page.locator('a[href="/research/team/#michelle-irvine"]')).toBeVisible();
  await expect(page.locator('a[href="/research/team/#derek-debellis"]')).toBeVisible();
});