const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is your project's name?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project: ",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have? (Use arrow keys)",
    choices: [
        "MIT",
        "APACHE 2.0",
        "GPL 3.0",
        "BSD 3",
        "None"
    ],
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
  },
];

// function to write README file
const writeToFile = data => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./README.md', data, err => {
      if (err) {
        reject (err);
        return;
      }
      resolve({
        ok: true,
        message: console.log('README has been written successfully!')
      });
    })
  })
}

// function to initialize program
const init = () => inquirer.prompt(questions);

// function call to initialize program
init()
.then(userInput => generateMarkdown(userInput))
.then(readmeInfo => writeToFile(readmeInfo))
.catch(err => console.log(err));