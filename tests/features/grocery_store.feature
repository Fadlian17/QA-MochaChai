Feature: Simple Grocery Store API

Scenario: Get all products
  Given I have the API endpoint "/products"
  When I send a GET request to the endpoint
  Then I should receive a 200 status code
  And the response should contain a list of products