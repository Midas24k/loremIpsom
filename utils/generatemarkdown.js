function generateMarkdown(content) {
    return `# Lorem Ipsum Generator

    ## Words
    ${content.words}

    ---

    ## Sentences
    ${content.sentences}


    ---

    ## Paragraphs
    ${content.paragraphs}
    `;
}

export default generateMarkdown;