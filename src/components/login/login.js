import {initLocalStorage} from '../../models/utilities'
import {createAccBtnOnClickHandler, loginBtnOnClickHandler, modalBackdrop, signUpBtnOnClickHandler} from '../../models/onClickHandlers'

const usernameInput = document.getElementById("username");
const PasswordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const signUpBtn = document.getElementById("signUpBtn");
const createAccBtn = document.getElementById("createAccBtn");
const modalBox = document.getElementById("modalBox");

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

signUpBtn.onclick = signUpBtnOnClickHandler;

createAccBtn.onclick = createAccBtnOnClickHandler;

modalBox.onclick = modalBackdrop;


