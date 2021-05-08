const usernameInput = document.getElementById("username");
const PasswordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

//init local storage
if(!localStorage.getItem('users')){

localStorage.setItem('users' , '[]');

}


// sample user
// {
//     username: 'nikos',
//     password: '12345',
// }
const findUsername = (list, toFind) => 
    list.find(elem => 
        elem.username === toFind);


const authenticate = (list, toFind) => 
    list.find(elem =>
        elem.username === toFind.username && elem.password === toFind.password);

const successfullLogin = (user) => {
    const users = JSON.parse(localStorage.getItem('users')); 

    const indexOfUser = users.findIndex(elem => elem.username === user.username)

    user = users[indexOfUser];
    
    localStorage.setItem('user', JSON.stringify(user))
    window.location = 'todos.html';
}

usernameInput.onclick = () => {
    if(usernameInput.value === 'Username')
    usernameInput.value = '';
};

PasswordInput.onclick = () => {
    if(PasswordInput.value === 'Password')
    PasswordInput.value = "";
};

loginBtn.onclick = () => {
    
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
            successfullLogin(user)
        }else {
            if(!findUsername(users, user.username)){
                users.push( user );
                localStorage.setItem('users', JSON.stringify(users))
                //login sucs
                successfullLogin(user)
            }else{
                console.log('wrong password');
                PasswordInput.value = 'wrong password';
            }
            
            
        }  
    }
};


