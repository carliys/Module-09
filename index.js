const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
  {
    type: "input",
    name: "Title",
    message: "What is the tittle of your project?",
  },
  {
    type: "input",
    name: "Description",
    message: "What was your motovation?",
 
  },
  {
    type: "input",
    name: "Installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "Usage",
    message: "What command do you need to use to run the command?",
  },
  {
    type: "input",
    name: "Licence",
    message: "Choose a licence",
    Options: ["Apache", "BSD", "MIT", "None"], 
  },
  {
    type: "input",
    name: "Test",
    message: "What are the test inistructions?",
  },
  {
    type: "input",
    name:"Contributing",
    message:"Describe how people can contribute!",
  },
  {
    type:"input",
    name:"Questions",
    message:"what is your GitHub and your email to contact you?",
  },
  {
    type:"input",
    name:"Questions",
    message:"What is your email to contact you?"
  }
];

function writeFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then((responsesObj) => {
    console.log(responsesObj);
    writeFile("README.md", generateMarkdown({ ...responsesObj }));
  });
}

init();

/*## Table of Contents:
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [License](#license)
7. [Questions](#questions)
  (`#${data.description}`)
  console.log(template);
  fs.writeFile('README.md', template, err => {
    err ? console.log(err) : console.log('success!!')
  });
 }; */
