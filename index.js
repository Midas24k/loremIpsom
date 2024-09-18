import inquirer from "inquirer";
import { type } from "os";
import fs from "fs";
import path from "path";
import  generateMarkdown from './utils/generateMarkdown.js';
import lorem from "./utils/loremscript.js";
const LoremIpsum = lorem;


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
       const content = lorem.generate(answers.words, answers.sentences, answers.paragraphs);
        fs.writeFile(path.join(process.cwd(), "lorem.txt"), generateMarkdown(content), (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log("Successfully created lorem.txt");
        });
    });
}

init();
