const deleteTaskBtnOnClickHandler = (i, user, users) => {
    const userUpdated = {...user};
    const usersUpdated = [...users];
    const indexOfUser = users.findIndex(elem => elem.username === user.username);

    const todos = [...usersUpdated[indexOfUser].todos];

    todos.splice( i, 1);

    usersUpdated[indexOfUser].todos = todos ;
    userUpdated.todos = todos ;
    
    localStorage.setItem('user', JSON.stringify(userUpdated));
    localStorage.setItem('users', JSON.stringify(usersUpdated));

    window.location.reload();
}

export default deleteTaskBtnOnClickHandler;