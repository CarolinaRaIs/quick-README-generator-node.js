// TODO: Include packages needed for this application
// Require Inquirer and fs package to prompt the user information
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub Username?'
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your Github repo?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Can you provide a description of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the necessary steps to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the guidelines for using your project?'
    },
    {
        // notice type is list instead of input so that can select choice from array "choices"
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'] 
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'Provide guidelines for other developers who want to contribute to your project:'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Provide examples on how to run tests for your project:'
    },
    {
        type: 'input'
        name: 'questions'
        message: 'Are there any frequently asked questions that need to be addressed?'
    }
  ];
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fs module to write data to a file
    // fileName = name of file to be written
    // data = content written to file
    // function (err) = callback function after file has been written
    fs.writeToFile(fileName, data, function(err){
        // Did an error occur while writing the file?
        if(err) {
            console.log(err);
        } else {
            console.log('Your README.md file has been successfully created!')
        }
    });
}

// TODO: Create a function to initialize app
// prompts the user for information using the inquirer package, generates README content, and writes to file (with call to writeToFile)
function init() {}

// Function call to initialize app
init();
