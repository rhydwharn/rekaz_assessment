
# REKAZ.IO REGISTRATION AUTOMATION

This repository contains an automated test suite using Cypress with Behavior-Driven Development (BDD) for NEO EMR TEST AUTOMATION

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Running the Tests](#running-the-tests)
- [Cypress in GitHub Actions](#cypress-in-github-actions)

## Prerequisites

Before you can run this project, ensure you have the following installed on your machine:

1. **Node.js**: Download and install from [Node.js website](https://nodejs.org/en/). (Ensure you have Node.js version 16.x or higher).
2. **npm**: Node Package Manager, which comes with Node.js.
3. **Git**: To clone this repository. Clone from https://github.com/rhydwharn/rekaz_assessment.git.

**You will need a working internet connection to pull the project dependencies. If these dependencies do not exist on the machine**

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone my repository**:

   ```bash
   git clone https://github.com/rhydwharn/rekaz_assessment.git
   ```

2. **Install project dependencies**:

   Install all required npm packages that exist in my package.json file by running:

   ```bash
   npm i
   ```

   This will install all the dependencies listed in `package.json`.

## Dependencies

Here’s a list of the primary dependencies this project uses:

- **Cypress**: A JavaScript End-to-End testing framework.
- **Cypress-Cucumber Preprocessor**: Allows me to write Gherkin syntax for BDD.
- **@faker-js/faker**: I used this plugin to generate random data like usernames, passwords, etc.
  
Run this command to install these dependencies if not already installed:

```bash
npm install cypress @badeball/cypress-cucumber-preprocessor @faker-js/faker 
```

## Project Structure

The project is organized as follows:

```
soar/
│
├── cypress/
│   ├── fixtures/          # Warehouse all test data and page elements that are used across the application
│   ├── e2e/               # This is where the feature files in Gherkin syntax and the test steps are declared
│   ├── plugins/           # Configuration for the plugins used
│   ├── support/           # This is where the custom commands that is used within the application were created. There are two commands files [custom_actions - Used for page interaction and switch statements, command - where custom commands that are reusable are been declared]
├── cypress.config.js       # Cypress configuration file
├── package.json            # Lists project dependencies and scripts
├── README.md               # This file that describes the context on how to clone and understand the project.
```

## Configuration

### Cypress Configuration (cypress.config.js)

The Cypress configuration file defines various settings such as timeouts, viewport sizes, baseUrl, etc.

## Running the Tests

### Run All Tests:

You can run all tests with this command:

```bash
npx cypress run
```

### Run Tests in Interactive Mode:

To run Cypress in interactive mode (useful for debugging):

```bash
npx cypress open
```

### Running Tests in Headless Mode:

```bash
npx cypress run --headless
```

## Cypress in GitHub Actions

I integrated this Cypress test suite with GitHub Actions for CI/CD.

Create a `.github/workflows/runner.yml` file and add the following:

```yaml
name: Run Cypress Test

on: [push]

jobs:
    cypress-runner:
        runs-on: ubuntu-latest

        steps:
        - name: Intialize NPM
          uses: actions/checkout@v4

        - name: Run Cypress
          uses: cypress-io/github-action@v6

      - name: Node reporter
        run: node reporter.js
      - name: Upload test results
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: cypress-results
          path: |
            cypress/screenshots
            cypress/videos
            cypress/logs
            results/
```

## Additional Notes

- **Fixtures**: The test data for credentials is stored in the `cypress/fixtures/users.json` 
- **Test Data**: The data required for the tests is generated using `@faker-js/faker`.
  
---