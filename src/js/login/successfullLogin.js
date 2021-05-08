const successfullLogin = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
    window.location = 'todos.html';
}

export default successfullLogin;