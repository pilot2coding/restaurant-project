import "./styles.css";
import { renderMenu } from "./menu";
import { contactRender } from "./contact";
import { renderHome } from "./about";

const menuButton = document.querySelector("#menu")
menuButton.addEventListener("click", function(){
    renderMenu();
});

const contactButton = document.querySelector("#contact");
contactButton.addEventListener("click", function(){
    contactRender();
});

const homeButton = document.querySelector("#home");

homeButton.addEventListener("click", function(){
    renderHome();
});

document.addEventListener("DOMContentLoaded", () => {
    renderHome();
});

