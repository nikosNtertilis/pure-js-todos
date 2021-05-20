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

export default signUpForm;