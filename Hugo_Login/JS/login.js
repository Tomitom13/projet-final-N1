

function login() {
    var username = document.querySelector('#username').value;
    var password = document.querySelector('#password').value;

    $("#erreurLogin").removeClass("visible");
    
    if (localStorage.getItem(username) === password) {
        alert(username + ' is logged in!!!');
        console.log(username + ' is logged in!!!');
    } 

    else {
        document.querySelector("#erreurLogin").innerHTML = "incorrect username or password !".bold();
        $("#erreurLogin").toggleClass("visible");
    }
}


function register() {

    var registerUserName = document.querySelector('#NewUserName');
    var registerUserPassword = document.querySelector('#NewUserPassword');
    $("#erreurNom").removeClass("visible");
    $("#erreurPassword").removeClass("visible");
    registerUserName.style.borderColor = "";
    registerUserPassword.style.borderColor = "";


    if (localStorage.getItem(registerUserName.value) !== null) {
        document.querySelector("#erreurNom").innerHTML = "That username is alreat in user, please choose another !".bold();
        $("#erreurNom").toggleClass("visible");
        registerUserName.style.borderColor = "red";
    } else if (!registerUserName.value) {
        document.querySelector("#erreurNom").innerHTML = "Please enter a username !".bold();
        $("#erreurNom").toggleClass("visible");
        registerUserName.style.borderColor = "red";
    } else if (registerUserPassword.value.length < 6) {
        document.querySelector("#erreurPassword").innerHTML = "That is to short, include 6 or more characters !".bold();
        $("#erreurPassword").toggleClass("visible");
        registerUserPassword.style.borderColor = "red";
    } else {
        localStorage.setItem(registerUserName.value, registerUserPassword.value);
    }
}


function deleteStorage() {
    localStorage.clear();
    localStorage.setItem("admin", "hugohugo");
}
