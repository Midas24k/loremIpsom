function generateMarkdown(content) {
    return `# Lorem Ipsum Generator

## Words per Sentence: ${content.wordsPerSentence.min} - ${content.wordsPerSentence.max}

## Sentences per Paragraph: ${content.sentencesPerParagraph.min} - ${content.sentencesPerParagraph.max}

## Paragraphs: ${content.paragraphs}

---

${content.output}`;
}

export default generateMarkdown;