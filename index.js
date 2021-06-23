// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fileSystem = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your application called?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Write a brief description of your application.'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'How can someone install the application?'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How does someone use your application?'
    },
    {
        type: 'input',
        name: 'Contributing',
        message: `Can other users contribute to your project? How?.`
    },
    {
        type: 'input',
        name: 'Tests',
        message: `How can users can test your application?`
    },
    {
        type: 'list',
        name: 'License',
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
function writeToFile(fileName, data) {
    const keys = Object.keys(data);
    console.log(keys);
    fileSystem.writeFile(`${fileName}.md`, `# ${data.name}\n\n`, err => 
        err ? console.log(err) : console.log(`Document created!`));
    keys.forEach(entry => {
        fileSystem.appendFile(`${fileName}.md`, `## ${entry}\n${data[`${entry}`]}\n\n`, err =>
        err ? console.log(err) : console.log(`${entry} section added!`));
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        writeToFile(data.name, data);
    })
}

// Function call to initialize app
init();
