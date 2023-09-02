function createHomePage() {
    const home = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = "Welcome to Los Santos Restaurant";

    home.appendChild(title);
    
    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

const loadHomePage = () => {
    const main = document.querySelector(".main");
    main.textContent = "";
    main.appendChild(createHomePage());
}

export default loadHomePage;