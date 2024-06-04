// Declaring the dependencies and variables
const fs = require("fs");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown.js")
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [[
    {
        //Project Title
        type: "input",
        name: "projectTitle",
        message: "What is the project title?",
        validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        //Description
        type: "input",
        name: "description",
        message: "Write a brief description of your project: ",
        validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        //Installation
        type: "input",
        name: "installation",
        message: "Describe the installation process if any (if providing code snippet, enclose in backticks):",
        validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        //Usage
        type: "input",
        name: "usage",
        message: "What is this project usage for?",
        validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        //License
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        //Contributing
        type: "input",
        name: "contributing",
        message: "Who are the contributors of this projects?",
        validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        //Tests
        type: "input",
        name: "tests",
        message: "Is there a test included?",
        validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        //Questions
        type: "input",
        name: "questions",
        message: "What do I do if I have an issue? ",
        validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        //UserName
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: ",
        validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        //Email
        type: "input",
        name: "email",
        message: "Please enter your email: ",
        validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    }
]];
//Prompt the user questions to populate the README.md
function promptUser(){
    return inquirer.prompt(questions);
} 

// TODO: Create a function to initialize app
// Async function using util.promisify 
async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
        // Write new README.md to dist directory
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('✔️  Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }

// Function call to initialize app
init();
