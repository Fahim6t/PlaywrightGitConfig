import {test,expect} from "@playwright/test";

test("Message check",async({page})=>{
    await page.goto("http://quiz.hematitecorp.com/#/");
    await page.getByRole('link', { name: 'Feedback ? Click Here' }).click();
    await page.locator("button[type='submit']");

    await page.getByRole('textbox', { name: 'Full name*' }).click();
    await page.getByRole('textbox', { name: 'Full name*' }).fill('Fahim');
    await page.getByRole('textbox', { name: 'Email*' }).click();
    await page.getByRole('textbox', { name: 'Email*' }).fill('fahimbasha00@gmail.com');
    await page.getByRole('textbox', { name: 'Contact*' }).click();
    await page.getByRole('textbox', { name: 'Contact*' }).fill('6381680772');
    await page.getByRole('radio', { name: 'Other Branch' }).check();
    await page.getByRole('textbox', { name: 'Other Branch' }).click();
    await page.getByRole('textbox', { name: 'Other Branch' }).fill('Changepond');
    await page.locator('input[name="question1"]').click();
    await page.locator('input[name="question1"]').fill('4');
    await page.locator('input[name="question2"]').click();
    await page.locator('input[name="question2"]').fill('3');
    await page.locator('textarea[name="question3"]').click();
    await page.locator('textarea[name="question3"]').fill('Good training institute with well experienced trainers');
    await page.locator('textarea[name="question4"]').click();
    await page.locator('textarea[name="question4"]').fill('Need to add extra courses');
    await page.locator('div:nth-child(9) > .MuiFormControl-root > .MuiInputBase-root').click();
    await page.locator('textarea[name="question5"]').fill('Noting');
     await page.getByRole('button', { name: 'Submit' }).click();

    const message = await page.getByText("Thank you for your feedback.");
    await expect(message).toContainText("Thank you for your feedback.");

   

    await page.pause();
});