const addButton = document.querySelector(".js-add-btn");
const displayTasks = document.querySelector(".js-display-tasks");
const todoList = [];

function renderTodoList(){
    let todoListHTML = '';

    for(let i = 0; i<todoList.length; i++){

        const displayTasksHTML = `<p> ${todoList[i]} <p>`;
        todoListHTML += displayTasksHTML;

        // console.log(todoList[i]);
    
    }

    displayTasks.innerHTML = todoListHTML;
}

function addTask(){

    const inputText = document.querySelector(".js-input-text");
    const task = inputText.value;

    if(task === '' || task === null || task === 'undefined'){
        return;
    }
    
    todoList.push(task);
    console.log(todoList);

    renderTodoList();
    
    inputText.value = '';
    
}

addButton.addEventListener('click', addTask);
