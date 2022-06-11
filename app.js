const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')


form.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodo();
    
})


function addTodo() {
    const todoText = input.value

    if (todoText) {

        const todoElement = document.createElement("li");

        todoElement.innerText = todoText

        todoElement.addEventListener('click', () => {
            todoElement.classList.toggle("completed")

        });

        todoElement.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todoElement.remove();

        })

        todosUL.appendChild(todoElement);


    input.value = "";
    }

}