// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your application called?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a brief description of your application.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Give instructions on how to install your application.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Explain how to use your application.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: `List the application's contributors.`
    },
    {
        type: 'input',
        name: 'tests',
        message: `List the application's contributors.`
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        console.log(data);
    })
}

// Function call to initialize app
init();
