let globalDiv =  document.querySelector("#content");
function renderHome (){
    
    globalDiv.innerHTML = "";

    // creates a div for the contents
    const homeContainer = document.createElement("div");
    homeContainer.classList.add('main-home-container');

    // creates a text container
    const textContainer = document.createElement("div");
    textContainer.classList.add("home-text-container");

    // adds text to the div
    const welcomeText = document.createElement("h1");
    welcomeText.innerText = "Welcome to Green Kitchen";
    textContainer.appendChild(welcomeText);

    // adds p to the div
    const descriptionText = document.createElement("p");
    descriptionText.innerText = "At Green Kitchen, we believe in the power of plant-based cuisine. Enjoy innovative dishes crafted from fresh, sustainable ingredients, adn savor a wholesome, flavorful journey that nourishes both your body and the planet.";
    textContainer.appendChild(descriptionText);

    homeContainer.appendChild(textContainer);

    globalDiv.append(homeContainer);
};

export { renderHome }