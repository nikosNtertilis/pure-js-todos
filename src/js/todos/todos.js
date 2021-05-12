import {completeTask, createTaskBtnOnClickHandler, deleteTaskBtnOnClickHandler, newTaskBtnOnClickHandler} from './onClickHandlers'
import {todoTemplate} from './todoTemplate'

const usernameTxt = document.getElementById("username-txt");
const logoutBtn = document.getElementById("logoutBtn");
const newTaskBtn = document.getElementById("newTaskBtn");
const createTaskBtn = document.getElementById("createTaskBtn");
const todoList = document.getElementById("todoList");

const todoItem = document.getElementsByName("todoItem");

const users = JSON.parse(localStorage.getItem('users'));
const user = JSON.parse(localStorage.getItem('user'));

usernameTxt.innerHTML = user.username ;

if(!user.todos.length){
    window.alert("Looks like there are no todos, you sould create one ");
}

user.todos.forEach( (elem, index) => {

    todoList.innerHTML += todoTemplate(elem, index);

} )

logoutBtn.onclick = () => {

    localStorage.setItem('user','{}')
    window.location = 'index.html'

}

newTaskBtn.onclick = newTaskBtnOnClickHandler;

createTaskBtn.onclick = () => createTaskBtnOnClickHandler(user, users);

todoItem.forEach((currentValue, i, listObj) => {

    console.log(currentValue.children);

    currentValue.children.todoNameTimeText.onclick =() => completeTask(i, user, users);
    currentValue.children.deleteTodo.onclick = () => deleteTaskBtnOnClickHandler(i, user, users);

    if(user.todos[i].isChecked){

        currentValue.children.todoCheckBox.style.background = 'rgb(209, 164, 255)';

        currentValue.children.todoNameTimeText.children.todoText.style.textDecoration = 'line-through';
        currentValue.children.todoNameTimeText.children.todoNameTime.children.todoName.style.textDecoration = 'line-through';

        currentValue.children.deleteTodo.style.visibility = 'visible';
        
    }

})