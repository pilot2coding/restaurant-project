let globalDiv =  document.querySelector("#content");


function contactRender(){
    globalDiv.innerHTML = "";

    // creates a main div and gives it a class
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    // creates a text container
    const contactTextContainer = document.createElement("div");
    contactTextContainer.classList.add("text-container");
    contactContainer.appendChild(contactTextContainer);

    // adds a title
    const contactTitle = document.createElement("h2");
    contactTitle.innerText = "Our World";
    contactTextContainer.appendChild(contactTitle);

    // adds description
    const contactDescription = document.createElement("p");
    contactDescription.innerText = "Organic products, environmental awareness, social responsibility and much that we care about in Green Kitchen."
    contactTextContainer.appendChild(contactDescription);

    globalDiv.appendChild(contactContainer);
}

export { contactRender }