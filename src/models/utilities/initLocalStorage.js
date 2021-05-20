const initLocalStorage = () => {
    if(!localStorage.getItem('users')){
        localStorage.setItem('users' , '[]');
    }
    if(!localStorage.getItem('flags')){
        localStorage.setItem('flags', JSON.stringify({loginSignUpFlag : true}))
    }
}

export default initLocalStorage;


