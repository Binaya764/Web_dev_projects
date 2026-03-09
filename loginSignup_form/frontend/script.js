

let loginForm = document.querySelector("#login_form");
if(loginForm){
loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    let user_name = document.querySelector("#user_name").value;
    let password = document.querySelector("#user_password").value;
    if(password.length < 6){
        alert("password must be at least 6 characters");
        return;
    }
    console.log("Form is valid");
})
}


let signup_page = document.querySelector("#signup_form");
if (signup_page){
signup_page.addEventListener("submit", function (e){
    e.preventDefault();
    let first_name = document.querySelector("#first_name").value;
    let last_name = document.querySelector("#last_name").value
    let user_email = document.querySelector("#user_email").value
    let password = document.querySelector("#user_signup_password").value
    if(password.length<6){
        alert("password must be at least 6 characters");
        return;
    }
    console.log("Form is valid")
})

let submit_form = document.querySelector("#submit_btn");
submit_form.addEventListener("click",function sub(){
    console.log("submit button pressed!");
})
}