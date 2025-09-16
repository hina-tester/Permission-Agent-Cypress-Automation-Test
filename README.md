# Permission-Agent-Cypress-Automation-Test
homework for QA post


Permission.io Test Automation Suite
This repository contains an end-to-end test automation suite for the Permission.io application, focusing on the core login and AI Agent functionalities. The tests are written in JavaScript using the Cypress framework and follow the Page Object Model (POM) design pattern for maintainability and scalability.

Test Suite Breakdown
The test suite is structured to cover the key features of the application. Each test path is a separate file, making it easy to run specific tests or the entire suite.

Login Feature (login-feature.cy.js):

Tests successful login with valid credentials.

Validates login failure with incorrect credentials.

Tests account lockout after multiple failed login attempts.

AI Agent Feature (chat-functionality.cy.js):

Basic Chat Functionality:

Verifies that the AI page and all its UI elements (input field, send button, chat history) load correctly.

Ensures the input field and send button are functional.

Chat Interaction Tests:

Sends messages and validates that the AI provides the correct responses.

Verifies that message history persists after a session refresh (page reload).

Validates that timestamps are present on all messages and are in the correct format.

Project Structure & Custom Commands
This project uses a modular and scalable structure to enhance code reusability and readability:

cypress/e2e/: Contains the main test files. Each .cy.js file focuses on a specific feature or task.

cypress/pages/: Implements the Page Object Model (POM). Each file in this directory represents a page or major component of the application and contains all the selectors and actions for that page.

cypress/support/commands.js: Contains custom Cypress commands, including cy.login() and cy.logout(), to streamline common authentication tasks across the test suite.

How to Run the Tests
Prerequisites
Node.js: Ensure Node.js is installed. You can download it from nodejs.org.

Cypress: The necessary Cypress dependencies will be installed in the next step.

Setup Instructions
Clone this repository to your local machine.

Navigate to the project directory in your terminal.

Install all required dependencies by running:

npm install

Execution
You can run the tests in two modes:

GUI Mode: Opens the Cypress Test Runner, allowing you to watch the tests execute in real-time. This is useful for development and debugging.

npx cypress open

Once the Test Runner opens, select the test file you wish to run.

Command Line (Headless Mode): Executes all tests in a headless browser, which is ideal for a Continuous Integration (CI) environment.

npx cypress run

Running Specific Tests
To run a single test file from the command line, use the --spec flag:

npx cypress run --spec "cypress/e2e/login-feature.cy.js"


Additional Notes
ReCaptcha Handling
This test suite handles ReCaptcha challenges with manual intervention. The automation will pause when a ReCaptcha challenge appears, and you must manually complete it to allow the script to continue. This is the chosen approach due to the complexities and unreliability of automating ReCaptcha.

Test Execution & Validation
Validate Outcomes: After the tests complete, review the output in the terminal (for headless mode) or the Test Runner (for GUI mode) to ensure all assertions have passed.

Special Considerations: When running the login tests, be prepared to manually handle any ReCaptcha challenges that appear to allow the test to proceed.
