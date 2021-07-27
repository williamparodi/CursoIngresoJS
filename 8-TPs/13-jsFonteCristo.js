/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares()
{
	var contadorPares;
	var numeroIngresado;
	
	contadorPares = 0;

	numeroIngresado = document.getElementById("txtIdNumero").value;
	numeroIngresado = parseInt(numeroIngresado);
    
	while(isNaN(numeroIngresado) || numeroIngresado <0)
 	{
 		numeroIngresado = prompt("Error, ingrese numeros positivos");
 		numeroIngresado = parseInt(numeroIngresado);
 	}
 	while(numeroIngresado>0)
 	{
 		if(numeroIngresado % 2==0)
 		{
 			contadorPares = contadorPares + 1;
 		}

 		numeroIngresado = numeroIngresado -1;
 	}

	alert("La cantidad de numeros pares es de "+contadorPares);
}
function NumerosImpares()
{
	var contadorImpares;
	var numeroIngresado;

	contadorImpares = 0;

	numeroIngresado = document.getElementById("txtIdNumero").value;
	numeroIngresado = parseInt(numeroIngresado);


	while(isNaN(numeroIngresado) || numeroIngresado <0)
 	{
 		numeroIngresado = prompt("Error, ingrese numeros positivos");
 		numeroIngresado = parseInt(numeroIngresado);
 	}
 	while(numeroIngresado >0)
 	{	
 		if(numeroIngresado % 2 !=0)
 		{
 		  contadorImpares = contadorImpares + 1;
 		}
 		numeroIngresado = numeroIngresado - 1;
 	}

 	alert("La cantidad de numeros impares es de "+contadorImpares);

}
function NumerosDivisibles()
{
	var numeroIngresado;
    var contadorDivisibles;
    var i;

    i = 100;

	contadorDivisibles = 0;

	numeroIngresado = document.getElementById("txtIdNumero").value;
	numeroIngresado = parseInt(numeroIngresado);

    while(isNaN(numeroIngresado) || numeroIngresado <0)
    {
    	numeroIngresado = prompt("Error, ingrese un numero positivo");
    	numeroIngresado = parseInt(numeroIngresado);
    }
  	while(i >0)
  	{
  		if(numeroIngresado % i == 0)
  		{
  			contadorDivisibles = contadorDivisibles + 1;
  		}	
  		i = i - 1;
  	}
  	alert("La cantidad de numeros divisibles es de : " + contadorDivisibles);
}

function VerificarPrimo()
{
	var numeroIngresado;
	var contador;
	var i;

	i = 0;
	contador = 0;
	
	numeroIngresado = document.getElementById("txtIdNumero").value;
	numeroIngresado = parseInt(numeroIngresado);

    while(isNaN(numeroIngresado) || numeroIngresado <2)
    {
    	numeroIngresado = prompt("Error, ingrese un numero positivo mayor que 1");
    	numeroIngresado = parseInt(numeroIngresado);
    }
  	
   	while(numeroIngresado > 0)
    {
		while(i<= numeroIngresado)
		{
			if(numeroIngresado % i == 0)
			{
				contador = contador + 1;
			}
			i = i + 1
		}
		numeroIngresado = numeroIngresado - 1;
	}
	if(contador == 2)
	{
		alert("es primo");
	}
	else
	{
		alert("no es primo");
	}
   		
}	
function NumerosPrimos()
{
	var numeroIngresado;
	var contadorPrimos;
	var contador;
	var i;

	i = 0;
	contador = 0;
	contadorPrimos = 0;
	

	numeroIngresado = document.getElementById("txtIdNumero").value;
	numeroIngresado = parseInt(numeroIngresado);

    while(isNaN(numeroIngresado) || numeroIngresado <2)
    {
    	numeroIngresado = prompt("Error, ingrese un numero positivo");
    	numeroIngresado = parseInt(numeroIngresado);
    }

    while(numeroIngresado > 0)
    {
		while(i<= numeroIngresado)
		{
			if(numeroIngresado % 2 == 0)
			{
				contador = contador + 1;
			}
			i = i + 1
		}
		numeroIngresado = numeroIngresado - 1;

	}
		


}

//numeros positivos