let login = document.querySelector("#login_btn");
login.addEventListener("click",function log(){
    console.log("login button pressed!");
})

let loginForm = document.querySelector("#login_form");
loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    let email = document.querySelector("#user_name").value;
    let password = document.querySelector("#user_password").value;
    if(password.length < 6){
        alert("password must be at least 6 characters");
        return;
    }
    console.log("Form is valid");
})
