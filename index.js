const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions.js');
const fileName = "./Logos/logo.svg";
const setShape = require('./setShape.js')

// function to create new svg file using inquirer response and file system
function createLogo(response) {
    const svg = setShape(response);
    fs.writeFile(fileName, svg, ()=> console.log('Generated logo'));
}

// prompts questions then creates logo using responses
function init() {
    inquirer 
    .prompt(questions)
    .then((response) => {
        createLogo(response);
        })
    .catch(err => {
            console.log(err)
        });
}

init();