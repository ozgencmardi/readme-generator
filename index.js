const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a brief description of your project."
  },
  {
    type: "input",
    name: "installation",
    message: "What are the guidelines for installing your project?"
  },
  {
    type: "input",
    name: "usage",
    message: "How should your project be used?"
  },
  {
    type: "input",
    name: "links",
    message: "What are your project's links?"
  },
  {
    type: "list",
    name: "license",
    message: "Which licence should be applied to your project?"
  },
  {
    type: "input",
    name: "contributing",
    message: "What additional ways can people help with your project?"
  },
  {
    type: "input",
    name: "tests",
    message: "What testing guidelines apply to your project?"
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  }
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.log(err);
    } else {
      console.log("README.md file generated successfully!");
    }
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(data => {
    const markdown = generateMarkdown(data);
    writeToFile("README.md", markdown);
  });
}

// function call to initialize program
init();
