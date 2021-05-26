const initLocalStorage = () => {
    if(!localStorage.getItem('users')){
        localStorage.setItem('users' , '[]');
    }
    if(!localStorage.getItem('application')){
        localStorage.setItem('application', JSON.stringify({loginMode : true}))
    }
}

export default initLocalStorage;