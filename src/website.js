import loadHomePage from "./home";
import loadMenuPage from "./menu";
import loadContactPage from "./contact";

function createNavBar() {
    const navbar = document.createElement("div");

    const home = document.createElement("li");
    home.textContent = "Home";

    const menu = document.createElement("li");
    menu.textContent = "Menu";

    const contact = document.createElement("li");
    contact.textContent = "Contact";

    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(contact);

    home.addEventListener("click", loadHomePage);
    menu.addEventListener("click", loadMenuPage);
    contact.addEventListener("click", loadContactPage);

    return navbar;
}

function createBody() {
    const main = document.createElement("div");
    main.classList.add("main");

    return main;
}

function createFooter() {
    const footer = document.createElement("div");
    footer.classList.add("footer");
    footer.textContent = "footer";

    return footer;
}

const initialiseWebsite = () => {
    const contentContainer = document.getElementById("content");

    contentContainer.appendChild(createNavBar());
    contentContainer.appendChild(createBody());
    contentContainer.appendChild(createFooter());
    loadHomePage();

}

export default initialiseWebsite;