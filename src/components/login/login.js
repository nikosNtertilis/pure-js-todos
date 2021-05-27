import {initLocalStorage, switchLoginMode} from '../../models/login/utilities'
import {
    createAccBtnOnClickHandler,
    loginBtnOnClickHandler,
    cleanInput,
} from '../../models/login/onClickHandlers'
import { application, loginForm, signUpForm } from '../../models/login';
import {
    main            ,
    switchFormBtn   ,
    usernameInput   ,
    PasswordInput   ,
    loginBtn        ,
    signUpUsername  ,
    signUpPassword  ,
    signUpBtn       ,
} from '../../models/login'

initLocalStorage();

main().innerHTML = application.loginMode ? loginForm : signUpForm;

switchFormBtn().onclick = () => switchLoginMode();

if(application.loginMode){
    usernameInput().onclick = () => cleanInput(usernameInput(), 'Username');

    PasswordInput().onclick = () => cleanInput(PasswordInput(), 'Password');

    loginBtn().onclick = () => loginBtnOnClickHandler(usernameInput(), PasswordInput());
}else {
    signUpUsername().onclick = () => cleanInput(signUpUsername(), 'Username');
    
    signUpPassword().onclick = () => cleanInput(signUpPassword(), 'Password');

    signUpBtn().onclick = () => createAccBtnOnClickHandler(signUpUsername(), signUpPassword());
}









