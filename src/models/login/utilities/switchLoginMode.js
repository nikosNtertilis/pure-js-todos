import { application } from "..";

const switchLoginMode = () => {
    application.loginSignUpFlag = !application.loginSignUpFlag;
    localStorage.setItem('application', JSON.stringify(application));
    window.location.reload();
}

export default switchLoginMode;