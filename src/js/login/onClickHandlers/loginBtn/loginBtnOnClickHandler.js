import {findUsername} from '../../findUsername'
import {authenticate} from '../../authenticate'
import {navigateTodoPage} from '../../navigateTodoPage'

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
            //login sucs
            navigateTodoPage(user)
        }else {
            if(!findUsername(users, user.username)){
                users.push( user );
                localStorage.setItem('users', JSON.stringify(users))
                //login sucs
                navigateTodoPage(user)
            }else{
                console.log('wrong password');
                PasswordInput.value = 'wrong password';
            } 
        }  
    }
}

export default loginBtnOnClickHandler;