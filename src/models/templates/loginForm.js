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

export default loginForm;