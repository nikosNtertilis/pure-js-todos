import {trashCanURL} from '../../images'

const todoTemplate = (elem, index) => `
<div id="${elem.title + index}" name="todoItem" class="flex jc-space-between align-items-center padding5">
    <div id="todoCheckBox" name="todoCheckBox" class="todo-check-box"></div>
    <div id="todoNameTimeText" name="todoNameTimeText" class="fd-column">
        <div id="todoNameTime" class="flex jc-space-between">
            <div id="todoName" name="todoName">
                <h3>${elem.title}</h3>
            </div>
            <div id="todoTime" name="todoTime">
                <h3 >${elem.time}</h3>
            </div> 
        </div>
        <div id="todoText" name="todoText">
            <h4 class="margin0">${elem.text}</h4>
        </div>
    </div>
    <div id="deleteTodo" name="deleteTodo" class="flex center">
        <div id="trash-can" name="trashCan">
            <img id="trash-can-img" src="${trashCanURL}" alt="trash can">
        </div>       
    </div>
</div>`

const loginForm = `
<h1 class="member-login">Member login</h1>
<div class="flex center form-div fd-column">
    <form class="flex form">
        <div class='username  height20 radius bg-color-white'>
            <input class='input radius flex center' type="text" id="username" name="usernameInput" value="Username">
            
        </div>

        <div class='height20 radius bg-color-white'>
            <input class='input radius flex center' type="password" id="password" name="passwordInput" value="Password">
        </div>

        <div id="loginBtn" class='flex center  height20 radius bg-color-orange'>
            <h2 class="margin0">Login</h2>
            
        </div>
      </form>
      <h4 id="switchFormBtn">sign up</h4>
</div>
`

const signUpForm =`
<h1 class="member-login">Member sign up</h1>
<div class="flex center form-div fd-column">
    <form class="flex form">
        <div class='username  height20 radius bg-color-white'>
            <input class='input radius flex center' type="text" id="signUpUsername" name="signUpUsername" value="Username">
            
        </div>

        <div class='height20 radius bg-color-white'>
            <input class='input radius flex center' type="password" id="signUpPassword" name="signUpPassword" value="Password">
        </div>

        <div id="signUpBtn" class='flex center  height20 radius bg-color-orange'>
            <h2 class="margin0">Sign up</h2>
            
        </div>
      </form>
      <h4 id="switchFormBtn">login</h4>
</div>
`

export {
    todoTemplate,
    loginForm,
    signUpForm,
}