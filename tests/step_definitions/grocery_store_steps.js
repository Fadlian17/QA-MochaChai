const { Given, When, Then } = require('@cucumber/cucumber');
// const axios = require('axios');
const chai = require('chai');
const expect = chai.expect;

let response;

Given('I have the API endpoint {string}', function (endpoint) {
  this.endpoint = `https://api.example.com${endpoint}`;
});

When('I send a GET request to the endpoint', async function () {
  response = await axios.get(this.endpoint);
});

Then('I should receive a {int} status code', function (statusCode) {
  expect(response.status).to.equal(statusCode);
});

Then('the response should contain a list of products', function () {
  expect(response.data).to.be.an('array');
});
