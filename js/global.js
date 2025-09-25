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
function addActive() {
    links.forEach((link) => {
        link.addEventListener("click", () => {
            let currentActive = document.querySelector("li.active");
            currentActive.classList.remove("active");
            link.classList.add("active");
        });
    });
};
function scrolling() {
    link1.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        let navHeight = document.querySelector("nav").clientHeight;
        window.scrollTo({ top: sectionHome.offsetTop-navHeight,behavior:"smooth" })
        
    });
    link2.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        let navHeight = document.querySelector("nav").clientHeight;
        window.scrollTo({ top: sectionAbout.offsetTop-navHeight,behavior:"smooth" })
        
    });
    link3.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        let navHeight = document.querySelector("nav").clientHeight;
        window.scrollTo({ top: sectionCoach.offsetTop-navHeight,behavior:"smooth" })
        
    });
    link4.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        let navHeight = document.querySelector("nav").clientHeight;
        window.scrollTo({ top: sectionProgram.offsetTop-navHeight,behavior:"smooth" })
        
    });
    link5.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        let navHeight = document.querySelector("nav").clientHeight;
        window.scrollTo({ top: sectionContact.offsetTop-navHeight,behavior:"smooth" })
        
    });
}