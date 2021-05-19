const initLocalStorage = () => {
    if(!localStorage.getItem('users')){
        localStorage.setItem('users' , '[]');
    }
}

export default initLocalStorage;


