# quick-README-generator-node.js
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

       A quickly and easily generated README file created through a command-line interface.

# ${data.title}



## Description

       Having a high-quality README is essential for any successful project. It provides crucial information about the application, including its purpose, usage, installation process, how to report issues, and how to make contributions. This information not only helps other developers understand the project but also encourages them to contribute to its success.

       To save time and effort, a command-line application can generate a project README quickly and easily. By automating this process, project creators can focus on finishing the application rather than spending valuable time crafting a good README.

       This command-line application runs with Node.js and utilizes the inquirer and fs packages to collect user input and generate a README.md file based on that input.

       To begin, the necessary packages are imported and an object called licenseURL is created to map different licenses to their corresponding badge links.

       An array of questions is then created using the inquirer.prompt function to gather user input. The responses are stored in an object called data.

       Two functions are defined: writeToFile and init. The writeToFile function utilizes the fs.writeFile function to write the generated README file to the file system. The init function prompts the user for information using the inquirer.prompt function, generates the README content, and writes it to file by calling writeToFile.

       Finally, the init function is called to initiate the application.

       This application leverages the latest syntax and paradigms of ES6, including arrow functions, const and let declarations, and template literals. Furthermore, it employs object-oriented programming (OOP) principles, which prioritize the use of objects and classes to organize code.

## [Table of Contents:](#table-of-contents:)
   
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
   
## [Installation:](#installation:)

       Install the Inquirer package by running npm i inquirer@8.2.4 in the command line.
   
## [Usage:](#usage:)

       To generate the README, first navigate to the directory where the index.js file is located. Then, open your terminal and run the command "node index.js". This will display a series of prompts in your command line interface (CLI); answer them to provide information about your project.

       Once you have completed all of the prompts, a file named 'README.md' will be automatically generated and saved to the root directory of your repository.
   
## [License:](#license:)

       This project is licensed under the MIT License license.
   
## [Contributing:](#contributing:)

       Contributions are welcome and encouraged for this project. If you find any issues or have any suggestions for new features, please open an issue or submit a pull request. Before submitting a pull request, please ensure that your code adheres to the project's coding guidelines and has appropriate test coverage. Thank you for your interest in contributing to this project!  
   
## [Tests:](#tests:)

       We encourage contributors to thoroughly explore the code and test it to ensure its functionality. Any feedback or suggestions regarding the testing process are welcomed and appreciated.
   
## [Questions:](#questions:)

       Q: 
       Why do you have to make sure to create your .gitignore file before installing any npm dependencies? Hence, why should you ensure there is a .gitignore file before running any npm install commands?


       A:
       When you install npm dependencies for your project, they are typically added to the node_modules directory, which can contain a large number of files and directories. The .gitignore file is used to specify files or directories that should be ignored by Git, which is important because you usually don't want to include all the files in node_modules in your Git repository.

       If you create your .gitignore file after you've installed your dependencies, it may be too late, as Git may have already started tracking the node_modules directory and all its contents. This can make your repository unnecessarily large and slow, and can also cause issues if you try to share your repository with others. 


       Q:
       Should I run the command npm i or npm install after installing the Inquirer package by running npm i inquirer@8.2.4 in the command line?

       A:
       If you have already installed Inquirer package using npm i inquirer@8.2.4 command and you have the required dependencies installed locally in the node_modules directory, you don't need to run npm install again.


       Q:
       Why is it important to install the the node_modules directory?

       A:
       Inside the node_modules directory, there is a list of directories for each of the dependencies that your project requires, along with any sub-dependencies they may have. This is where Node.js stores all the packages that your project depends on. The node_modules directory is important as it helps to ensure that all the necessary packages and dependencies are available and the project can be run without errors!


       Q: 
       Where would my node_modules directory be located?

       A:
       The node_modules directory is typically located in the root of your project directory, alongside other files like package.json, README.md, etc. It's a hidden directory, so it may not be visible in your file explorer by default. To view hidden files and directories, you can usually enable the "Show hidden files" option in your file explorer settings.


       Q:
       Does each license badge has its own URL to render correctly in the README?

       A: 
       Yes! When using badges in a README file, it's important to make sure that the URLs are correct and up-to-date to  ensure that the badges are displayed correctly. This was the resource used to extract the URLs: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba for this project.


**If more questions arise please contact CarolinaRaIs at determination28@gmail.com**
   

       
------------------------------------------------------------------------------------------------
   
This README was generated by [CarolinaRaIs](https://github.com/CarolinaRaIs)