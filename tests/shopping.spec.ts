import { test, expect } from '@playwright/test';
import { LoginPage } from './login';
import { LogOut } from './logout';
test(`Testing`, async ({ page }) => {
    const objlogin = new LoginPage(page);
    await objlogin.goto();
    await objlogin.login("standard_user", "secret_sauce");

    await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
    await page.getByRole('link', { name: '1' }).click();
    await page.getByRole('link', { name: 'CHECKOUT' }).click();
    await page.locator('[data-test="firstName"]').fill("Fahim");
    await page.locator('[data-test="lastName"]').fill("Iqbal");
    await page.locator('[data-test="postalCode"]').fill("600001");
    await page.getByRole('button', { name: 'CONTINUE' }).click();
    await page.getByRole('link', { name: 'FINISH' }).click();

    const objLogout = new LogOut();
    await objLogout.logout(page);
    await page.close();
})
 