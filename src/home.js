function createHomePage() {
    const home = document.createElement("div");
    home.classList.add("home");

    // First part
    const titleImage = document.createElement("div");
    titleImage.classList.add("title-image");

    const title = document.createElement("h3");
    title.textContent = "Welcome to Los Santos Restaurant";
    title.classList.add("home-title");

    const introImage = document.createElement("img");
    introImage.src = "images/restaurant-pic.jpg";
    introImage.alt = "Restaurant pic with swimming pool and drinks view";

    titleImage.appendChild(title);
    titleImage.appendChild(introImage);

    // Second part
    const introPara = document.createElement("div");
    introPara.classList.add("intro-para");

    const firstIntro = document.createElement("p");
    intro.textContent = "The best restaurant in the city. Any doubts? No? Okay. That's what I thought.";

    const secondIntro = document.createElement("p");
    secondIntro.textContent = "Our focus is to offer high quality international cuisine with the elegance of fine-dining while in a relaxed and comfortable atmosphere. Our menu offers freshly made and unique innovative dishes and our service is attentive and gracious.";

    introPara.appendChild(firstIntro);
    introPara.appendChild(secondIntro);

    home.appendChild(titleImage);
    home.appendChild(introPara);

    return home;
}

const loadHomePage = () => {
    const main = document.querySelector(".main");
    main.textContent = "";
    main.appendChild(createHomePage());
}

export default loadHomePage;