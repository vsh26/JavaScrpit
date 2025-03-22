const addButton = document.querySelector(".js-add-btn");
const deleteButton = document.querySelector(".js-delete-btn");
const displayTasks = document.querySelector(".js-display-tasks");
const todoList = [];

// const todoList = [{
//     todoName: 'task1',
//     dueDate: '2025-03-22'
// }, {
//     todoName: 'task2',
//     dueDate: '2025-02-22'
// }];

function renderSavedTodoList(){
    const savedTodo = JSON.parse(localStorage.getItem('savedTodo')) || [];
    todoList.push(...savedTodo);
    renderTodoList();
}

function renderTodoList(){
    let todoListHTML = '';

    for(let i = 0; i<todoList.length; i++){

        const displayTasksHTML =`
            <div> ${todoList[i].todoName} </div>
            <div> ${todoList[i].dueDate} </div>
            <button
                class="delete-btn"
                onclick="
                    todoList.splice(${i}, 1);
                    localStorage.setItem('savedTodo', JSON.stringify(todoList));
                    renderTodoList();
                "
                >Delete</button>
            `;
        todoListHTML += displayTasksHTML;

        // console.log(todoList[i]);
    
    }

    displayTasks.innerHTML = todoListHTML;
}

function addTask(){

    const inputText = document.querySelector(".js-input-text");
    const task = inputText.value;

    const inputDueDate = document.querySelector(".js-input-due-date");
    const dueDateValue = inputDueDate.value;

    if(task === '' || dueDateValue === ''){
        return;
    }
    
    todoList.push({todoName:task, dueDate:dueDateValue});
    // console.log(todoList);
    localStorage.setItem('savedTodo', JSON.stringify(todoList));
    renderTodoList();
    
    inputText.value = '';
    inputDueDate.value = '';
    
}

addButton.addEventListener('click', addTask);
renderSavedTodoList();