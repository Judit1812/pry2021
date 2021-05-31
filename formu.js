function limpiarFormulari() {
   document.getElementById("miFormi").reset();
}

var di=function(n1){
	var a = parseInt(document.getElementById("nm").value);
	var exp = parseInt(document.getElementById("exponente").value);
	resultado = (a*exp);
	return "Es igual a " + resultado + "e^" + exp;
}
function limpiarFormulario() {
   document.getElementById("miFor").reset();
}


var ac=function(n1, n2, n3){
	var vf = parseInt(document.getElementById("vf").value);
	var vi = parseInt(document.getElementById("vi").value);
	var t = parseInt(document.getElementById("t").value);
	aceleracion = (vf-vi)/t;
	return "La aceleración es igual a " + aceleracion + "m/s^2";
}