const loginForm = document.querySelector(".loginForm");
const loginText = loginForm.querySelector(".loginText");
const greeting = document.querySelector("h1");
const clocks = document.querySelector(".clock");

function onButtonClick(event) {
    event.preventDefault();
    clocks.classList.remove("hidden");
    loginForm.classList.add("hidden");
    const username = loginText.value;
    localStorage.setItem("USERNAME", username);
    greet(username);
}

function greet(username){
    loginForm.classList.add("hidden");
    greeting.innerText = `Good evening, ${username}.`;
}

const savedUsername = localStorage.getItem("USERNAME");

if (savedUsername){
    greet(savedUsername);
} else{
    clocks.classList.add("hidden");
    loginForm.addEventListener("submit", onButtonClick);
}