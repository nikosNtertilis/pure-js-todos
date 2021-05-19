import {findUsername, authenticate, navigateTodoPage} from '../utilities'

const usernameInput = document.getElementById("username");
const PasswordInput = document.getElementById("password");

const loginBtnOnClickHandler = () => {
    
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
                window.alert('you sould sign up')
            }else {
                window.alert('wrong password');
            }
        }  
    }
}

export default loginBtnOnClickHandler;