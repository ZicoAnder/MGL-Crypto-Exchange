## MGL Exchange
## Overview
MGL Exchange is a platform for buying and selling cryptocurrencies on an exchange. Users can trade various cryptocurrencies, view real-time market data, manage their portfolios, and execute trades.

## Bugs and Glitches
# Login and Signup Endpoint Not Working
Description: Users are unable to log in or sign up on the platform.
Symptoms: When users attempt to log in or sign up, they receive error messages or are redirected to an error page.
# Steps to Reproduce:
Navigate to the login or signup page.
Enter valid credentials for login or registration.
Submit the form.
Observe that the login/signup process fails.
Expected Behavior: Users should be able to successfully log in or sign up and access their accounts.
Priority: High

## Signup Endpoint Improvement
Description: Enhanced error handling and logic separation in the signup endpoint.
Resolution:
Moved the email verification check to the beginning of the function to ensure email verification before signup.
Implemented try-catch block for better error handling during the signup process.
Refactored user creation logic into a separate method for improved code organization.
Priority: High
Contributing
Instructions for contributing to the project, such as how to report bugs, submit feature requests, or contribute code.

## SQL File Import Issue
# Description: SQL files were not importing properly in MySQL Workbench due to an error in the query.
Symptoms: When attempting to import SQL files into MySQL Workbench, an error is encountered preventing successful import.
Steps to Reproduce:
Open MySQL Workbench.
Attempt to import SQL files containing database schema or data.
Observe the error preventing successful import.
Expected Behavior: SQL files should import without errors, and the database schema or data should be successfully imported into MySQL Workbench.
Resolution: The issue was caused by a comma problem in the SQL query, which was subsequently fixed.
Priority: Low/Medium

## Areas for Improvement
1. Error Handling
Issue: Lack of error handling in certain parts of the code.
Suggestion: Implement error handling mechanisms, such as try-catch blocks or error boundaries, to gracefully handle errors and prevent crashes.
2. Performance Optimization
Issue: Certain operations or components may cause performance bottlenecks.
Suggestion: Profile the application using performance monitoring tools and optimize critical sections of the code. This may include reducing unnecessary re-renders, optimizing network requests, or lazy-loading resources.
3. Express Async Errors Dependency
Description: Implement the express-async-errors dependency to simplify error handling in controllers and endpoints.
Details: The express-async-errors package allows handling of asynchronous route handlers in Express without explicit try-catch blocks. It automatically catches errors and forwards them to the error handling middleware.
Priority: Medium
4. Sequelize Dependency
I would suggest the use of the sequelize dependency/module which would ensure lesser written code and bugs
Benefits:
Reduced Risk for Bugs and Errors: Sequelize helps reduce the risk of bugs and errors by providing a higher level of abstraction for database operations. This reduces the likelihood of common SQL-related errors, such as SQL injection attacks and syntax errors.
Improved Readability: Sequelize improves code readability by providing a more intuitive and declarative way to define database models and query data. This makes it easier for developers to understand and maintain the codebase.

Priority: Medium

## Features
# Current Ethereum Price in User Profile
Description: Added functionality to display the current Ethereum price in the user profile.
Details: The current Ethereum price is fetched from an external API and displayed in the user profile section. This allows users to quickly view the latest Ethereum price without navigating away from their profile.
Priority: High/Medium/Low

