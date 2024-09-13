import { loremIpsum } from "lorem-ipsum";
 const loremIpsum = require("lorem-ipsum").LoremIpsum;

 const lorem = new loremIpsum({
    sentemcesPerParagraph: {
        max: 8,
        min4
 },
    wordsPerSentences: {
        max: 16,
        min: 4
    }

 });
 function generateWords(count) {
    if (count === 0) {
        return "";
    }
    return lorem.generateWords(count);
 }

lorem.generateWords(100);
lorem.generateSentences(10);
lorem.generateParagraphs(7);

module.exports = lorem;