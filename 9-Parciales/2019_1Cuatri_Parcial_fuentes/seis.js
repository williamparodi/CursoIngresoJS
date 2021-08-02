/*Bienvenidos (SWITCH +IF).
Se ingresa una hora.
Si está entre las 6 y las 11 mostrar:"es de mañana",
si es desde las 12 a las 19: "es de tarde",
de lo contrario informar que es de noche.
Informar si la hora no es válida.
Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje : "a dormir".*/

function mostrar()
{
	var hora;

	hora = document.getElementById("laHora").value;
	hora = parseInt(hora);

	while(isNaN(hora)|| hora >24 || hora <0)
	{
		alert("Error, ingrese hora valida");
		hora = document.getElementById("laHora").value;
		hora = parseInt(hora);
	}

	switch(hora)
	{
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");
		break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			alert("es de tarde");
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		break;
		default:
			alert("es de noche");
		break;
	}

}
