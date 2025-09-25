let btnToOpenNav=document.querySelector("body nav div.container button");
let navbar=document.querySelector("nav");
let navBar=document.querySelector(".linkscontainer");
let body=document; 
let popUp=document.querySelector(".popUp");
let box=popUp.querySelector(".box");
let addProgram=document.querySelectorAll(".program .box img.readImg");
let cancelOperation=box.querySelector("input:first-child");
let links = document.querySelectorAll(".linkscontainer ul li");
let link1 = document.querySelector("nav ul li:nth-of-type(1)");
let link2 = document.querySelector("nav ul li:nth-of-type(2)");
let link3 = document.querySelector("nav ul li:nth-of-type(3)");
let link4 = document.querySelector("nav ul li:nth-of-type(4)");
let link5 = document.querySelector("nav ul li:nth-of-type(5)");
let sectionHome = document.querySelector("#Home");
let sectionAbout = document.querySelector("#About");
let sectionCoach = document.querySelector("#Coach");
let sectionProgram = document.querySelector("#Program");
let sectionContact = document.querySelector("#Contact");
console.log(sectionContact.offsetTop);


// ===========================================================
btnToOpenNav.addEventListener("click",opennav);

body.addEventListener("click",closeNav);

addProgram.forEach(function(item){ 
    item.addEventListener("click",function(e){e.stopPropagation()})
    item.addEventListener("click",openPopUp);
});

cancelOperation.addEventListener("click", function () {
    popUp.classList.remove("showPopUp");
});
const sections = document.querySelectorAll("section,header"); // كل السكاشن عندك
const navLinks = document.querySelectorAll(".linkscontainer ul li a"); // كل اللينكات

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id"); 
        }
    });

    navLinks.forEach(link => {
        link.parentElement.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.parentElement.classList.add("active"); 
        }
    });
});

stopNavToHide();

closePopUp();

addActive();

scrolling();

