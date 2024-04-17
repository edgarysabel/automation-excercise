# QA Automation Challenge

This project is a web test automation framework using [Cypress version 13](https://www.cypress.io/), written in JavaScript. It incorporates GitHub Actions for CI/CD and utilizes [Mochawesome](https://github.com/adamgruber/mochawesome) for generating stylish and informative test reports. It tests the webpage [Automation Excercise](https://automationexercise.com/) for UI.

### UI testing

These were the scenerios were automated:

    1. Select Product

    2. Add Product to Cart

    3. Sign Up

    4. Checkout

    5. Logout

    6. Login

    7. Contact US

## Tech Stack

- [Javascript.](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [Nodejs.](https://nodejs.org/en/about/)
- [Cypress.io](https://docs.cypress.io/guides/overview/why-cypress)
- [GitHub Actions.](https://docs.github.com/en/actions)
- [cypress-mochawesome-reporter.](https://www.npmjs.com/package/cypress-mochawesome-reporter)
- [FalsoJS](https://ngneat.github.io/falso/)

## Run Locally

#### Required to run project

- [Node.js](https://nodejs.org/en/download/)

###

- Clone repository:

```bash
  git clone https://github.com/edgarysabel/automation-excercise.git
```

- Install dependencies:

```bash
  npm install
```

- Run project in headless mode:

```bash
  npm run cy:run
```

- Run project in headed mode:

```bash
  npm run cy:open
```

This will run all the tests and generate a report at the end of the execution.

## Run CI

CI has been configured with Github Actions for ease of use and integration since project is already hosted on Github. To run it just go to actions and run the workflow `Run QA Integration Tests` under your preferred Branch. Aditionally, pipeline always run whenever there is a new commit.

Note: To be able to do commits or run workflows please reach me at edgarysabel@gmail.com.

## Test Reports

Mochawesome is configured to generate a standalone HTML report after the test execution. You can find the report in the cypress/reports/mochawesome-report directory. Open mochawesome.html in your browser to view the report.

To customize Mochawesome's configuration, you can modify the mochawesomeReporterOptions in the cypress.json or cypress.config.js file.

Test report have been done with Mochawesome and stored with GitHub Pages, so pipeline is run, the reports are generated along it. To access reports go to [https://edgarysabel.github.io/automation-excercise/](https://edgarysabel.github.io/automation-excercise/).

## Project Structure

#### UI testing configuration

The file cypress.env.json under root directory contains needed credentails for UI testing.

```bash
  {
  "FRONTEND_URL": "https://automationexercise.com/"
  }
```

## Must Know

- The dynamic data was produced using FalsoJS.

- A custom POM Pattern with Javascript and Cypress was used.

- The static data is stored on `fixture` for each test case.
