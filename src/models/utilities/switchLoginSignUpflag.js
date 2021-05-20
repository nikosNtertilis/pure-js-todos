const switchLoginSignUpFlag = () => {
    let flags = JSON.parse(localStorage.getItem('flags'))

    flags.loginSignUpFlag = !flags.loginSignUpFlag;
    localStorage.setItem('flags', JSON.stringify(flags));
    window.location.reload();
}

export default switchLoginSignUpFlag;