/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numeroIngresado;
	var contador;
	var acumulador;
	var respuesta;

	contador=0;
	acumulador=0;
	respuesta = true;// Inicializandola para que me deje Empezar

	while(respuesta==true)// Si acepta entra en el while.
	{
		numeroIngresado = prompt("Ingrese numeros");
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("Error, ingrese numeros");
			numeroIngresado = parseInt(numeroIngresado);
		}

		acumulador = acumulador + numeroIngresado;

		contador = contador + 1;

		respuesta = confirm("Desea Continuar??");// Utilizo confirm para el cartel de aceptar o rechazar.
	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/contador;
}//FIN DE LA FUNCIÓN