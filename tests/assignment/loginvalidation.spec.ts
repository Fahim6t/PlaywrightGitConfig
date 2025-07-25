
//Task 1
import {test,expect, Locator} from '@playwright/test';

test("Login Button Validation",async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/");

    const userName = page.locator("#user-name");
    const password = page.locator("#password");
    const login = page.locator("#login-button");

    await expect(userName).toBeVisible();
    await expect(password).toBeVisible();
    await expect(login).toBeVisible();

    const k = await login.isDisabled();
    console.log(k);
    if(k){
        await userName.fill('standard_user');
        await password.fill('secret_sauce');
    }
    await expect(login).toBeEnabled();
    page.pause();
});