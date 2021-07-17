/*al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."*/

function mostrar()
{
	
	var mesDelAño;
	var mensaje;

	mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case "Enero":
			mensaje = "Que comiences bien el año!!"
		break;
		case "Marzo":
			mensaje = "A clases!!"
		break;
		case "Julio":
			mensaje = "Se vienen las vacaciones"
		break;
		case "Diciembre":
			mensaje = "Felices Fiestas"
		break;
		default:
			mensaje = "Nada interasante este mes"
		break;
	}

	alert(mensaje);
	



}//FIN DE LA FUNCIÓN