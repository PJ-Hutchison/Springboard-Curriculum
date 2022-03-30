const todoList = document.querySelector('#todo-list');
const input = document.querySelector('#to-do');
const form = document.querySelector('#add-todo');

const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedTodos.length; i++) {
  let newTodo = document.createElement("li");
  newTodo.innerHTML = savedTodos[i].task;
  newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
  if (newTodo.isCompleted) {
    newTodo.style.textDecoration = "line-through";
  }
  todoList.appendChild(newTodo);
}

todoList.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
    else if (e.target.tagName === 'LI') {
        e.target.classList.add('completed');
    }
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newTodo = document.createElement('li');
    const removeBtn = document.createElement('button');
    newTodo.innerText = input.value;
    removeBtn.innerText = 'Remove';
    newTodo.appendChild(removeBtn);
    todoList.appendChild(newTodo);
    input.value = '';

    savedTodos.push({ task: newTodo.innerHTML, isCompleted: false });
    localStorage.setItem("todos", JSON.stringify(savedTodos));

})
