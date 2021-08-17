/*De los 15 empleados de una PYME se ingresan los siguientes datos:
• Nombre y Apellido
• Genero del empleado ("Femenino", "Masculino", "No Binario")
• Cantidad de hijos (No puede ser un numero negativo)

EL PROGRAMA DEBERA MOSTRAR
A. El nombre del empleado Masculino con más cantidad de hijos.
B. Nombre y apellido del primer empleado No Binario que no tiene hijos.

SABIENDO QUE
• Si no tiene hijos no le corresponde asignación familiar
• Si tiene un hijo le corresponde 3000
• Si tiene dos hijos le corresponde 5000 por sus dos hijos
• Y si tiene más de dos hijos le corresponde 8000

C. Mostrar el total de dinero que deberá pagar la PYME en concepto de asignaciones
D. En caso de que el total de asignaciones supere los 500000, el Gobierno Nacional asistirá a la PYME subvencionando el 10% de las asignaciones.
Mostrar el valor de la subvención si corresponde.
ANEXO
E. La cantidad de Femeninos sin hijos.
F. La cantidad de hijos que reciben una asignación de 5000 y su padre/madre es de género No Binario.
G. Promedio de hijos. (Redondear para arriba, no queremos hijos partidos al medio).  
H. El porcentaje de cada género. (ej.: Fem: 10% - Mas: 80% - NBin: 10%).*/


function mostrar()
{
	var nombre;
	var apellido;
	var genero;
	var cantidadHijos;
	var contador;


	var maximaCantidadHijos;
	var nombreMasculinoMasHijos;
	var banderaDelPrimerMaximo;

	var contadorMasculino;
	var contadorNoB;
	var contadorFemenino;

	var contadorFemeninoSinHijos;

	var nombreNoBinarioSinHijos;
	var apellidoNoBinarioSinHijos;
	var banderaDelPrimeroNb;

	var acumuladorHijosNb; 

	var asignacionFamiliar;
	var asistenciaGobierno;
	var acumuladorHijos;
	var promedioHijos;

	var totalGenero;
	var porcentajeFemenino;
	var porcentajeNb;
	var porcentajeMasculino;

	contador = 0;
	contadorMasculino = 0;
	contadorFemenino = 0;
	contadorNoB = 0;
	contadorFemeninoSinHijos = 0;
	banderaDelPrimerMaximo = true;
	banderaDelPrimeroNb = true;
	acumuladorHijosNb = 0;
	acumuladorHijos = 0;
	asignacionFamiliar = 0;


	while(contador < 3)
	{
		nombre = prompt("Ingrese nombre");

		apellido = prompt("Ingrese apellido");

		genero = prompt("ingrese genero : Femenino, Masculino, No Binario");

		while(genero != "femenino" && genero != "masculino" && genero != "no binario")
		{
			genero = prompt("Error;ingrese genero : Femenino, Masculino, No Binario");
		}

		cantidadHijos = prompt("Ingrese cantidad de Hijos");
		cantidadHijos = parseInt(cantidadHijos);

		while(isNaN(cantidadHijos)|| cantidadHijos < 0)
		{
			cantidadHijos = prompt("Error;Ingrese cantidad de Hijos");
			cantidadHijos = parseInt(cantidadHijos);
		}

		switch(genero)
		{
			case "masculino":
				contadorMasculino = contadorMasculino + 1;
				if(cantidadHijos > maximaCantidadHijos ||banderaDelPrimerMaximo == true)
				{
					nombreMasculinoMasHijos = nombre;
					banderaDelPrimerMaximo = false;
				}
			break;
			case "femenino":
				contadorFemenino = contadorFemenino + 1;
				if(cantidadHijos == 0)
				{
					contadorFemeninoSinHijos = contadorFemeninoSinHijos + 1;
				}
			break;
			case "no binario":
				contadorNoB = contadorNoB + 1;
				if(cantidadHijos == 0 && banderaDelPrimeroNb == true)
				{
					nombreNoBinarioSinHijos = nombre;
					apellidoNoBinarioSinHijos = apellido;
					banderaDelPrimeroNb = false;
				}
				if(cantidadHijos == 2)
				{
					acumuladorHijosNb = acumuladorHijosNb + cantidadHijos;
				}
			break;
		}
		if(cantidadHijos > 2)
		{
			asignacionFamiliar = asignacionFamiliar + 8000;
		}
		else
		{
			if(cantidadHijos == 2)
			{
				asignacionFamiliar = asignacionFamiliar + 5000;
			}
			else
			{
				if(cantidadHijos == 1)
				{
					asignacionFamiliar = asignacionFamiliar + 3000;
				}
			}
		}

		acumuladorHijos = acumuladorHijos + cantidadHijos;

		contador = contador + 1;
	}

	totalGenero = contadorMasculino + contadorFemenino + contadorNoB;

	if(contadorMasculino != 0)
	{
		document.write("El nombre del masculino con mas hijos es : "+nombreMasculinoMasHijos+ " <br>"); // punto A y se calculan porcentajes Genero.
		porcentajeMasculino = (contadorMasculino * 100) / totalGenero;
	}
	else
	{
		porcentajeMasculino = 0;
	}
	if(contadorNoB != 0)
	{
		document.write("El nombre y apellido del primer no binario sin hijo es : "+nombreNoBinarioSinHijos+" "+apellidoNoBinarioSinHijos+ " <br>"); // punto B
		porcentajeNb = (contadorNoB * 100) / totalGenero;
	}
	else
	{
		porcentajeNb = 0;
	}

	if(contadorFemeninoSinHijos != 0)
	{
		document.write("La cantidad de mujeres sin hijos es de : "+contadorFemeninoSinHijos+ " <br>"); // Punto E
	}

	if(contadorFemenino != 0)
	{

		porcentajeFemenino = (contadorFemenino * 100) / totalGenero;
	}
	else
	{

		porcentajeFemenino = 0;
	}

	

	document.write("La asignacion Familiar a pagar es de : $"+asignacionFamiliar+" <br>"); // punto C

	if(asignacionFamiliar > 500000)
	{
		asistenciaGobierno = (asignacionFamiliar * 10) / 100;
		document.write("La asistencia del Gobierno es de : $"+asistenciaGobierno+ " <br>"); // punto D
	}
	else
	{
		document.write("no hay asistencia del Gobierno <br>");
	}

	if(acumuladorHijosNb != 0)
	{
		document.write("La cantidad de hijos de genero no binario que reciben $ 5000 es de : "+acumuladorHijosNb+ " <br>");// punto F
	}
	else
	{
		document.write("no se pudo calcular <br>");
	}

	if(acumuladorHijos !=0)
	{
		promedioHijos = acumuladorHijos / 15;
		document.write("El promedio de hijos es de : "+Math.ceil(promedioHijos)+" <br>");	
	}
	else
	{
		document.write("No se pudo calcular");
	}

	document.write("porcentaje Masculino : %"+porcentajeMasculino.toFixed(2)+" <br>");
	document.write("porcentaje femenino : %"+porcentajeFemenino.toFixed(2)+" <br>");
	document.write("porcentaje No Binario : %"+porcentajeNb.toFixed(2)+ " <br>");

	

}//FIN DE LA FUNCIÓN