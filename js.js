const przycisk = document.querySelector(".icon");
const loginPage = document.querySelector(".box");
const login = document.querySelector(".login");
const stworz = document.querySelector(".reg");
const log = document.querySelector(".log");
const register = document.querySelector(".register");
const close = document.querySelector(".close");
przycisk.addEventListener("click", function(){
    loginPage.style.display = "block";
});
stworz.addEventListener("click",function(){
    login.style.display = "none";
    register.style.display = "flex";
    //i tutaj bedzie nastepny ten layout sie pokazywal do rejestracji
});
log.addEventListener("click",function(){
    register.style.display = "none";
    login.style.display = "flex";
});
close.addEventListener("click" , function(){
    loginPage.style.display = "none";
});


