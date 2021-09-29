// declare HTML elements as variables
const addBtn = document.querySelector('.add-btn');
const todoForm = document.querySelector('.todo');
// ul to contain todolist items
const todoList = document.querySelector('.list');
// ul to contain completed items
const completedList = document.querySelector('.completed');
// subheading to demarcate completed list
const completedHeader = document.querySelector('.completed-header');

// add submit event listener for the todo form
todoForm.addEventListener('submit', handleSubmit);

// logic to add to todo list 
function handleSubmit(e){
    // prevents the page from refreshing after form is submitted
    e.preventDefault()

    // console.log(e.target);
    // console.log(e.target.elements);
    // console.log(e.target.elements.task.value);

    /* save template for todo list item in a variable
       e.target refers to the form object
       e.target.elements refers to the NodeList (or array) of the form object
       e.target.elements.task refers to the input field with class of task */
    const listItem = 
    `<li class="todo-item">
        <input class="checkbox" type="checkbox">
        <span class="itemName">${e.target.elements.task.value}</span>
        <button class="del-btn">Delete</button>
    </li>`

    // use insertAdjacentHTML to always insert new list items to the top of the list
    todoList.insertAdjacentHTML('afterbegin', listItem);

    // reset input fields in form
    todoForm.reset();
}

// add event listener to the todolist (ul)
todoList.addEventListener('click', function(e){
    // save event.target to a variable
    // event target represents any element within the todolist
    const target = e.target;

    // pass the target to check if the delete button has been clicked
    deleteTask(target);

    // pass the target to check if the checkbox has been checked / unchecked
    completeTask(target);
})

// add event listener to the completedList (ul)
completedList.addEventListener('click', function(e){
    const target = e.target;
    deleteTask(target);
    completeTask(target);
})

// logic to delete a task
function deleteTask(target){
    // check if the target has a class of 'del-btn'
    if (target && target.matches('.del-btn')){
        // if true, remove the entire li element from the DOM
        // target.parentNode refers to the li item which contains the delete btn
        target.parentNode.remove();
    }
    return;
}

// logic to add a task
function completeTask(target){
    // check if target has a class of 'checkbox'
    if (target && target.matches('.checkbox')){
        // check if the checkbox is checked
        if (target.checked){
            // if true, run the following logic
            // display header if completed list has no children elements
            if(!completedList.hasChildNodes()){
                completedHeader.style.visibility = "visible";
            } 
            // apply a strikethrough on the span
            // span is targeted by using the nextElementSibling method
            target.nextElementSibling.style.textDecoration = 'line-through';
            // append the list item to the completed list
            completedList.appendChild(target.parentNode);
        // if checkbox is unchecked
        } else {
            // remove strikethrough
            target.nextElementSibling.style.textDecoration = 'none';
            // append the list item from completed to todo list
            todoList.appendChild(target.parentNode);
            // console.log(`completedList : ${completedList.hasChildNodes()} `);

            // hide header if completed list has no more childnodes
            if(!completedList.hasChildNodes()){
                completedHeader.style.visibility = "hidden";
            }
        }
    }
    return;
}