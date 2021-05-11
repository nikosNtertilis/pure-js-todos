import {initLocalStorage} from './initLocalStorage'
import {loginBtnOnClickHandler} from './onClickHandlers'

const usernameInput = document.getElementById("username");
const PasswordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

initLocalStorage();

usernameInput.onclick = () => {
    if(usernameInput.value === 'Username')
    usernameInput.value = '';
};

PasswordInput.onclick = () => {
    if(PasswordInput.value === 'Password')
    PasswordInput.value = "";
};

loginBtn.onclick = loginBtnOnClickHandler;


