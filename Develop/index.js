// TODO: Include packages needed for this application
// Require Inquirer and fs package to prompt the user information
const inquirer = require('inquirer');
const fs = require('fs');
// Needed for writeFileAsync function (addresses rejection errors)
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

// Create an array of questions for user input
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
        name: 'contributing',
        message: 'Provide guidelines for other developers who want to contribute to your project:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples on how to run tests for your project:'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Are there any frequently asked questions that need to be addressed?'
    }
  ];
  

// Create a function to write README file
const writeToFile = (fileName, data) => {
    // fileName = 'README.md';
    // data = readmeContent= content written to file
    // function (err) = callback function after file has been written
    // fs.writeFile = part of built-in Node.js file system (fs) which provides API for interacting with the file system (allows user to write data to a file)
    fs.writeFile(fileName, data, (err) => 
        // Did an error occur while writing the file?
            // if(err) {
            //    console.log(err);
            // } else {
            //    console.log('Your README.md file has been successfully created!')
        err ? console.log(err) : console.log('Your README.md file has been successfully created!')
    );
}
 
// Must convert the writeToFile function to a promise-based function, so can use .then() and .catch() to handle success and error cases, respectively.
    // This can help you avoid unhandled promise rejection errors.
//const writeFileAsync = util.promisify(writeToFile);

// Create a function to initialize app
// prompts the user for information using the inquirer package, generates README content, and writes to file (with call to writeToFile)
const init = () => {
    inquirer.prompt(questions).then((data) => {
        console.log(data);
        // curly brackets indicate deconstructing an object amd properties within brackets is property wanting to extract
            // ie: data.title, data.description, data.installation, data.usage, data.contributing, data.tests, data.questions, data.username 
        const { title, description, installation, usage, contributing, tests, questions, username } = data;
        const fileName = 'README.md';
        const readmeContent = 
        //({data.title, data.description, data.installation, data.usage, data.contributing, data.tests, data.questions, data.username }) =>
        `# ${data.title}

        ${data.description}
   
## Table of Contents:
   
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
   
## Installation:
   
       ${data.installation}
   
## Usage:
   
       ${data.usage}
   
## License:
   
       This project is licensed under the ${data.license} license.
   
## Contributing:
   
       ${data.contributing}
   
## Tests:
   
       ${data.tests}
   
## Questions:
   
       ${data.questions}
   
------------------------------------------------------------------------------------------------
   
This README was generated by [${data.username}](https://github.com/${data.username})`;

        // The replace() function replaces all matches of the regular expression with a modified version of the matched text. The modified version of the text is constructed by adding an anchor tag with the corresponding section heading as the value of the href attribute.
        // This code will add anchor tags to each of the section headings in the README file, making it easy for readers to navigate to specific sections of the document.
        const modifiedReadmeContent = readmeContent.replace(/#\s([^#\n]+)/g, (match, group1) => `# [${group1}](#${group1.toLowerCase().replace(/\s/g, '-')})`);

        //writeToFile(fileName, readmeContent)
        //    .then(() => {
        //        console.log("README file generated successfully!");
                // This can help you avoid unhandled promise rejection errors.
        //        writeFileAsync(fileName, readmeContent);
        //    })
            //If there is an error while writing the file, the promise will be rejected, and the error needs to be handled properly using a .catch() block
        //    .catch((err) => {
        //        console.log(err);
        //    });
        writeToFile(fileName, modifiedReadmeContent);
    });
};

// Function call to initialize app
init();
