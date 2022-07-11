const focus = document.querySelector(".focus");
const focusMessage = focus.querySelector("h2");
const focusWritten = focus.querySelector("input");
const focusText = focus.querySelector("h3");
const FOCUS_KEY = "focusMessageWritten";

function focusEnter(event){
    event.preventDefault();
    const focusMessageWritten = focus.querySelector("input").value;
    localStorage.setItem(FOCUS_KEY, focusMessageWritten);
    paintFocusMessage(focusMessageWritten);
}

function paintFocusMessage(message){
    focusWritten.classList.add("hidden");
    focusMessage.innerText="Today";
    focusText.innerText=message;
}

const savedFocusMessage = localStorage.getItem(FOCUS_KEY);
if (savedFocusMessage){
    paintFocusMessage(savedFocusMessage);
}
focus.addEventListener("submit", focusEnter);

