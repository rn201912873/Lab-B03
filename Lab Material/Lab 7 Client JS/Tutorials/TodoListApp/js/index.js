// get the reference
const form = document.querySelector("#form")
const todoListContainer = document.querySelector("#todolist-container")

// add the event listener
form.addEventListener("submit", addTodo)

const todoList = []
showTodoList()


function addTodo(e) {
    e.preventDefault();
    const todo = formToTodo(e.target)
    todo.id = Date.now()
    todoList.push(todo)
    showTodoList()
    form.reset()

    localStorage.todoList = JSON.stringify(todoList)

}

function showTodoList() {

    if (localStorage.todoList)
        todoList = JSON.parse(localStorage.todoList)

    todoListContainer.innerHTML = todoList.map(todo => todoToHTML(todo)).join('')
}

function deleteTodo(id) {
    document.getElementById(`id-${id}`).remove()
}

function todoToHTML(todo) {
    return ` <div class="form-group todo" id="id-${todo.id}">
                <p class="todo-title ${todo.completed ? 'strike' : ''}">${todo.title}</p>
                <input class="completed icon" type="checkbox" onclick="" 
                    
                    ${todo.completed ? 'checked' : ''}    
                >
                <i class="fa fa-trash icon" onclick="deleteTodo('${todo.id}')"></i>
            </div> 
        `
}
function formToTodo(form) {
    const formData = new FormData(form)
    const data = {}

    for (const [key, value] of formData) {
        data[key] = value
    }

    return data
}