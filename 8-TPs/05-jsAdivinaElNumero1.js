/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
dispondremos de un cuadro de texto para ingresar
un número y un botón “Verificar”, si el número 
ingresado es el mismo que el número secreto se dará 
por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

var numeroIngresado;
var numeroSecreto;
var contadorIntentos;

contadorIntentos = 0;


function comenzar()
{
	numeroSecreto = Math.floor(Math.random() * 100) +1;
	console.log(numeroSecreto);
}

function verificar()
{
	numeroIngresado = document.getElementById("txtIdNumero").value;
	numeroIngresado = parseInt(numeroIngresado);
	
	if(numeroIngresado == numeroSecreto)
	{
		alert("Usted es un ganador!!! y en solo " +contadorIntentos+ " intentos");
	}
	else
	{
		if(numeroIngresado < numeroSecreto)
		{
			alert("Falta para llegar al numero secreto");
		}
		else
		{
			alert("Se pasó del numero secreto");
		}
	}

	contadorIntentos = contadorIntentos + 1;
	document.getElementById("txtIdIntentos").value = contadorIntentos;
}