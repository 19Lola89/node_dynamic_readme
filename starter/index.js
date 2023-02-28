const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user

const questions = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the title of your project?",
      validate: (input) => {
        if (!input) {
          return "please enter a project title";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "description",
      message: "What is the motivation of your project?",
      validate: (input) => {
        if (!input) {
          return "please enter your motivation of the project";
        }
        return true;
      },
    },
    {
      type: "checkbox",
      name: "contents",
      message: "Please add items to your table of contents",
      choices: ["Installation", "Usage", "Credits", "License"],
      validate: (input) => {
        if (!input) {
          return "Please choose your table of contents";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "installation",
      message:
        "What is required to install your project? Please provide step-by-step guide",
      validate: (input) => {
        if (!input) {
          return "what are the installation requirements, pls write N/A if none";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "usage",
      message:
        "Please provide instructions and examples for use. Add screenshots if needed",
      validate: (input) => {
        if (!input) {
          return "Please fill in N/A if there is nothing to add to usage";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "credits",
      message:
        "list your collaborators,if any, with links to their github profiles",
      validate: (input) => {
        if (!input) {
          return "Please fill in N/A if there is nothing to add to credits";
        }
        return true;
      },
    },
    {
      type: "list",
      name: "license",
      message: "Please choose your license",
      choices: [
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License',
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "Mozilla Public License 2.0",
        "The Unlicense",
        "none",
      ],
      validate: (input) => {
        if (!input) {
          return "Please choose at least one option";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "features",
      message: "please list the features of your project",
    },
    {
      type: "input",
      name: "test",
      message: "What are the test instructions?",
    },
    {
      type: "input",
      name: "contribution",
      message: "please add contributions, if any.",
    },
  ]);

  // passing the answers from the input to generate markdown file

  // // function to initialize program
  // function init() {}

  // // function call to initialize program
  // init();
};
