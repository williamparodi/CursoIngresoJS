/*Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) , el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.*/
function mostrar()
{
	var altura;
	var sexo;
	var promedioAltura;
	var alturaMasBaja;
	var contador;
	var acumuladorAltura;
	var acumuladorMujeresAltas;
	var banderaAlturaMinimo;
	var alturaMinima;
	var sexoAlturaMinima;
	

	
	contador = 0;
	acumuladorAltura = 0;
	acumuladorMujeresAltas = 0;
	banderaAlturaMinimo = true;
	contadorMujeres = 0;

	while(contador < 6)
	{
		altura = prompt("Ingrese altura en centimetros :");
		altura = parseInt(altura);

		while(isNaN(altura) || altura < 0 || altura > 250)
		{
			altura = prompt("Error;Ingrese nuevamente la altura");
			altura = parseInt(altura);
		}
		
		sexo = prompt("Ingrese Sexo : Femenino o Masculino");

		while(sexo != "femenino" && sexo != "masculino")
		{
			sexo = prompt("Error; Ingrese Sexo F: Femenino o M: Masculino");
		}
		if(altura < alturaMinima || banderaAlturaMinimo==true)
		{
			alturaMinima = altura;
			sexoAlturaMinima = sexo;
			banderaAlturaMinimo = false;
		}

		if(altura > 190 && sexo == "femenino")
		{
			acumuladorMujeresAltas = acumuladorMujeresAltas + 1;
		}
		
		acumuladorAltura = acumuladorAltura + altura;

		contador = contador + 1;	
	}

	promedioAltura = acumuladorAltura / 5;

	document.write("El promedio de altura es :" + promedioAltura + " <br>");
	document.write("La altura mas baja es "+alturaMinima+ " y el sexo de esa persona es "+sexoAlturaMinima+ " <br>");
	document.write("La cantidad de mujeres con la altura de 190 es de : " +acumuladorMujeresAltas+ " <br>");
}
