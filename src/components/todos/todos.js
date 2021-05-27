import {
    usernameTxt  ,
    logoutBtn    ,
    newTaskBtn   ,
    createTaskBtn,
    todoList     ,
    modalBox     ,
    todoItem     , 

    users        ,
    user         ,

    todoTemplate ,
} from '../../models/todos'

import {
    completeTask,
    createTaskBtnOnClickHandler, 
    deleteTodoBtnOnClickHandler, 
    logOut, 
    modalBackdrop, 
    newTaskBtnOnClickHandler
} from '../../models/todos/onClickHandlers';

usernameTxt().innerHTML = user.username ;

if(!user.todos.length){
    window.alert("Looks like there are no todos, you should create one ");
}

user.todos.forEach( (elem, index) => todoList().innerHTML += todoTemplate(elem, index))

logoutBtn().onclick = logOut;

newTaskBtn().onclick = newTaskBtnOnClickHandler;

createTaskBtn().onclick = () => createTaskBtnOnClickHandler(user, users);

modalBox().onclick = modalBackdrop;

todoItem().forEach((currentValue, i, listObj) => {

    currentValue.children.todoNameTimeText.onclick =() => completeTask(i, user, users);
    currentValue.children.deleteTodo.children.trashCan.onclick = () => deleteTodoBtnOnClickHandler(i, user, users);

    if(user.todos[i].isChecked){
        currentValue.children.todoCheckBox.style.background = 'rgb(209, 164, 255)';

        currentValue.children.todoNameTimeText.children.todoText.style.textDecoration = 'line-through';
        currentValue.children.todoNameTimeText.children.todoNameTime.children.todoName.style.textDecoration = 'line-through';

        currentValue.children.deleteTodo.style.visibility = 'visible';      
    }
})