export class LogOut{

    async logout(page:any){
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();    
    }
}

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.getByRole('button', { name: 'Open Menu' }).click();
//   await page.getByRole('link', { name: 'Logout' }).click();
// });