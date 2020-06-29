var btnlogout = document.querySelector("#logout");
var btnlogin = document.querySelector("#login");
var btnregister = document.querySelector("#register");
NamePerson = localStorage.getItem("NamePerson");
btnlogout.style.display = "none";

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

if(NamePerson !== ""){
    btnlogin.style.display = "none";
    btnregister.style.display = "none";
    document.querySelector("#name").innerHTML = NamePerson;
    btnlogout.style.display = "inline-block";
    console.log(NamePerson);
}
else{
    btnlogin.style.display = "inline-block";
    btnregister.style.display = "inline-block";
}

