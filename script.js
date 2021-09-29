const addBtn = document.querySelector('.add-btn');
const todoForm = document.querySelector('.todo');
const todoList = document.querySelector('.list');
const completedList = document.querySelector('.completed');

// let items = [];

todoForm.addEventListener('submit', handleSubmit);

function handleSubmit(e){
    // prevents the page from refreshing after form is submitted
    e.preventDefault()

    // console.log(e.target.elements.task.value);
    let item = e.target.elements.task.value;
    // items.push(item);


    const listItem = 
    `<li class="todo-item">
        <input class="checkbox" type="checkbox">
        <span>${e.target.elements.task.value}</span>
        <button class="del-btn">Delete</button>
    </li>`
    // console.log(listItem);

    todoList.innerHTML += listItem;
    todoForm.reset();
}

function deleteTask(target){
    if (target && target.matches('.del-btn')){
        // console.log('delete me!!');
        // console.log(target.parentNode);
        target.parentNode.remove();
    }
    return;
}

function completeTask(target){
    if (target && target.matches('.checkbox')){
        if (target.checked){
            // console.log('checking you out');
            console.log(target.nextElementSibling);
            target.nextElementSibling.style.textDecoration = 'line-through';
            completedList.appendChild(target.parentNode);
        } else {
            target.nextElementSibling.style.textDecoration = 'none';
            todoList.appendChild(target.parentNode);
        }
    }
    return;
}

todoList.addEventListener('click', function(e){
    const target = e.target;
    // console.log(e.target);
    deleteTask(target);
    completeTask(target);
    // if (target && target.matches('.del-btn')){
    //     console.log('delete me!!');
    //     console.log(target.parentNode);
    //     target.parentNode.remove();
    // } else if (target && target.matches('.checkbox')){
    //     console.log('checking you out');
    //     target.parentNode.style.textDecoration = 'line-through';
    //     completedList.appendChild(target.parentNode);
    // }
})

completedList.addEventListener('click', function(e){
    const target = e.target;
    // console.log(target);
    deleteTask(target);
    completeTask(target);
    // if (target && target.matches('.del-btn')){
    //     console.log('delete me!');
    //     console.log(target.parentNode);
    //     target.parentNode.remove();
    // } else if (target && target.matches('.checkbox')){
    //     target.parentNode.style.textDecoration = 'none';
    //     todoList.appendChild(target.parentNode);
    // }
})