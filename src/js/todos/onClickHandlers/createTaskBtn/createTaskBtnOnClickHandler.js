const createTaskBtnOnClickHandler = (user, users) => {
    const userUpdated = {...user};
    const usersUpdated = [...users];

    const indexOfUser = users.findIndex(elem => elem.username === user.username);


    if(todoTitle.value != "Title"){

        const currentTime = new Date().getFullYear() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getDate() + ' ' + new Date().getHours() + ":" + new Date().getMinutes();

        userUpdated.todos.push({
            title: todoTitle.value ,
            text: todoTxtInput.value ,
            time: currentTime,
            isChecked: false,
        })

        usersUpdated[indexOfUser] = userUpdated;

        localStorage.setItem('user', JSON.stringify(userUpdated));
        localStorage.setItem('users', JSON.stringify(usersUpdated));

        todoTitle.value = "Title";
        todoTxtInput.value = "";
    }
    
    modalBox.style.display = "none";
    window.location.reload();
}

export default createTaskBtnOnClickHandler;