const greet = document.getElementById("jsGreet"),
    form = document.getElementById("jsName"),
    nameInput = document.getElementById("nameInput"),
    btn =  document.createElement("button"),
    nameBlock = document.getElementById("jsGreetName"),
    change = document.getElementById("jsChange"),
    changeInput = document.getElementById("changeInput"),
    warn = document.createElement("h4");

const SHOW_CN = "showing";
const USER = "userName";

function handleSubmit(event) {
    event.preventDefault();
    let name = nameInput.value;
    if(name === "") {
        //when user dont write anything
        name = "stranger";
    }
    saveName(name);
    paintingName(name);
}

function saveName(text) {
    localStorage.setItem(USER, text);
}

function handleSubmitChange(event) {
    event.preventDefault();
    const newName = changeInput.value;
    saveName(newName);
    paintingName(newName);
}

function handleClick() {
    change.style.display = "block";
    change.addEventListener("submit", handleSubmitChange);
}

function changeBtn() {
    change.style.display = "none";
    btn.innerText = "📝";
    nameBlock.appendChild(btn);
    btn.addEventListener("click", handleClick);
}

function paintingName(text) {
    form.classList.remove(SHOW_CN);
    greet.classList.add(SHOW_CN);
    greet.innerText = `Hello, ${text}`;
    changeBtn();
}

function askName() {
    form.classList.add(SHOW_CN);
    form.addEventListener("submit", handleSubmit);
    change.style.display = "none";
}

function checkName() {
    const currentUser = localStorage.getItem(USER);
    if(currentUser) {
        // show hello {name}
        paintingName(currentUser);
        
    } else {
        // ask user name
        askName();
    }
}  

function init() {
    checkName();
}

init();

// jsx, element rendering