const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
  {
    type: 'input',
    name: 'project',
    message: 'what is your project name?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'what is the desription of your project?'
  },
  {
    type: 'choice',
    name: 'testConfirm',
    message: 'does your project have tests?'
  }
];

inquirer
 .prompt(questions)
 .then(answers => {
  if(answers.testConfirm){
    inquirer.prompt({
      type:'input',
      name:'tests',
      message:'what are the test instructions for this software?'
    }).then(function(response){
      
    })
  }
   createMD(answers);
 });

 const createMD = data => {
  console.log(data);
  const template = generateMarkdown(data);
  ## Table of Contents:
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
 };