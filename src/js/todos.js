
//elements by id
const usernameTxt = document.getElementById("username-txt");
const logoutBtn = document.getElementById("logoutBtn");
const newTaskBtn = document.getElementById("newTaskBtn");
const createTaskBtn = document.getElementById("createTaskBtn");
const todoList = document.getElementById("todoList");
const modalBox = document.getElementById("modalBox");
const todoTitle = document.getElementById("todoTitle");
const todoTxtInput = document.getElementById("todoTxtInput");

//elements by name
const todoNameTimeText = document.getElementsByName("todoNameTimeText");
const todoCheckBox = document.getElementsByName("todoCheckBox");
const todoText = document.getElementsByName("todoText");
const todoName = document.getElementsByName("todoName");
const deleteTodo = document.getElementsByName("deleteTodo");
// const todoItem = document.getElementsByName("todoItem");


// const todoNameTimeTextHTMLCollection = document.getElementsByName("todoNameTimeText");
// const todoNameTimeText = [...todoNameTimeTextHTMLCollection];
// const todoCheckBoxHTMLCollection = document.getElementsByName("todoCheckBox");
// const todoCheckBox = [...todoCheckBoxHTMLCollection];
// const todoTextHTMLCollection = document.getElementsByName("todoText");
// const todoText = [...todoTextHTMLCollection];
// const todoNameHTMLCollection = document.getElementsByName("todoName");
// const todoName = [...todoNameHTMLCollection];
// const deleteTodoHTMLCollection = document.getElementsByName("deleteTodo");
// const deleteTodo = [...deleteTodoHTMLCollection];
const todoItemHTMLCollection = document.getElementsByName("todoItem");
// const todoItem = [...todoItemHTMLCollection];

const users = JSON.parse(localStorage.getItem('users'))
const user = JSON.parse(localStorage.getItem('user'));

// selectors
// const userTodosIsChecked = user.todos[i].isChecked;

usernameTxt.innerHTML = user.username ;

const indexOfUser = users.findIndex(elem => elem.username === user.username)

console.log(user);

if(!user.todos.length){
    window.alert("Looks like there are no todos, you sould create one ")
    // prompt("Looks like there are no todos, you sould create one ")
}

user.todos.map( elem => {

    const todoTemplate = `<div id="todoItem" name="todoItem" class="flex" style="
justify-content: space-between;
align-items: center;
padding: 0px 60px 0px 60px;
">

    <div id="todoCheckBox" name="todoCheckBox" style="
    width: 10px;
    height: 10px;
    background-color: white;
    border-style: solid;
    border-color: gray;
    border-width: 3px;
    border-radius: 50%;

    ">
    </div>
    <div id="todoNameTimeText" name="todoNameTimeText" style="
    width: 80%;
    flex-direction: column;
    ">
        <div id="todoNameTime" class="flex" style="
        width: 100%;
        justify-content: space-between;
        ">
            <div id="todoName" name="todoName">
                <h3>${elem.title}</h3>
            </div>
            <div id="todoTime" name="todoTime">
                <h3 >${elem.time}</h3>

            </div>
            
        </div>

        <div id="todoText" name="todoText" style="
        padding: 1.33em 0;
        ">
            <h4 class="margin0">${elem.text}</h4>

        </div>
    </div>
    

    <div id="deleteTodo" name="deleteTodo" style="
    width: 100px;
    height: 100px;
    background-color: blue;
    visibility: hidden;
    ">
    </div>

</div>`

    todoList.innerHTML += todoTemplate;

} )

logoutBtn.onclick = () => {

    localStorage.setItem('user','{}')
    window.location = 'index.html'

}

newTaskBtn.onclick = () => {
    modalBox.style.display = "flex";

}

const todoItem = [...todoItemHTMLCollection];
todoItem.forEach((currentValue, i, listObj) => {

    if(user.todos[i].isChecked){

        todoCheckBox[i].style.background = 'rgb(209, 164, 255)';

        todoText[i].style.textDecoration = 'line-through';
        todoName[i].style.textDecoration = 'line-through';

        deleteTodo[i].style.visibility = 'visible';
        
    }

}) 

for( let i=0; i < user.todos.length; i ++ ){
   if(user.todos[i].isChecked){

       todoCheckBox[i].style.background = 'rgb(209, 164, 255)';

       todoText[i].style.textDecoration = 'line-through';
       todoName[i].style.textDecoration = 'line-through';

       deleteTodo[i].style.visibility = 'visible';
       
   }
}

for( let i=0; i < todoNameTimeText.length; i ++ ){
    todoNameTimeText[i].onclick = () => {
        const usersUpdated = [...users];
        if(user.todos[i].isChecked){
    
            todoCheckBox[i].style.background = 'white';
    
            todoText[i].style.textDecoration = 'none';
            todoName[i].style.textDecoration = 'none';
            deleteTodo[i].style.visibility = 'hidden';

            usersUpdated[indexOfUser].todos[i].isChecked = !user.todos[i].isChecked ;
            user.todos[i].isChecked = !user.todos[i].isChecked ;
    
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('users', JSON.stringify(usersUpdated));
        }else {
    
            todoCheckBox[i].style.background = 'rgb(209, 164, 255)';
    
            todoText[i].style.textDecoration = 'line-through';
            todoName[i].style.textDecoration = 'line-through';
            deleteTodo[i].style.visibility = 'visible';
    
            users[indexOfUser].todos[i].isChecked = !user.todos[i].isChecked ;
            user.todos[i].isChecked = !user.todos[i].isChecked ;
            
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('users', JSON.stringify(users));
        }
        
    }
}

// todoNameTimeText.map( elem => {
    // elem.onclick = () => {
    //     if(user.todos[i].isChecked){
    
    //         todoCheckBox.style.background = "white";
    
    //         todoText.style.textDecoration = "none";
    //         todoName.style.textDecoration = "none";
    
    //         isChecked = !isChecked;
    //     }else {
    
    //         todoCheckBox.style.background = "rgb(209, 164, 255)";
    
    //         todoText.style.textDecoration = "line-through";
    //         todoName.style.textDecoration = "line-through";
    
    //         isChecked = !isChecked;
    //     }
        
    // }
// })

for( let i=0; i < deleteTodo.length; i ++ ){
    deleteTodo[i].onclick = () => {
        const todos = [...users[indexOfUser].todos];
        console.log(users[indexOfUser].todos);
        
        todos.splice( i, 1);

        users[indexOfUser].todos = todos ;
        user.todos = todos ;
        
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('users', JSON.stringify(users));

        window.location.reload();

    }

}


createTaskBtn.onclick = () => {
    
    if(todoTitle.value != "Title"){

        const currentTime = new Date().getFullYear() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getDate() + ' ' + new Date().getHours() + ":" + new Date().getMinutes();

        user.todos.push({
            title: todoTitle.value ,
            text: todoTxtInput.value ,
            time: currentTime,
            isChecked: false,
        })

        users[indexOfUser] = user;

        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('users', JSON.stringify(users));

        todoTitle.value = "Title";
        todoTxtInput.value = "";
    }
    
    modalBox.style.display = "none";
    window.location.reload();
}
