const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user>
inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe your project",
  },
  {
    type: "list",
    name: "contents",
    message: "Please add items to your table of contents",
  },
  {
    type: "input",
    name: "hobby",
    message: "What is your favorite hobby?",
  },
]);

// // function to write README file
// function writeToFile(fileName, data) {}

// // function to initialize program
// function init() {}

// // function call to initialize program
// init();

//

// Table of Contents

// Installation

// Usage

// License

// Contributing

// Tests

// Questions
