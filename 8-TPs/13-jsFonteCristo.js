/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
 	var numeroIngresado;
 	var contadorPares;
 	var contadorImpares;
 	var contadorDivisibles;
 	var verificarPrimo;
 	var contadorPrimo;

 	contadorPares = 0;
 	contadorImpares = 0;
 	contadorDivisibles = 0;
 	contadorPrimo = 0;

 	numeroIngresado = document.getElementById("txtIdNumero").value;
 	numeroIngresado = parseInt(numeroIngresado);

	while(isNaN(numeroIngresado) || numeroIngresado <0)
 	{
 		alert("Ingrese solo numeros positivos");
 		numeroIngresado= document.getElementById("txtIdNumero").value;
 		numeroIngresado= parseInt(numeroIngresado);

 		if(numeroIngresado %2==0)
 		{
 			numeroIngresado = numeroIngresado / 2;
 			contadorPares = numeroIngresado;
 		}
 	}
 	
 	alert(contadorPares);
}

//numeros positivos