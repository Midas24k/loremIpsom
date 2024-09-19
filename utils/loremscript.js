import { LoremIpsum } from "lorem-ipsum";

// Create an instance of the LoremIpsum class
const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

// Override the `generate` function to handle words, sentences, or paragraphs
lorem.generate = function(words, sentences, paragraphs) {
    // Ensure valid numbers are passed in
    if (words && words > 0) {
        return this.generateWords(words);
    } else if (sentences && sentences > 0) {
        return this.generateSentences(sentences);
    } else if (paragraphs && paragraphs > 0) {
        return this.generateParagraphs(paragraphs);
    } else {
        throw new Error("Invalid input: You must provide a positive number for words, sentences, or paragraphs.");
    }
};

// Function to dynamically generate Lorem Ipsum based on user input
function generateLoremIpsum({ words = 0, sentences = 0, paragraphs = 0 }) {
    if (words < 0 || sentences < 0 || paragraphs < 0) {
        throw new Error("Input values cannot be negative.");
    }
    return lorem.generate(words, sentences, paragraphs);
}

// Example usage with dynamic input
const userInput = {
    words: 0,         // Set to desired number of words (0 if none)
    sentences: 5,     // Set to desired number of sentences (0 if none)
    paragraphs: 0     // Set to desired number of paragraphs (0 if none)
};

try {
    // Call the function and log the result
    console.log(generateLoremIpsum(userInput));
} catch (error) {
    console.error("Error generating Lorem Ipsum:", error.message);
}

export default lorem;