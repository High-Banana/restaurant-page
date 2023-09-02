function createContactPage() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "111-222-3333";
    phoneNumber.classList.add("phoneNumber");

    const emailAddress = document.createElement("p");
    emailAddress.textContent = "dontusethis@email.com";
    emailAddress.classList.add("emailAddress");

    const location = document.createElement("h4");
    location.textContent = "Rockford Hills, Los Santos";

    contact.appendChild(phoneNumber);
    contact.appendChild(emailAddress);
    contact.appendChild(location);

    return contact;
}

const loadContactPage = () => {
    const main = document.querySelector(".main");

    main.textContent = "";
    main.appendChild(createContactPage());
}

export default loadContactPage;