const todoModal = document.querySelector(".todoModal");
const todoButton = document.querySelector(".todoButton");
const todoListModel = document.querySelector(".todoList");

function todoButtonClicked(event){
    event.preventDefault();
    todos.classList.toggle("hidden");
    todoListModel.classList.toggle("hidden");
}
todoButton.addEventListener("click", todoButtonClicked);