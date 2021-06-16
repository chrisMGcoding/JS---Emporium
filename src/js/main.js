// mise en place du mode nuit ---------------------------------

let myBody = document.querySelector("body");

let myHeader = document.querySelector("header");
console.log(myHeader)
let section2 = document.querySelectorAll("section")[1];
console.log(section2);
let section3 = document.querySelectorAll("section")[2];
let section4 = document.querySelectorAll("section")[3];
let section5 = document.querySelectorAll("section")[4];
let section6 = document.querySelectorAll("section")[5];
let section7 = document.querySelectorAll("section")[6];
console.log(section7);


let boutonBlanc = document.getElementsByTagName("div")[0];
let boutonNoir = document.getElementsByTagName("div")[1];

let navBar = Array.from(myHeader.querySelectorAll("a"));
console.log(navBar)

boutonBlanc.addEventListener("click", () => {
    tabSection.forEach(element => {
        element.style.backgroundColor = "white";
        element.style.color = "black";
    });
    navBar.forEach(element => {
        element.style.color = "black";
    })
});

let tabSection = [myBody, myHeader, section2, section3, section4, section5, section6, section7]

boutonNoir.addEventListener("click", () => {
    tabSection.forEach(element => {
        element.style.backgroundColor = "black";
        element.style.color = "white";
    });
    navBar.forEach(element => {
        element.style.color = "white";
    });
    boutonBlanc.style.backgroundColor = "white";
});