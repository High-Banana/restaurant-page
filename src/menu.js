function createMenuPage() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(
        createMenuItem(
            "images/foods/moroccanmeatballs.jpg",

            "Moroccan Meatballs",

            "Love restaurant-style Meatballs? Try this authentic Moroccan Meatball. Crispy on the outside and soft on the inside, these lamb meatballs are so scrumptious that all non-veg lovers will enjoy them"));

    menu.appendChild(
        createMenuItem(
            "images/foods/chorizo.jpg",

            "Chorizo & mozzarella gnocchi bake",

            "Upgrade cheesy tomato pasta with gnocchi, chorizo and mozzarella for a comforting bake that makes an excellent midweek meal"));

    menu.appendChild(createMenuItem(
        "images/foods/lasagne.jpg",

        "Vegetarian lasagne",

        "Make our easy vegetarian lasagne using just a handful of ingredients. You can use ready-made tomato sauce and white sauce, or batch cook the sauces and freeze them"));

    menu.appendChild(createMenuItem(
        "images/foods/cake.jpg",

        "Easy chocolate fudge cake",

        "Tasty food fr"));

    menu.appendChild(createMenuItem("images/foods/cowboy-pie.jpg", "Cowboy pie", "What says comfort food better than sausages and baked beans in a pie topped with cheesy, buttery mashed potato? This is a guaranteed family favourite"));

    return menu;
}

function createMenuItem(image, name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodImage = document.createElement("img");
    foodImage.src = image;

    const foodName = document.createElement("h2");
    foodName.textContent = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    menuItem.appendChild(foodImage);
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