import {findUsername, authenticate, navigateTodoPage} from '../utilities'

const loginBtnOnClickHandler = (usernameInput, PasswordInput) => {
    
    if(!!usernameInput.value && !!PasswordInput.value){
        const user = {
        username: usernameInput.value,
        password: PasswordInput.value,
        todos: [],
        };

        const users = JSON.parse(localStorage.getItem('users'));
        const userAcc = authenticate(users, user);
        
        if(!!userAcc){
            navigateTodoPage(user)
        }else {
            if(!findUsername(users, user.username)){
                window.alert('you should sign up')
            }else {
                window.alert('wrong password');
            }
        }  
    }
}

export default loginBtnOnClickHandler;