// page.ts
import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async navigateTo() {
    await this.page.goto('https://practicesoftwaretesting.com/#/');
  }

  async searchForProduct(keyword: string) {
    await this.page.locator('[placeholder="Search"]').fill(keyword);
    await this.page.getByTestId('search-submit').click();
    await this.page.waitForLoadState('networkidle');
  }

  async getCardElementsWithText(text: string) {
    return await this.page.locator('.card').filter({ hasText: text }).allTextContents();
  }

  async getPriceForProduct(product: string) {
    return await this.page.locator('.card', { hasText: product }).getByTestId('product-price').innerText();
  }
}
  
export class PowerToolsPage {
  constructor(private page: Page) {}

  async checkPowerToolsCheckbox() {
    await this.page.getByRole('checkbox', { name: 'Power Tools' }).check();
    await this.page.waitForLoadState('networkidle');
  }

  async getAllCardElements() {
    return await this.page.locator('.card').all();
  }
}

export class SliderPage {
  constructor(private page: Page) {}

  async dragSliderToValue(value: number) {
    const slider = this.page.locator('[role="slider"]');
    await slider.first().dragTo(slider.nth(1));
    await slider.first().focus();

    let currentValue = parseInt(await this.page.locator('.ngx-slider-model-value').innerText());
    while (currentValue > value) {
      await this.page.keyboard.press('ArrowLeft');
      currentValue = parseInt(await this.page.locator('.ngx-slider-model-value').innerText());
    }
    await this.page.waitForLoadState('networkidle');
  }
}

