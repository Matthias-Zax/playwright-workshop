# Playwright End to End suite template

End to End testing suite template using:

- Playwright https://playwright.dev/
- TypeScript https://www.typescriptlang.org/
- Jest https://jestjs.io/

## 🤖 Starting up

We have created a sample [Clerk](https://www.clerk.dev/) app which showcases the existing example, so feel free to play around!

1. Install the dependencies using `npm install` or `yarn install`
2. Rename `.env.example` to `.env`
3. Check out the test by running the `test` or the `test:debug` command
4. Have fun building something!

## 📁 Structure

```sh
 |- tests # Here is the magic 🧙‍♂️
 |-- locator-demo.spec.ts # Working with locators
 |-- toolshop-tests.spec.ts # Writing e2e tests for the Toolshop
 |  playwright.config.ts # Configuration file
```

## 🔨 Work with the Repository

To start ...

1. Clone the Repository "git clone"
2. Import the project in your Visual Studio Code
3. Install Playwright for Testing Plugin
4. Solve Locator File
5. Solve Toolshop File
6. (Optional) Follow the Page Object Pattern

## 🔬 Using data-test-id to target elements

Playwright provides all the goodies of a selector engine, so as to make it really easy to target elements on the document. As a general guideline for querying inside our tests/Page objects:

1. Prefer user-facing and rarely changing attributes like `roles`, input `types` etc.
2. Use `data-test-id` responsibly.
3. There is no one-size-fits-all.

Also you can take a look at Playwright's take on [selection best practices](https://playwright.dev/docs/selectors#best-practices).

## 🧰 Suite configuration

Our test suit is configured to run using Jest as a testing framework and [jest-playwright](https://github.com/playwright-community/jest-playwright) acting as the glue between Jest and Playwright.

**jest-playwright** has more than a couple of ways to configure the suite so please refer to the [documentation](https://github.com/playwright-community/jest-playwright#configuration).

## 🎬 Debugging

Playwright provides a couple of great debugging capabilities at all levels. The ones that you will probably find most useful are:

- Setting the `PWDEBUG=1` environment variable before running the tests to attache the [Playwright inspector](https://playwright.dev/docs/inspector/).
- Setting the `DEBUG=pw:api` environment variable to get the Playwright API logs in the console.

For more options take a look at https://playwright.dev/docs/debug
