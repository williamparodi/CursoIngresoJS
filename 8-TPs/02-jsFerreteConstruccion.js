/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var alambre;

	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;

	largo = parseFloat(largo);
	ancho = parseFloat(ancho);

	largo = largo * 2;
	ancho = ancho *2;

	alambre = largo + ancho;

	alert("Se necesitan " + alambre + " metros de alambre");

}
function Circulo () 
{
	var radio;
	var alambre;

	radio = document.getElementById("txtIdRadio").value;

	radio = parseFloat(radio);

	alambre = 2 * 3.1416 * radio;

	alert("Se necesitan " + alambre + " metros de alambre");

}
function Materiales () 
{
	var largo;
	var ancho;
	var cemento;
	var cal;
	


	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;

	largo = parseFloat(largo);
	ancho = parseFloat(ancho);

    metrosCuadrados = largo * ancho;
    cemento = metrosCuadrados * 2;
    cal = metrosCuadrados * 3;

    alert("Se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");


	
}