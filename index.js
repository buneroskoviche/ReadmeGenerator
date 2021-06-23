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
        message: 'How can someone install the application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How does someone use your application?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: `Can other users contribute to your project? How?.`
    },
    {
        type: 'input',
        name: 'tests',
        message: `How can users can test your application?`
    },
    {
        type: 'list',
        name: 'license',
        message: `Which of these licenses would you like for your project?`,
        choices: [ "MIT", "GNU GPLv2", "GNU GPLv3", "Apache 2.0", "ISC", "No license, thanks"]
    },
    {
        type: 'input',
        name: 'github',
        message: `What is your GitHub user name?`
    },
    {
        type: 'input',
        name: 'email',
        message: `What is your email address?`
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
