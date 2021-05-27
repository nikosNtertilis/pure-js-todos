const logOut = () => {
    localStorage.setItem('user','{}')
    window.location.replace('http://localhost:1234/login/index.html'); 
}

export default logOut;