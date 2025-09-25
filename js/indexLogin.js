let LogIn=document.querySelector(".loginParent");
let openSinup=LogIn.querySelector(".createAcc a");
let signUp=document.querySelector(".signUp");
let colseSignUp=document.querySelector(".header i");
let btnToOpenNav=document.querySelector("body nav div.container button");
let navbar=document.querySelector("nav");
let navBar=document.querySelector(".linkscontainer");
let body=document; 
let link = document.querySelector("nav li:last-child");

openSignUp();

ClosSignUp();

btnToOpenNav.addEventListener("click",opennav);

body.addEventListener("click",closeNav);

stopNavToHide();

link.classList.add("active");