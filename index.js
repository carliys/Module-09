const inquirer = require('inquirer');
const fs = require('fs');

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
  const template = `# project tittle ${data.project}
## ${data.description}`
  console.log(template);
  fs.writeFile('README.md', template, err => {
    err ? console.log(err) : console.log('success!!')
  });
 };