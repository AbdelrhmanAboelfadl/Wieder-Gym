let btnToOpenNav=document.querySelector("body nav div.container button");
let navbar=document.querySelector("nav");
let navBar=document.querySelector(".linkscontainer");
let body=document; 
let popUp=document.querySelector(".popUp");
let box=popUp.querySelector(".box");
let addProgram=document.querySelectorAll(".program .box img.readImg");
let cancelOperation=box.querySelector("input:first-child");
console.log(cancelOperation);
// ===========================================================
btnToOpenNav.addEventListener("click",opennav);

body.addEventListener("click",closeNav);

addProgram.forEach(function(item){ 
    item.addEventListener("click",function(e){e.stopPropagation()})
    item.addEventListener("click",openPopUp);
});

cancelOperation.addEventListener("click",function(){
    popUp.classList.remove("showPopUp");
})

stopNavToHide();

closePopUp();

