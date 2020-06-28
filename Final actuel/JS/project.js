document.querySelector("#title").innerHTML = localStorage.getItem(
  Title_Project + "_Title_Project"
);
document.querySelector("#Subtitle_1").innerHTML = localStorage.getItem(
  Title_Project + "_Title1"
);
document.querySelector("#Description_1").innerHTML = localStorage.getItem(
  Title_Project + "_text_content_1"
);

document.querySelector("#Subtitle_2").innerHTML = localStorage.getItem(
  Title_Project + "_Title2"
);

document.querySelector("#Subtitle_3").innerHTML = localStorage.getItem(
  Title_Project + "_Title3"
);
document.querySelector("#Description_3").innerHTML = localStorage.getItem(
  Title_Project + "_text_content_2"
);

document.querySelector("#Subtitle_4").innerHTML = localStorage.getItem(
  Title_Project + "_Title4"
);

document.querySelector("#job1").innerHTML = localStorage.getItem(
  Title_Project + "_Job1"
);
document.querySelector("#worker1").innerHTML = localStorage.getItem(
  Title_Project + "_Worker1"
);

document.querySelector("#job3").innerHTML = localStorage.getItem(
  Title_Project + "_Job3"
);
document.querySelector("#worker3").innerHTML = localStorage.getItem(
  Title_Project + "_Worker3"
);

document.querySelector("#job5").innerHTML = localStorage.getItem(
  Title_Project + "_Job5"
);
document.querySelector("#worker5").innerHTML = localStorage.getItem(
  Title_Project + "_Worker5"
);

document.querySelector("#job2").innerHTML = localStorage.getItem(
  Title_Project + "_Job2"
);
document.querySelector("#worker2").innerHTML = localStorage.getItem(
  Title_Project + "_Worker2"
);

document.querySelector("#job4").innerHTML = localStorage.getItem(
  Title_Project + "_Job4"
);
document.querySelector("#worker4").innerHTML = localStorage.getItem(
  Title_Project + "_Worker4"
);

document.querySelector("#job6").innerHTML = localStorage.getItem(
  Title_Project + "_Job6"
);
document.querySelector("#worker6").innerHTML = localStorage.getItem(
  Title_Project + "_Worker6"
);

document.querySelector("#work1_legend").innerHTML = localStorage.getItem(
  Title_Project + "_Work1_legend"
);
document.querySelector("#work2_legend").innerHTML = localStorage.getItem(
  Title_Project + "_Work2_legend"
);
document.querySelector("#work3_legend").innerHTML = localStorage.getItem(
  Title_Project + "_Work3_legend"
);
document.querySelector("#work4_legend").innerHTML = localStorage.getItem(
  Title_Project + "_Work4_legend"
);
document.querySelector("#work5_legend").innerHTML = localStorage.getItem(
  Title_Project + "_Work5_legend"
);
document.querySelector("#work6_legend").innerHTML = localStorage.getItem(
  Title_Project + "_Work6_legend"
);
document.querySelector("#work7_legend").innerHTML = localStorage.getItem(
  Title_Project + "_Work7_legend"
);
document.querySelector("#work8_legend").innerHTML = localStorage.getItem(
  Title_Project + "_Work8_legend"
);
document.querySelector("#work9_legend").innerHTML = localStorage.getItem(
  Title_Project + "_Work9_legend"
);
document.querySelector("#work10_legend").innerHTML = localStorage.getItem(
  Title_Project + "_Work10_legend"
);
document.querySelector("#work11_legend").innerHTML = localStorage.getItem(
  Title_Project + "_Work11_legend"
);
var btnlogout = document.querySelector("#logout");
var btnlogin = document.querySelector("#login");
var btnregister = document.querySelector("#register");
NamePerson = localStorage.getItem("NamePerson");
btnlogout.style.display = "none";

btnregister.addEventListener("click", function () {
    localStorage.setItem("NamePerson", "");
    window.location.href = "../../LOGIN/HTML/register.html";
});

btnlogin.addEventListener("click", function () {
  NamePerson = localStorage.setItem("NamePerson", "");
    window.location.href = "../../LOGIN/HTML/Login.html";
});

btnlogout.addEventListener("click", function () {
   NamePerson = localStorage.setItem("NamePerson", "");
   window.location.href = "../../HTML/Accueil.html";
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
