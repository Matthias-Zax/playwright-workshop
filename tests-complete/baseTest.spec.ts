import { test as base } from '@playwright/test';

const test = base.extend({
  page: async ({ page }, use) => {
    await use(Object.assign(page, {
      getById: (id) => page.locator(`#${id}`),
      getByClass: (className) => page.locator(`.${className}`)
    }));
  },
});

test('custom locator', async ({ page }) => {
  await page.getById('your-id');
  await page.getByClass('your-class');
});
