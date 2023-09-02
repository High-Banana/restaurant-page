function createHomePage() {
    const home = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = "Welcome to Los Santos Restaurant";
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}