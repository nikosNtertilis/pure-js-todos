import { findUsername } from "../../findUsername";
import { navigateTodoPage } from "../../navigateTodoPage";

const signUpUsername = document.getElementById("signUpUsername");
const signUpPassword = document.getElementById("signUpPassword");

const createAccBtnOnClickHandler = () => {

    if(!!signUpUsername.value && !!signUpPassword.value){
        const user = {
        username: signUpUsername.value,
        password: signUpPassword.value,
        todos: [],
        };

        const users = JSON.parse(localStorage.getItem('users'));

        if(!findUsername(users, user.username)){
            users.push( user );
            localStorage.setItem('users', JSON.stringify(users));
            navigateTodoPage(user);
        }else{
            window.alert('this username exist');
        }

    }

}

export default createAccBtnOnClickHandler;