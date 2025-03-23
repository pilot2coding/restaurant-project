let globalDiv =  document.querySelector("#content");

function renderMenu(){
   // clears the inner elements of the div
   
    globalDiv.innerHTML = "";
   
    // the menu div container
    const menuMainContainer = document.createElement("div");
    menuMainContainer.classList.add("main-menu-container");

    // the menu title
    const menuTitle = document.createElement("h2");
    menuTitle.textContent = "Our Menu";
    menuMainContainer.appendChild(menuTitle);

    // menu cards appended to the menu div container
    const menuCardsContainer = document.createElement("div");
    menuCardsContainer.classList.add("menu-cards");
    menuMainContainer.appendChild(menuCardsContainer);

   const menuItems = [
    {
        title: "Metal Detox",
        description: "Celery, coriander, apple, ginger and lemon.",
        price: "$3.99"
    },
    {
        title: "Purification",
        description: "Beetroot, celery, cucumber, turmeric, ginger, lemon and apple.",
        price: "$3.99"
    },
    {
        title:"Super Green",
        description: "Pumpkin, spinach, ginger, parsley, broccoli, celery, squash, lemon and celery.",
        price:"$3.99"
    },
    {
        title:"Blue",
        description: "Blueberry, chia, banana and cinnamon.",
        price: "$4.99"
    },
    {
        title:"Chocolate",
        description: "Banana, cocoa and almond butter.",
        price: "$2.99"
    },
    {
        title:"Colada",
        description:"Pineapple, cucumber, celery, spinach and coconut water.",
        price:"$4.99"
    },
    {
        title:"Vanilla",
        description:"Banana, almond butter and vanilla.",
        price:"$4.99"
    }
   ];

   // iteration over the menu array for easy appendment
   menuItems.forEach(item => {

    // creates a card container and gives it a class
    const menuCard = document.createElement("div");
    menuCard.classList.add("menu-card");

    // title, description and item price go inside this div
    const textContainer = document.createElement("div");

    const itemTitle = document.createElement("h3");
    itemTitle.innerText = item.title;
    textContainer.appendChild(itemTitle);

    // creates and adds the description
    const itemDesc = document.createElement("p");
    itemDesc.innerText = item.description;
    textContainer.appendChild(itemDesc);

    // creates and adds the price
    const itemPrice = document.createElement("p");
    itemPrice.innerText = item.price;
    textContainer.appendChild(itemPrice);

    // adds all items to the menu card
    menuCard.appendChild(textContainer);

    // adds the menu card to the main div
    menuCardsContainer.appendChild(menuCard);
    
   });



    // appends all the menu elements to the main container
    globalDiv.appendChild(menuMainContainer);
   

};

export { renderMenu }