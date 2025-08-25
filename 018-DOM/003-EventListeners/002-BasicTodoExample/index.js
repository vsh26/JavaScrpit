console.log('Todo App');

// Referencing todo-input
const todoInput = document.getElementById('todo-input');

// Referencing add-button
const addButton = document.getElementById('add-button');

// Referencing to-do-items-container
const todoItemsContainer = document.getElementById('to-do-items-container');

// Referencing delete-all-button
const deleteAllButton = document.getElementById('delete-all-button')

// Adding event listener to addButton
addButton.addEventListener('click', function(){
    // console.log(addButton);

    // Getting user input
    const inputValue = todoInput.value;
    console.log(inputValue);

    // Make <li> tag for each input
    const li = document.createElement('li');             // <li> </li>
    console.log(li);

    // Adding value to <li> tag
    li.innerText = inputValue;                           // <li> (value) </li>
    console.log(li);

    // Creating delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Clear';

    // Adding event listener to deleteButton
    deleteButton.addEventListener('click', function(){
        li.remove();
    });

    // Adding delete button (adding delete button to each li)
    li.appendChild(deleteButton);


    // Displaying tasks on screen (adding <li> to <ul>)
    todoItemsContainer.appendChild(li);

    // Make user input blank
    todoInput.value = '';

});


// Adding event listener to deleteAllButton
deleteAllButton.addEventListener('click', function(){

    // Method 1
    //todoItemsContainer.innerHTML = "";

    // Method 2
    let todoItemsContainerChild = todoItemsContainer.lastElementChild;

    while(todoItemsContainerChild){
        todoItemsContainer.removeChild(todoItemsContainerChild);
        todoItemsContainerChild = todoItemsContainer.lastElementChild;
    }

    todoInput.value = '';
});