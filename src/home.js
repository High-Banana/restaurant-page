function createHomePage() {
    const home = document.createElement("div");
    home.classList.add("home");

    const title = document.createElement("h3");
    title.textContent = "Welcome to Los Santos Restaurant";

    const introImage = document.createElement("img");
    introImage.src = "images/restaurant-pic.jpg";
    introImage.alt = "Restaurant pic with swimming pool and drinks view";

    const intro = document.createElement("p");
    intro.textContent = "The best restaurant in the city. Any doubts? No? Okay. That's what I thought.";

    const secondIntro = document.createElement("p");
    secondIntro.textContent = "Our focus is to offer high quality international cuisine with the elegance of fine-dining while in a relaxed and comfortable atmosphere. Our menu offers freshly made and unique innovative dishes and our service is attentive and gracious.";

    home.appendChild(title);
    home.appendChild(introImage);
    home.appendChild(intro);
    home.appendChild(secondIntro);

    return home;
}

const loadHomePage = () => {
    const main = document.querySelector(".main");
    main.textContent = "";
    main.appendChild(createHomePage());
}

export default loadHomePage;