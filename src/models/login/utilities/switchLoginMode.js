import { application } from "..";

const switchLoginMode = () => {
    application.loginMode = !application.loginMode;
    localStorage.setItem('application', JSON.stringify(application));
    window.location.reload();
}

export default switchLoginMode;