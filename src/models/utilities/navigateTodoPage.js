const navigateTodoPage = (user) => {
    const users = JSON.parse(localStorage.getItem('users')); 

    const indexOfUser = users.findIndex(elem => elem.username === user.username)

    user = users[indexOfUser];
    
    localStorage.setItem('user', JSON.stringify(user))
    window.location = 'todos.html';
}

export default navigateTodoPage;