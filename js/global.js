function opennav(){
    btnToOpenNav.addEventListener("click",function(){
        navBar.classList.toggle("active");
    })
}
function closeNav(){
    body.addEventListener("click",function(){
        navBar.classList.remove("active");
    })
}
function stopNavToHide(){
    btnToOpenNav.addEventListener("click",function(e){
        e.stopPropagation();
    })
}
function openPopUp(){
    popUp.classList.add("showPopUp");
}
function closePopUp(){
    body.addEventListener("click",function(){
        popUp.classList.remove("showPopUp")
    })
    box.addEventListener("click",function(e){
        e.stopPropagation();
    })
    navbar.addEventListener("click",function(e){
        e.stopPropagation();
    })
}
