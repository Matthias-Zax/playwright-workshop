import { test } from '@playwright/test';

/*
SUT: 'https://practicesoftwaretesting.com/#/'
*/

test('TC 1: Locator Practice', async ({ page }) => {
    // Navigate to the SUT
    await page.goto('https://practicesoftwaretesting.com/#/');

    // Click on the Toolshop logo
    await page.locator("app-header").click()

    // Click on the menu item "Home"
    await page.locator(".nav-item a").first().click()

    // Select the CheckBox "Hand Tools - Hammer"
    await page.getByRole('checkbox', { name: 'Hammer' }).check()

    // find the Search Input field and fill in the text "Hammer"
    await page.getByPlaceholder('Search').fill('Hammer')

    // click on the search button
    await page.getByTestId('search-submit').click();

    // click on the first item
    await page.locator('.card').first().click()

    await page.getByTestId('sort').selectOption({ label: 'Price (Low - High)' });
    await  page.waitForTimeout(2000)
    await page.getByTestId('sort').selectOption({ value: 'name,desc' });
    await  page.waitForTimeout(2000)
});
