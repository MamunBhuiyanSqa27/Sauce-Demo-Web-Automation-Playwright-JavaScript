import { test, expect } from '@playwright/test';

test('Login, add to cart, verify product, logout', async ({ page }) => {
  await page.goto('/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
    await page.waitForTimeout(3000)


  const firstItem = page.locator('.inventory_item').first();
  const productName = await firstItem.locator('.inventory_item_name').textContent();
  await firstItem.locator('button').click();
    await page.waitForTimeout(3000)


  await page.click('.shopping_cart_link');
    await page.waitForTimeout(3000)


  const cartName = await page.locator('.inventory_item_name').textContent();
  expect(cartName).toBe(productName);
    await page.waitForTimeout(3000)


  await page.click('#react-burger-menu-btn');
    await page.waitForTimeout(3000)

  await page.click('#logout_sidebar_link');
    await page.waitForTimeout(3000)


});

