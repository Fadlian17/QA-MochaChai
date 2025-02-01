const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser, page;

// Use dynamic import to load chai
let expect;
(async () => {
    const chai = await import('chai');
    expect = chai.expect;
})();

Given('I am on the login page', async function () {
    browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/v1/index.html');
});

When('I enter valid credentials', async function () {
    await page.fill('input[name="user-name"]', 'standard_user');
    await page.fill('input[name="password"]', 'secret_sauce');
    await page.click('input[type="submit"]');
});

Then('I should be redirected to the homepage', async function () {
    const url = await page.url();
    expect(url).to.equal('https://www.saucedemo.com/v1/inventory.html');
    await browser.close();
});
