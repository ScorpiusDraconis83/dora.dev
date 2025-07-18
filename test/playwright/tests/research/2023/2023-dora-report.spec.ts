import { test, expect } from '@playwright/test';
import { sidebarLinks } from '../sidebarLinks';

const languageToUrlMap = {
  'English': '2023-dora-accelerate-state-of-devops-report.pdf',
  'Español': '2023-dora-accelerate-state-of-devops-report_es.pdf',
  'Español - América Latina': '2023-dora-accelerate-state-of-devops-report_es-419.pdf',
  'Français': '2023-dora-accelerate-state-of-devops-report_fr.pdf',
  'Italiano': '2023-dora-accelerate-state-of-devops-report_it.pdf',
  'Português - Brasil': '2023-dora-accelerate-state-of-devops-report_pt-BR.pdf',
  '中文 – 简体': '2023-dora-accelerate-state-of-devops-report_zh-TW.pdf' ,
  '日本語': '2023-dora-accelerate-state-of-devops-report_ja.pdf',
  '한국어': '2023-dora-accelerate-state-of-devops-report_ko.pdf'
};

test.beforeEach(async ({ page }) => {
  await page.goto('/research/2023/dora-report/');
});

test('2023 DORA report page has the correct title.', async ({ page }) => {
  await expect(page).toHaveTitle('DORA | Accelerate State of DevOps Report 2023');
});

test('2023 DORA report page has the correct header.', async ({ page }) => {
  await expect(page.locator('h1')).toContainText('DORA Research: 2023');
});

test('2023 DORA report page has the correct report image', async ({ page }) => {
  const reportImage = page.locator('img[src="2023-dora-accelerate-state-of-devops-report.png"]');
  await expect(reportImage).toBeVisible();
  await expect(reportImage).toHaveAttribute('alt', 'Accelerate State of DevOps Report 2023');
});

test('2023 DORA report page has the correct number of language options.', async ({ page }) => {
  const languageOptions = await page.locator('item a.button').count();
  const expectedLanguageCount = Object.keys(languageToUrlMap).length;
  await expect(languageOptions).toBe(expectedLanguageCount);
});

for (const language in languageToUrlMap) {
  test(`2023 DORA report should link to the correct ${language} URL`, async ({ page }) => {
    const url = languageToUrlMap[language];
    const languageLink = page.getByRole('link', { name: language, exact: true });
    await expect(languageLink).toHaveAttribute('href', url);
  });
}

test('2023 DORA report page has the correct sidebar.', async ({ page }) => {
  for (const sidebarLink of sidebarLinks) {
    await expect(page.getByRole('link', { name: sidebarLink, exact: true })).toBeVisible();
  }
});
