function createContactPage() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "Telephone no: 111-222-3333";
    phoneNumber.classList.add("phoneNumber");

    const emailAddress = document.createElement("p");
    emailAddress.textContent = "Email: dontusethis@email.com";
    emailAddress.classList.add("emailAddress");

    const location = document.createElement("h4");
    location.textContent = "Rockford Hills, Los Santos";

    const image = document.createElement("img");
    image.src = "images/map.jpg";
    image.alt = "Location of hotel in map";

    contact.appendChild(phoneNumber);
    contact.appendChild(emailAddress);
    contact.appendChild(location);
    contact.appendChild(image);

    return contact;
}

const loadContactPage = () => {
    const main = document.querySelector(".main");

    main.replaceChildren();
    main.appendChild(createContactPage());
}

export default loadContactPage;