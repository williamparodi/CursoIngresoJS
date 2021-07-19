/*Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
si está entre las 12 y las 19 : "Es de tarde.".
si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.".
si NO está entre las 0 y las 24 : "la hora no existe.".*/

function mostrar()
{
	var hora;
	var mensaje;

	hora = document.getElementById("txtIdHora").value;
	hora = parseInt(hora);

	switch(hora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana";
		break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			mensaje = "Es de tarde";
		break;
		default:
			mensaje = "Es de noche";// tambien podría poner las horas de la noche y hacer un default para los q no entran en las 24hs.
		break;
	}	

	if(hora > 24)
	{
		alert("La Hora no existe");
	}
	else
	{
		alert(mensaje);
	}
	
}//FIN DE LA FUNCIÓN