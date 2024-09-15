const inquirer = require("inquirer");
import { LoremIpsum } from "lorem-ipsum";
import { type } from "os";
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js");

const questions = [
    {
        type: "input",
        name: "Words",
        message: "How many words would you like to generate?"

    },
    {
        type: "input",
        name: "Paragraphs",
        message: "How many paragraphs would you like to generate?"
    },
    {
        type: "input",
        name: "Sentences",
        message: "How many sentences would you like to generate?"
    },
    {
        type: "input",
        name: "Paragraphs",
        message: "How many paragraphs would you like to generate?"
    }
];

function init() {
    inquirer.prompt(questions).then((answers) => {
        const lorem = new LoremIpsum({
            wordsPerSentence: answers.Words,
            sentencesPerParagraph: answers.Sentences
        });
        const content = lorem.generateParagraphs(answers.Paragraphs);
        fs.writeFile("README.md", generateMarkdown(content), (err) => {
            if (err) {
                console.log(err);
            }
            console.log("File created!");
        });
    });
}

init();
