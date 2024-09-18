import { LoremIpsum } from "lorem-ipsum";

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
lorem.generate = function(words, sentences, paragraphs) {
    if (words) {
        return this.generateWords(words);
    } else if (sentences) {
        return this.generateSentences(sentences);
    } else if (paragraphs) {
        return this.generateParagraphs(paragraphs);
    }
};

export default lorem;
