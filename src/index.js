import "./styles.css";
import { renderMenu } from "./menu";
import { contactRender } from "./contact";

const menuButton = document.querySelector("#menu")
menuButton.addEventListener("click", function(){
    renderMenu();
});

const contactButton = document.querySelector("#contact");
contactButton.addEventListener("click", function(){
    contactRender();
});

