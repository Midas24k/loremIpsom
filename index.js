import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import generateMarkdown from './utils/generateMarkdown.js';
import { LoremIpsum } from "lorem-ipsum"; 

const questions = [
    {
        type: "input",
        name: "words",
        message: "How many words would you like to generate?",
        validate: (input) => {
            const parsed = parseInt(input);
            return !isNaN(parsed) && parsed >= 0 ? true : "Please enter a valid number greater than or equal to 0.";
        }
    },
    {
        type: "input",
        name: "sentences",
        message: "How many sentences would you like to generate?",
        validate: (input) => {
            const parsed = parseInt(input);
            return !isNaN(parsed) && parsed >= 0 ? true : "Please enter a valid number greater than or equal to 0.";
        }
    },
    {
        type: "input",
        name: "paragraphs",
        message: "How many paragraphs would you like to generate?",
        validate: (input) => {
            const parsed = parseInt(input);
            return !isNaN(parsed) && parsed >= 0 ? true : "Please enter a valid number greater than or equal to 0.";
        }
    },
];

function init() {
    inquirer.prompt(questions).then((answers) => {
        // Parse user inputs
        const words = parseInt(answers.words) || 0;
        const sentences = parseInt(answers.sentences) || 0;
        const paragraphs = parseInt(answers.paragraphs) || 0;

        // Check if at least one input is valid (not 0)
        if (words === 0 && sentences === 0 && paragraphs === 0) {
            console.log("Please enter at least one non-zero value for words, sentences, or paragraphs.");
            return;
        }

        // Create a new LoremIpsum instance with dynamic limits
        const lorem = new LoremIpsum({
            wordsPerSentence: {
                max: words > 0 ? words : 16,
                min: words > 0 ? words : 4
            },
            sentencesPerParagraph: {
                max: sentences > 0 ? sentences : 8,
                min: sentences > 0 ? sentences : 4
            }
        });

        // Generate content based on the user's input
        let content = "";
        if (words > 0) {
            content += lorem.generateWords(words) + "\n\n";
        }
        if (sentences > 0) {
            content += lorem.generateSentences(sentences) + "\n\n";
        }
        if (paragraphs > 0) {
            content += lorem.generateParagraphs(paragraphs) + "\n\n";
        }

        // Write the content to a file
        fs.writeFile(path.join(process.cwd(), "README.md"), generateMarkdown(content), (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("File created!");
            }
        });
    });
}

init();
