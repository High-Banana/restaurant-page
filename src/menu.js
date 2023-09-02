function createMenuPage() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(createMenuItem("Pizza", "Tasty food fr"));
    menu.appendChild(createMenuItem("Pizza", "Tasty food fr"));
    menu.appendChild(createMenuItem("Pizza", "Tasty food fr"));
    menu.appendChild(createMenuItem("Pizza", "Tasty food fr"));
    menu.appendChild(createMenuItem("Pizza", "Tasty food fr"));

    return menu;
}

function createMenuItem(name, description) {
    const menuItem = document.createElement("div");

    const foodName = document.createElement("div");
    foodName.textContent = name;

    const foodDescription = document.createElement("div");
    foodDescription.textContent = description;

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}


const loadMenuPage = () => {
    const main = document.querySelector(".main");
    main.textContent = "";
    main.appendChild(createMenuPage());
}

export default loadMenuPage;