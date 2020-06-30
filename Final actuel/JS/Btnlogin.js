var btnlogout = document.querySelector("#logout");
var btnlogin = document.querySelector("#login");
var btnregister = document.querySelector("#register");
var Admin = document.querySelector("#Admin");
NamePerson = localStorage.getItem("NamePerson");
btnlogout.style.display = "none";
Admin.style.display = "none";

btnregister.addEventListener("click", function () {
    localStorage.setItem("NamePerson", "");
    window.location.href = "../HTML/register.html";
});

btnlogin.addEventListener("click", function () {
  NamePerson = localStorage.setItem("NamePerson", "");
    window.location.href = "../HTML/Login.html";
});

btnlogout.addEventListener("click", function () {
   NamePerson = localStorage.setItem("NamePerson", "");
   window.location.href = "../HTML/Accueil.html";
});

Admin.addEventListener("click", function () {
   window.location.href = "../HTML/HTMLAdminEstimate.html";
});

if(NamePerson === "admin"){
    btnlogin.style.display = "none";
    btnregister.style.display = "none";
    document.querySelector("#name").innerHTML = NamePerson;
    btnlogout.style.display = "inline-block";
    Admin.style.display = "inline-block";
}
else if(NamePerson !== ""){
    btnlogin.style.display = "none";
    btnregister.style.display = "none";
    document.querySelector("#name").innerHTML = NamePerson;
    btnlogout.style.display = "inline-block";
}

else{
    btnlogin.style.display = "inline-block";
    btnregister.style.display = "inline-block";
}

