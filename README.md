# Siemens QA Task

This repository contains the code for the Siemens QA Task.

[![CircleCI](https://circleci.com/gh/JohnEGhaly/SiemensQATask.svg?style=svg)](https://app.circleci.com/pipelines/circleci/BPLUdcjd1LnqY9SpuMebBz/NoEMmJreiUtCoknn29W4cr)


## Overview

This project consists of automated tests for a contact us page, a search functionality using NightwatchJS and api testing using Mocha-Auth-User API routes with SuperTest.

## Contact Us Tests

The contact us tests include assertions for validating the visibility of the contact form, checking email input validation, verifying error messages for invalid inputs, ensuring success flows, and more.

### Running Contact Us Tests

To run the contact us tests, execute the following command:
npx nightwatch nightwatch/tests/contactUsTest.js


## Search Functionality Tests

The search functionality tests cover various scenarios related to searching for dresses on the website.

### Running Search Functionality Tests

To run the search functionality tests, execute the following command:
npx nightwatch nightwatch/tests/searchDressTest.js


## API Testing

The API testing module includes tests for testing various endpoints of the backend API.

### Running API Tests

To run the API tests, execute the following command:

npm run dev
npx mocha api.js --reporter mochawesome


## Prerequisites

Before running the tests, ensure you have Node.js and npm installed on your system.

## Installation

1. Clone this repository to your local machine:

git clone https://github.com/JohnEGhaly/SiemensQATask.git

2. Install dependencies:

npm install



