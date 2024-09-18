import inquirer from "inquirer";
import { type } from "os";
import fs from "fs";
import path, { parse } from "path";
import  generateMarkdown from './utils/generateMarkdown.js';
import lorem from "./utils/loremscript.js";
import { LoremIpsum } from "lorem-ipsum"; 


const questions = [
    {
        type: "input",
        name: "Words",
        message: "How many words would you like to generate?",
        validate: (input) => {
            const parsed = parseInt(input);
            return !isNaN(parsed) && parsed > 0 ? true : "Please enter a valid number greater than 0.";
        }

    },
    {
        type: "input",
        name: "Sentences",
        message: "How many sentences would you like to generate?",
        validate: (input) => {
            const parsed = parseInt(input);
            return !isNaN(parsed) && parsed > 0 ? true : "Please enter a valid number greater than 0.";
        }
    },
    {
        type: "input",
        name: "Paragraphs",
        message: "How many paragraphs would you like to generate?",
        validate: (input) => {
            const parsed = parseInt(input);
            return !isNaN(parsed) && parsed > 0 ? true : "Please enter a valid number greater than 0.";
        }

    },
];

function init() {
    inquirer.prompt(questions).then((answers) => {
        const words = parseInt(answers.words);
        const sentences = parseInt(answers.sentences);
        const paragraphs = parseInt(answers.paragraphs);

        const lorem = new LoremIpsum({
            wordsPerSentence: {
                max: words,
                min: words
            },
            sentencesPerParagraph: {
                max: sentences,
                min: sentences
            }
        });

        const content = {
            words: lorem.generateWords(words),
            sentences: lorem.generateSentences(sentences),
            paragraphs: lorem.generateParagraphs(paragraphs)
        };

        fs.writeFile("README.md", generateMarkdown(content), (err) => {
            if (err) {
                console.log(err);
            }
            console.log("File created!");
        });
    });
}

init();
