

let loginForm = document.querySelector("#login_form");
if(loginForm){
loginForm.addEventListener("submit", async function(e){
    e.preventDefault();
    let username = document.querySelector("#user_name").value;
    let password = document.querySelector("#user_password").value;
    if(password.length < 6){
        alert("password must be at least 6 characters");
        return;
    }
    console.log("Form is valid");
    let response = await fetch("/login",{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            username:username,
            password:password
        })
    });
    let data= await response.json();
    if(data.success){
        window.location.href="dashboard.html";
    }else{
        alert("Invalid credentials");
    }
});
}


let signup_page = document.querySelector("#signup_form");
if (signup_page){
signup_page.addEventListener("submit", async function (e){
    e.preventDefault();
    let username = document.querySelector("#first_name").value;
    let last_name = document.querySelector("#last_name").value
    let user_email = document.querySelector("#user_email").value
    let password = document.querySelector("#user_signup_password").value
    if(password.length<6){
        alert("password must be at least 6 characters");
        return;
    }
    console.log("Form is valid")

    //sends data to the backend
    await fetch("/signup",{
        method: "POST", //post method is used to create something
        headers:{
            "Content-Type":"application/json"       //tells the server the data sent is json
        },
        body:JSON.stringify({
            //converst js object inot json
            user_email:user_email,
            password:password,
            username: username,
            last_name : last_name,

        })
    });
    alert("Account created");
    window.location.href="index_login.html";
})

let submit_form = document.querySelector("#submit_btn");
submit_form.addEventListener("click",function sub(){
    console.log("submit button pressed!");
})
}