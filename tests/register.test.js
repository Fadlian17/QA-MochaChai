const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const puppeteer = require('puppeteer');

let browser;
let page;

Given('I am on the registration page', async function () {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
});

When('I fill in the registration form with valid details', async function () {
    await page.type('#input-firstname', 'John');
    await page.type('#input-lastname', 'Doe');
    await page.type('#input-email', 'johndoe@example.com');
    await page.type('#input-telephone', '1234567890');
    await page.type('#input-password', 'password123');
    await page.type('#input-confirm', 'password123');
    await page.click('input[name="agree"]');
});

When('I submit the form', async function () {
    await page.click('input[type="submit"]');
});

Then('I should see a confirmation message', async function () {
    await page.waitForSelector('.alert-success');
    const successMessage = await page.$eval('.alert-success', el => el.textContent);
    expect(successMessage).to.include('Your Account Has Been Created!');
    await browser.close();
});
