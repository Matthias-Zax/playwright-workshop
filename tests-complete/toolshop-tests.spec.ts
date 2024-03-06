import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/#/');
})

test('T5_LOGIN_withInvalidCredentials_correctErrorMsgDisplayed', async ({ page }) => {
  // Go To the SUT
  // navigate the the login
  await page.goto('https://practicesoftwaretesting.com/#/auth/login');

  // Select and insert into the mail Input Field "invalid@mail.com"
  await page.getByTestId('email').fill('invalid@test.com');

  // Select and insert into the pw Input Field "invalid"
  await page.getByTestId('password').fill('invalud');

  // click the login button
  await page.getByTestId('login-submit').click();

  // validate that the error MSG is "Invalid email or password"
  await expect(page.getByText('Invalid email or password')).toBeVisible();
})

test('T1_INVENTORY_validateNumberOfPowerTools_mustBeGreaterThan5', async ({ page }) => {
  // Go To the SUT

  // select the checkbox with the name "Power Tools"
  await page.getByRole('checkbox', { name: 'Power Tools' }).check()
  
  // get all the displayed elements / items
  const allElements = await page.locator('.card').all()

  // assert that the number is bigger then 5
  await page.waitForTimeout(1000)
  expect(allElements.length).toBeGreaterThan(5) 
})

test('T1_ITEMPRICING2_validateClawHammer_priceHigherThen10', async ({ page }) => {
  // go to the SUT

  // select the checkbox "Hammer" below the Hammer Tools
  await page.getByRole('checkbox', { name: 'Hammer' }).check()

  // Search for "Claw" in the Search Field and click on the search button
  await page.getByPlaceholder('Search').fill('Claw');
  await page.getByTestId('search-submit').click();

  // Select all the card items and validate as the are present if the price is higher than 10
  await page.waitForSelector('.card')

  // get all the items
  const elements = await page.locator('.card').filter({ hasText: 'Claw Hammer' }).all()
  for ( const element of elements) {
    // remove $ from the price
    const priceStr = await element.getByTestId('product-price').innerText();    
    let price = parseFloat(priceStr.substring(1))
    // expect that price is higher then 10
    expect.soft(price).toBeGreaterThan(10.00)

    // Debug
    console.log(await element.allTextContents())
  }
});


test('T1_FILTER_useSlider70-100_correctItemsDisplayed', async ({ page }) => {
  // go to the SUT

  // set Slider to 70
  await page.locator('[role="slider"]').first().dragTo(page.locator('[role="slider"]').nth(1))
  await page.locator('[role="slider"]').first().focus()
  let minPrice = parseInt( await page.locator('.ngx-slider-model-value').innerText())

  while ( minPrice > 75) {
    await page.keyboard.press('ArrowLeft')  

    minPrice = parseInt( await page.locator('.ngx-slider-model-value').innerText())

    console.log(minPrice)
  }  

  // assert first item's price is correct
  // get all the items
  await assertPriceIsCorrect(page, 'Claw Hammer', 75.00, 100.00);
})

/**
 * Asserts that the price of items with the specified name on the page falls within the specified range.
 *
 * @param {any} page - The page object for interacting with the browser
 * @param {string} itemName - The name of the item to search for
 * @param {number} minPrice - The minimum acceptable price
 * @param {number} maxPrice - The maximum acceptable price
 * @return {Promise<void>} - A promise that resolves after asserting the price range for the items
 */
async function assertPriceIsCorrect(page: any, itemName: string, minPrice: number, maxPrice: number) {
  const elements = await page.locator('.card').filter({ hasText: itemName }).all()
  
  for (const element of elements) {
    const priceStr = await element.locator('[data-testid="product-price"]').innerText();
    let price = parseFloat(priceStr.substring(1));
    expect.soft(price).toBeGreaterThan(minPrice);
    expect.soft(price).toBeLessThanOrEqual(maxPrice);
    console.log(await element.innerText());
  }
}