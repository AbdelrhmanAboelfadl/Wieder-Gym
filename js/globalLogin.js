function openSignUp(){
    openSinup.addEventListener("click",function(){
        LogIn.classList.add("hidden");
        signUp.classList.remove("hidden");
        signUp.classList.add("show");
    })
}
function ClosSignUp(){
    colseSignUp.addEventListener("click",function(){
        signUp.classList.add("hidden");
        LogIn.classList.remove("hidden");
        LogIn.classList.add("show");
    })
}
function opennav(){
    navBar.classList.toggle("active");
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