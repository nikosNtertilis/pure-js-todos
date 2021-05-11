const todoCheckBox = document.getElementsByName("todoCheckBox");
const todoText = document.getElementsByName("todoText");
const todoName = document.getElementsByName("todoName");
const deleteTodo = document.getElementsByName("deleteTodo");

const completeTask = (i, user, users) => {

    const usersUpdated = [...users];
    const userUpdated = {...user};
    const indexOfUser = users.findIndex(elem => elem.username === user.username)

    if(user.todos[i].isChecked){

        todoCheckBox[i].style.background = 'white';

        todoText[i].style.textDecoration = 'none';
        todoName[i].style.textDecoration = 'none';
        deleteTodo[i].style.visibility = 'hidden';

        usersUpdated[indexOfUser].todos[i].isChecked = !userUpdated.todos[i].isChecked ;
        userUpdated.todos[i].isChecked = !userUpdated.todos[i].isChecked ;

        localStorage.setItem('user', JSON.stringify(userUpdated));
        localStorage.setItem('users', JSON.stringify(usersUpdated));
    }else {

        todoCheckBox[i].style.background = 'rgb(209, 164, 255)';

        todoText[i].style.textDecoration = 'line-through';
        todoName[i].style.textDecoration = 'line-through';
        deleteTodo[i].style.visibility = 'visible';

        usersUpdated[indexOfUser].todos[i].isChecked = !userUpdated.todos[i].isChecked ;
        userUpdated.todos[i].isChecked = !userUpdated.todos[i].isChecked ;

        localStorage.setItem('user', JSON.stringify(userUpdated));
        localStorage.setItem('users', JSON.stringify(usersUpdated));
    }
}

export default completeTask;