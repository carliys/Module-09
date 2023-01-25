// // TODO: Include packages needed for this application
// const fs = require('fs');
// const inquirer = require('inquirer');
// const generateMarkdown = require('./utils/generateMarkdown');
// // TODO: Create an array of questions for user input


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile('README.md', data, (err) => {
//         if (err) throw err;
//         console.log('The file has been saved!');
//       });
// }

// // TODO: Create a function to initialize app
// function init() {
//     inquirer
//     .prompt([
//         {
//             type: "input",
//             name: "title",
//             message: "what the name of your project",
//         }
        

//       /* Pass your questions in here */
//     ])
//     .then((answers) => {
//         console.log(answers);
//         writeToFile("README.md", generateMarkdown(answers));
//       // Use user feedback for... whatever!!
//     })
//     .catch((error) => {
//       if (error.isTtyError) {
//         // Prompt couldn't be rendered in the current environment
//       } else {
//         // Something else went wrong
//       }
//     });
// }

// // Function call to initialize app
// init();

