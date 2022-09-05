function seleccionar(link){
  var options = document.querySelectorAll('#links a');
  options[0].className = "";
  options[1].className = "";
  options[2].className = "";
  options[3].className = "";
  link.className = "seleccionado";

  var x = document.getElementById("nav");
  x.className = ""
}

function responsiveMenu(){
  var x = document.getElementById("nav");
  if (x.className === ""){
    x.className = "responsive";
  } else {
    x.className = "";
  }
}
