import { test, expect } from '@playwright/test';
import { HomePage, PowerToolsPage, SliderPage } from './pageObjects/homepage';

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateTo();
});

test('Get started with locator', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.searchForProduct('Hammer');

  const elements = await homePage.getCardElementsWithText('Claw Hammer');
  for (const element of elements) {
    console.log(element);
  }

  const priceThorHammer = await homePage.getPriceForProduct('Thor Hammer');
  expect.soft(priceThorHammer).toBe('$11.14');

  const numericPart = priceThorHammer.substring(1);
  const price = parseFloat(numericPart);
  expect.soft(price).toBeGreaterThan(15.00);
});

test('we need to have at least 5 power tools', async ({ page }) => {
  const powerToolsPage = new PowerToolsPage(page);
  await powerToolsPage.checkPowerToolsCheckbox();

  const allElements = await powerToolsPage.getAllCardElements();
  expect(allElements.length).toBe(5);
});

test('Slider Price', async ({ page }) => {
  const sliderPage = new SliderPage(page);
  await sliderPage.dragSliderToValue(75);
});