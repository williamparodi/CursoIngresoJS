/*Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
f) Porcentaje de personas que se aplicaron Aztrazeneca
g) Cual fue la vacuna mas aplicada
h) Promedio de edad de las personas que se dieron cada vacuna
i) Que porcentaje de personas de cada genero hay. Ej: 30% Femenino, 60% Masculino y 10% No Binario*/

function mostrar()
{
	var nombre;
	var edad;
	var genero;
	var vacuna;
	var temp;
	var respuesta;
	var nombreTemp;
	var maxTemp;
	var banderaPrimerTemp;
	var contadorMujeresSput;
	var contadorNbAztraOtra;
	var presonasAztra;
	var presonasTempAlta;
	var promedioEdad;
	var edadPersonasAztra;
	var edadPersonasOtra;
	var edadPersonaSput;
	var edadHombreSinfiebre;
	var contadorAztra;
	var contadorOtra;
	var contadorSput;
	var contadorHombresEdad;
	var vacunaMasAplicada;
	var promedioEdadSput;
	var promedioEdadOtra;
	var promedioEdadAztra;
	var contadorFemenino;
	var contadorMasculino; 
	var contadorNoB;
	var totalPersonas;
	var porcentajeFemenino;
	var porcentajeMascaulino;
	var porcentajeNb;
	
	


	banderaPrimerTemp = false;
	respuesta = true;
	contadorMujeresSput = 0;
	contadorNbAztraOtra = 0;
	edadHombreSinfiebre = 0;
	contadorAztra = 0;
	contadorOtra = 0;
	contadorSput = 0;
	presonasAztra = 0;
	edadPersonasAztra = 0;
	edadPersonasOtra = 0;
	edadPersonaSput = 0;
	contadorHombresEdad = 0;
	contadorFemenino = 0;
	contadorMasculino = 0;
	contadorNoB = 0;




	while(respuesta== true)
	{
		nombre = prompt("Ingrese nombre");

		edad = prompt("Ingrese edad");
		edad = parseInt(edad);
		while(isNaN(edad)|| edad < 0)
		{
			edad = prompt("Error,Ingrese edad");
			edad = parseInt(edad);
		}

		genero = prompt("Ingrese genero Femenino , masculino o no binario");

		while(genero!="femenino"  && genero !="masculino" && genero !="no binario")
		{
			genero = prompt("Error,Ingrese genero Femenino , masculino o no binario");
		}
		
		vacuna = prompt("Ingrese vacuna : “Sputnik”, “AstraZeneca” o  “Otra”");

		while(vacuna !="sputnik" && vacuna !="aztrazeneca" && vacuna != "otra")
		{
			vacuna = prompt("Ingrese vacuna : “Sputnik”, “AstraZeneca” o  “Otra”");
		}

		temp = prompt("ingrese temperatura");
		temp = parseInt(temp);

		while(temp <35 || temp >41)
		{
			temp = prompt("Error,ingrese temperatura");
			temp = parseInt(temp);
		}

		if(temp > maxTemp || banderaPrimerTemp == false)
		{
			maxTemp = temp;
			nombreTemp = nombre;
			banderaPrimerTemp = true;
		}

		switch(genero)
		{
			case "femenino":
				contadorFemenino = contadorFemenino +1;
				if(vacuna =="sputnik")
				{
					contadorMujeresSput = contadorMujeresSput + 1;
				}
			break;
			case "no binario":
				contadorNoB = contadorNoB+ 1;
				if(vacuna=="aztrazeneca" ||vacuna =="otra")
				{
					contadorNbAztraOtra = contadorNbAztraOtra +1;
				}
			break;
			case "masculino":
				contadorMasculino = contadorMasculino + 1;
				if(vacuna == "sputnik" && temp < 37)
				{
					edadHombreSinfiebre = edadHombreSinFiebre + edad;
					contadorHombresEdad = contadorHombresEdad + 1;
				}
			break;
			default:
			break;
		}

		switch(vacuna)
		{
			case "aztrazeneca":
				contadorAztra = contadorAztra +1;
				edadPersonasAztra = edadPersonasAztra + edad;
				if(temp > 38)
				{
					presonasAztra = presonasAztra + 1;
				}
			break;
			case "otra":
				contadorOtra = contadorOtra +1;
				edadPersonasOtra = edadPersonasOtra + edad;
			break;
			case "sputnik":
				contadorSput = contadorSput +1;
				edadPersonaSput =  edadPersonaSput + edad;
			break;
			default:
			break; 
		}
		
		respuesta = confirm("Desea Continuar");
	}

	document.write("El nombre con la mayor temperatura es : "+nombreTemp+ " <br>");
	document.write("Del sexo femenino se dieron la vacuna : "+contadorMujeresSput+ " <br>");
	document.write("La cantidad de genero no binario que se dieron la aztrazeneca u otra es : "+contadorNbAztraOtra+ " <br>");
	document.write("la cantidad de persnas con aztrazeneca es de : " + presonasAztra+ " <br>");

	if(contadorHombresEdad !=0)
	{
		promedioEdad = edadHombreSinfiebre / contadorHombresEdad;
		document.write("el promedio de edad Hombre Sin fiebree es de "+promedioEdad+ " <br>")
	}
	
	if(contadorAztra>contadorOtra&&contadorAztra>contadorSput)
	{
		document.write("la vacuna mas vacuna Mas Aplicada es la aztrazeneca");
	}
	else
	{
		if(contadorSput>contadorOtra && contadorSput>contadorAztra)
		{
			document.write("la vacuna mas Aplicada es la sputnik");
		}
		else
		{
			document.write("la vacuna mas aplicada es Otra");
		}
	}

	if(contadorSput != 0)
	{
		promedioEdadSput =  edadPersonaSput / contadorSput;
		document.write(" el promedio edad de sputnik es "+ promedioEdadSput+" <br>");
	}

	if(contadorOtra != 0)
	{
		promedioEdadOtra = edadPersonasOtra / contadorOtra;
		document.write("el promedio edad otra :" +promedioEdadOtra+ " <br>");
	}

	if(contadorAztra != 0)
	{
		promedioEdadAztra = edadPersonasAztra / contadorAztra;
		document.write("El promedio edad aztra es : "+promedioEdadAztra+ " <br>");	
	}

	totalPersonas = contadorMasculino + contadorFemenino + contadorNoB;

	if(contadorMasculino!= 0)
	{
		porcentajeMascaulino = (contadorMasculino / totalPersonas) * 100;
		document.write("El porcentaje Masculino es de % : "+porcentajeMascaulino.toFixed(2)+ " <br>");
	}
	if(contadorFemenino!=0)
	{
		porcentajeFemenino = (contadorFemenino / totalPersonas) * 100;
		document.write("El porcentaje Femenino es de % : "+porcentajeFemenino.toFixed(2)+ " <br>");
	}
	if(contadorNoB != 0);
	{
		porcentajeNb = (contadorNoB / totalPersonas) * 100;
		document.write("El porcentaje no binario es de % : "+porcentajeNb.toFixed(2)+ " <br>");

	}

}	
