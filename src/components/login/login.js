import {initLocalStorage} from '../../models/utilities'
import {createAccBtnOnClickHandler, loginBtnOnClickHandler, modalBackdrop, signUpBtnOnClickHandler} from '../../models/onClickHandlers'
import { loginForm, signUpForm } from '../../models/templates';

const main = document.getElementById("main");

let flags = JSON.parse(localStorage.getItem('flags'))

main.innerHTML = flags.loginSignUpFlag ? loginForm : signUpForm;

const switchFormBtn = document.getElementById("switchFormBtn");

initLocalStorage();

switchFormBtn.onclick = () => {
    flags.loginSignUpFlag = !flags.loginSignUpFlag;
    localStorage.setItem('flags', JSON.stringify(flags));
    window.location.reload();
};

if(flags.loginSignUpFlag){
    const usernameInput = document.getElementById("username");
    const PasswordInput = document.getElementById("password");
    const loginBtn = document.getElementById("loginBtn");

    usernameInput.onclick = () => {
        if(usernameInput.value === 'Username')
        usernameInput.value = '';
    };

    PasswordInput.onclick = () => {
        if(PasswordInput.value === 'Password')
        PasswordInput.value = "";
    };
    
    loginBtn.onclick = loginBtnOnClickHandler;
}else {
    const signUpUsername = document.getElementById("signUpUsername");
    const signUpPassword = document.getElementById("signUpPassword");
    const signUpBtn = document.getElementById("signUpBtn");

    signUpUsername.onclick = () => {
        if(signUpUsername.value === 'Username')
        signUpUsername.value = '';
    };


    signUpPassword.onclick = () => {
        if(signUpPassword.value === 'Password')
        signUpPassword.value = "";
    };

    signUpBtn.onclick = () => createAccBtnOnClickHandler(signUpUsername, signUpPassword);
}









