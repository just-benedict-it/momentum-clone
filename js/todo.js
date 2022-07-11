const todos = document.querySelector(".todos");
const textWritten = todos.querySelector("input");
const ul = document.querySelector("ul");
const todoMessage = todos.querySelector("h2");
const TODO_KEY = "todos";
let todoList = [];


function todoWritten(event){
    event.preventDefault();
    const newTodo = textWritten.value;
    const todo = {value: newTodo, id:Date.now(),};
    todoList.push(todo);
    textWritten.value = "";
    paintTodo(todo);
    saveTodoList();
}

function paintTodo(todo){
    const li = document.createElement('li');
    li.id = todo.id;
    const btn = document.createElement("button");
    btn.innerHTML = "X";
    li.append(todo.value);
    li.appendChild(btn);
    ul.appendChild(li);
    btn.addEventListener("click", removeList);
}

function removeList(event){
    const liDelete = event.target.parentElement;
    todoList = todoList.filter((todo) => parseInt(liDelete.id) !== todo.id);
    liDelete.remove();
    saveTodoList();
}

function saveTodoList(){
    todoListString = JSON.stringify(todoList);
    localStorage.setItem(TODO_KEY, todoListString);
}

const savedTodoList = localStorage.getItem(TODO_KEY);

if (savedTodoList[0] !== null){
    const parsedTodos = JSON.parse(savedTodoList);
    todoList = parsedTodos;
    parsedTodos.forEach(paintTodo);
} else{
    // todoMessage.innerHTML = "Add a todo to get started";
}

todos.addEventListener("submit", todoWritten);

