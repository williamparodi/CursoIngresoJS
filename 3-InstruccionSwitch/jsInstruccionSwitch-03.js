/*al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"*/

function mostrar()
{
	var mes;
	var mensaje;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Febrero":
			mensaje = "Este no tiene mas de 29 días";
		break;
		default:
			mensaje = "Este mes tiene mas de 30 días";
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN