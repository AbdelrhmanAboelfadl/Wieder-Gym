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