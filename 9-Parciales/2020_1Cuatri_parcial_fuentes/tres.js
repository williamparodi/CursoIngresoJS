/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.(x)
b) Cuantos mayores de edad estan viudos(X)
c) La cantidad de hombres que hay solteros o viudos.(x)
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura(X)
e) El promedio de edad entre los hombres solteros.*/

function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temp;
	var respuesta;
	var banderaPrimerTemp;
	var tempMaxima;
	var nombreTempMaxima;
	var contadorTerceraEdad;
	var cantidadHombresSolteros;
	var cantidadHombresViudos;
	var cantidadEdadAltaTemp;
	var promedioEdadSolteros;
	var acumuladorEdadSolteros;
	var edadMayorViudo;
	var edadHombreSolteros;

	repuesta = true;
	banderaPrimerTemp = false;
    cantidadHombresViudos = 0;
	cantidadHombresSolteros = 0;
	contadorTerceraEdad = 0;
	cantidadEdadAltaTemp = 0;
	acumuladorEdadSolteros = 0;
	edadMayorViudo = 0;
	edadHombreSolteros = 0;

	while(repuesta==true)
	{
		nombre =prompt("Ingrese nombre");
		edad = prompt("Ingrese edad");
		edad = parseInt(edad);
		while(isNaN(edad) || edad < 0 || edad > 150)
		{
			edad = prompt("Error, Ingrese edad");
			edad = parseInt(edad);
		}

		sexo = prompt("Ingrese Sexo : F para Femenino o M para Masculino");

		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Error;Ingrese Sexo : F : Femenino o M: Masculino");
		}

		estadoCivil = prompt("Ingrese estado civil : S-Soltero,C-Casado o V-Viudo");

		while(estadoCivil != "s" && estadoCivil !="c" && estadoCivil != "v")
		{
			estadoCivil = prompt("Error,Ingrese estado civil : S-Soltero,C-Casado o V-Viudo");
		}
		switch(estadoCivil)
		{
			case "s":
				estadoCivil = "Soltero";
			break;
			case "c":
				estadoCivil = "Casado";
			break;
			case "v":
				estadoCivil = "Viudo";
			break;
		}
		temp = prompt("Ingrese temperatura corporal");
		temp = parseInt(temp);

		while(temp <36 || temp >41)
		{
			temp = prompt("Error,Ingrese temperatura corporal");
		}
		if(temp > tempMaxima || banderaPrimerTemp ==false)
		{
			tempMaxima = temp;
			nombreTempMaxima = nombre;
			banderaPrimerTemp = true;
		}
		if(edad >59 && estadoCivil == "Viudo")
		{
			edadMayorViudo = edadMayorViudo + 1;
		}
		if(sexo == "m" && estadoCivil == "Soltero")
		{
			cantidadHombresSolteros = cantidadHombresSolteros + 1;
			edadHombreSolteros = edadHombreSolteros + edad;	
		}
		else
		{
			if(sexo == "m" && estadoCivil == "Viudo")
			{
				cantidadHombresViudos = cantidadHombresViudos + 1;
			}
		}
			
		

		repuesta=confirm("Desea Continuar?");
	}
	console.log(cantidadHombresSolteros);
	promedioEdadSolteros = edadHombreSolteros / cantidadHombresSolteros;

	document.write("La persona con mas temperatura se llama :" + nombreTempMaxima+ " <br>");
	document.write("La cantidad de mayores de edad viudos es de : "+edadMayorViudo+ " <br>");
	document.write("La cantidad de hombres viudos es de : " +cantidadHombresViudos+" <br>");
	document.write("La cantidad de hombres solteros es de : " +cantidadHombresSolteros+" <br>");
	document.write("La edad promedio de hombre solteros es de "+promedioEdadSolteros.toFixed(1)+ " <br>");
}
