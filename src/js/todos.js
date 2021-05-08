const usernameTxt = document.getElementById("username-txt");
const logoutBtn = document.getElementById("logoutBtn");
const newTaskBtn = document.getElementById("newTaskBtn");
const createTaskBtn = document.getElementById("createTaskBtn");
const todoNameTimeText = document.getElementsByName("todoNameTimeText");
const todoCheckBox = document.getElementsByName("todoCheckBox");
const todoText = document.getElementsByName("todoText");
const todoName = document.getElementsByName("todoName");
const deleteTodo = document.getElementsByName("deleteTodo");
const todoList = document.getElementById("todoList");

const modalBox = document.getElementById("modalBox");

const todoTitle = document.getElementById("todoTitle");
const todoTxtInput = document.getElementById("todoTxtInput");

const users = JSON.parse(localStorage.getItem('users'))
const user = JSON.parse(localStorage.getItem('user'));

let isChecked = user.todos.isChecked;

usernameTxt.innerHTML = user.username ;

const indexOfUser = users.findIndex(elem => elem.username === user.username)

console.log(user);

if(!user.todos.length){
    window.alert("Looks like there are no todos, you sould create one ")
    // prompt("Looks like there are no todos, you sould create one ")
}

user.todos.map( elem => {

    const todoTemplate = `<div id="todoItem" class="flex" style="
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
            console.log('test 1');
    
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('users', JSON.stringify(usersUpdated));
        }else {
    
            todoCheckBox[i].style.background = 'rgb(209, 164, 255)';
    
            todoText[i].style.textDecoration = 'line-through';
            todoName[i].style.textDecoration = 'line-through';
            deleteTodo[i].style.visibility = 'visible';
    
            users[indexOfUser].todos[i].isChecked = !user.todos[i].isChecked ;
            user.todos[i].isChecked = !user.todos[i].isChecked ;
            
            console.log('test 2');
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('users', JSON.stringify(users));
        }
        
    }
}

// todoNameTimeText.map( elem => {
    // elem.onclick = () => {
    //     if(isChecked){
    
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

        var today = new Date();
        var currentTime = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate()+' '+today.getHours()+ ":" + today.getMinutes();

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