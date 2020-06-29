
  var Page1 = document.querySelector("#Page1");
  var Page2 = document.querySelector("#Page2");
  var Page3 = document.querySelector("#Page3");
  var Title1 = document.querySelector("#title1").innerHTML;
  var Title2 = document.querySelector("#title2").innerHTML;
  var Title3 = document.querySelector("#title3").innerHTML;
  
  var i=0;
  
  while (localStorage.getItem("Projet" + i) !== null) {
    Title_Project = document.querySelector("#Title_Project");
    if (localStorage.getItem("Projet" + i) === Title_Project) {
    break;
  }
  i++;
}
    i--;
    Title1 =  localStorage.getItem("Projet" + i);
    i--;
    Title2 =  localStorage.getItem("Projet" + i);
    i--;
    Title3 =  localStorage.getItem("Projet" + i);
    document.querySelector("#title1").innerHTML =Title1;
    document.querySelector("#title2").innerHTML =Title2;
    document.querySelector("#title3").innerHTML =Title3;
    
Page1.addEventListener("click", function () {
    
    localStorage.setItem("Title_Project", Title1);
    
});

Page2.addEventListener("click", function () {
    
    localStorage.setItem("Title_Project", Title2);
    
});

Page3.addEventListener("click", function () {
    
    localStorage.setItem("Title_Project", Title3);
    
});
