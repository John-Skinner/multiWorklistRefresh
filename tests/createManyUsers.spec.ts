import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    let userNumber=5;
    test.setTimeout(300000);
    const userNumberStr = process.env.USER_NUMBER
    userNumber = Number(userNumberStr);
    let userName='tomey' + userNumber.toString();
    await page.goto('https://pacsviz.xyz/landing/index.html');
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('admin');
    await page.getByRole('textbox', { name: 'Username' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('Admin@2026');
    await page.getByRole('textbox', { name: 'Password' }).press('Enter');
    await page.getByRole('button', { name: 'tools' }).click();
    await page.getByRole('menuitem', { name: 'person fill User' }).click();
    await page.getByRole('button', { name: 'plus circle Create New User' }).click();
    await page.getByRole('textbox', { name: 'Enter Username' }).click();
    await page.getByRole('textbox', { name: 'Enter Username' }).fill(userName);
    await page.getByRole('textbox', { name: 'Enter Username' }).press('Tab');
    await page.getByRole('textbox', { name: 'Enter Email' }).fill('skinnerjvs@gmail.com');
    await page.getByRole('textbox', { name: 'Enter Email' }).press('Tab');
    await page.getByRole('textbox', { name: 'Enter First Name' }).fill('Rain');
    await page.getByRole('textbox', { name: 'Enter First Name' }).press('Tab');
    await page.getByRole('textbox', { name: 'Enter Last Name' }).fill('Man');
    await page.getByRole('textbox', { name: 'Enter Last Name' }).press('Tab');
    await page.getByRole('textbox', { name: 'Enter Mobile Number' }).fill('2624249651');
    await page.getByRole('button', { name: 'Select customer' }).click();
    await page.getByRole('menuitem', { name: 'Saince' }).click();
    await page.getByRole('button', { name: 'Select Tenant(s)' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('menu').locator('label').filter({ hasText: 'Select/unselect all' }).click();
    await page.getByText('HospitalC106').click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'Select Permission(s)' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('menu').locator('label').filter({ hasText: 'Select/unselect all' }).click();
    await page.waitForTimeout(3000);

    await page.getByRole('button', { name: 'Create User' }).click();
    await page.waitForTimeout(3000);
    await expect(page.getByText('User Administration')).toBeAttached({timeout: 300000});
    await page.waitForTimeout(3000);


});
