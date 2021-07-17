/*al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/







function mostrar()
{
	var mes;
	var mensaje;

	switch(mes)
	{
		case "Marzo"
		case "Abril"
		case "Mayo":
		case "Junio":
			mensaje = "Falta para el invierno"
		break;
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate hace frío."
		break;
		default:
			mensaje = "Ya pasamos el frío, ahora calor"
		break;
	}
	alert(mensaje);


}//FIN DE LA FUNCIÓN