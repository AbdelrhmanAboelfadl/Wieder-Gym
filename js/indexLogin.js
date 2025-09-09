let LogIn=document.querySelector(".loginParent");
let openSinup=LogIn.querySelector(".createAcc a");
let signUp=document.querySelector(".signUp");
let colseSignUp=document.querySelector(".header i");
let btnToOpenNav=document.querySelector("body nav div.container button");
let navbar=document.querySelector("nav");
let navBar=document.querySelector(".linkscontainer");
let body=document; 

openSignUp();

ClosSignUp();

btnToOpenNav.addEventListener("click",opennav);

body.addEventListener("click",closeNav);

stopNavToHide();