/*La empresa de cosmética AVON necesita establecer un sistema de premios para las sucursales de distintas zonas de Bs As.
Para ello, en base a distintas planillas que se cargan. (Pueden ser varias planillas para la misma sucursal),

Se ingresan los siguientes datos
• Sucursal (SUR, CABA, COSTA)
• Importe de la venta (Número positivo NO menor que 5000)

Al terminar de cargar las planillas, se debe calcular el total de ventas de cada sucursal.
Si la sucursal logro superar los $2500000 en ventas tendrá un premio del 10% que se repartirá entre los empleados de la sucursal.
En caso contrario no tendrán premio.

CALCULAR Y MOSTRAR
A. Para cada sucursal, el importe total de las ventas, cantidad de ventas y premio (si corresponde).
B. La sucursal que obtuvo el mayor premio.
ANEXO
C. La sucursal CABA ¿Fue la que recaudo la menor de las ventas? (Informar solo SI - NO).
D. Por un acuerdo de empleados, si la sucursal COSTA obtuvo el premio del 10% quieren donar a beneficencia el 25% de esté. Informar el monto de esa donación.
E. Sobre el monto total de premios que se les dio a las sucursales, informar el porcentaje que le correspondió a cada una.  
F. Porcentaje de ingresos por sucursal (Sin tener en cuenta el premio).*/

function mostrar()
{
	var sucursal;
	var importeVenta;
	var respuesta;

	//a

	var contadorVentasSur;
	var contadorVentasCaba;
	var contadorVentasCosta;
	var acumuladorImporteVentasCaba;
	var acumuladorImporteVentasCosta;
	var acumuladorImporteVentasSur;

	//b

	var sucursalMayorPremio;
	var premioSur;
	var premioCaba;
	var premioCosta;
	var premio;
	var premioTotal;
	var porcentajeIngresosSur;
	var porcentajeIngresosCosta;
	var porcentajeIngresosCaba;

	var respuestaCaba;
	var beneficiencia;

	var porcentajePremioCaba;
	var porcentajePremioCosta;
	var porcentajePremioSur;
	var totalPremios;

	contadorVentasCosta = 0;
	contadorVentasCaba = 0;
	contadorVentasSur = 0;
	acumuladorImporteVentasSur = 0;
	acumuladorImporteVentasCosta = 0;
	acumuladorImporteVentasCaba = 0;


	respuesta = true;


	while(respuesta == true)
	{
		sucursal = prompt("Ingrese sucursal SUR , Costa o CABA");

		while(sucursal != "sur" && sucursal != "costa" && sucursal != "caba")
		{
			sucursal = prompt("ErrorMIngrese sucursal SUR , Costa o CABA");
		}

		importeVenta = prompt("Ingrese el importe de Venta");
		importeVenta = parseInt(importeVenta);

		while(isNaN(importeVenta)|| importeVenta <5000)
		{
			importeVenta = prompt("Error;Ingrese el importe de Venta");
			importeVenta = parseInt(importeVenta);
		}

		switch(sucursal)
		{
			case "sur":
				contadorVentasSur = contadorVentasSur + 1;
				acumuladorImporteVentasSur = acumuladorImporteVentasSur + importeVenta;
			break;
			case "costa":
				contadorVentasCosta = contadorVentasCosta + 1;
				acumuladorImporteVentasCosta = acumuladorImporteVentasCosta + importeVenta;
			break;
			case "caba":
				contadorVentasCaba = contadorVentasCaba + 1;
				acumuladorImporteVentasCaba = acumuladorImporteVentasCaba + importeVenta;
			break;
		}

		respuesta = confirm("Desea continuar?");

	}

	// A importe Total de ventas y Cantidad.

	if(contadorVentasSur != 0)
	{
		document.write("La cantidad de ventas SUR es de : "+contadorVentasSur+ " <br>");
		document.write("El importe  total de Ventas de sucursal SUR es de : "+acumuladorImporteVentasSur+" <br>");
	}
	else
	{
		document.write("Esta sucursal no realizo ventas <br>");
	}
	if(contadorVentasCosta != 0)
	{
		document.write("La cantidad de ventas costa es de : "+contadorVentasCosta+ " <br>");
		document.write("El importe total de Ventas de sucursal costa es de : "+acumuladorImporteVentasCosta+ " <br>");
	}
	else
	{
		document.write("Esta sucursal no realizo ventas <br>");
	}
	if(contadorVentasCaba !=0)
	{
		document.write("La cantidad de ventas Caba es de : "+contadorVentasCaba+ " <br>");
		document.write("El importe total de Ventas de sucursal caba : "+acumuladorImporteVentasCaba+ " <br>");
	}
	else
	{
		document.write("Esta sucursal no realizo ventas <br>");
	}

	//  Info de Premios y beneficiencia.

	
	if(acumuladorImporteVentasCaba > 2500000)
	{
		premioCaba = (acumuladorImporteVentasCaba * 10) / 100;
		document.write("El premio caba es : "+premioCaba+ " <br>");
		
	}
	else
	{
		document.write("Caba no tuvo premio <br>");
	}
	if(acumuladorImporteVentasCosta > 2500000)
	{
		premioCosta = (acumuladorImporteVentasCosta * 10) / 100;
		document.write("El premio costa es : "+premioCosta+ " <br>");
		beneficiencia = (premioCosta * 25) / 100;
		document.write("La sucursal costa da a la beneficiencia : $"+beneficiencia+" <br>");
		
	}
	else
	{
		document.write("Costa no tuvo premio <br>");
	}
	if(acumuladorImporteVentasSur > 2500000)
	{
		premioSur = (acumuladorImporteVentasSur * 10) /100;
		document.write("El premio sur es de : "+premioSur+ " <br>");
	}
	else
	{	
		document.write("Sur no tuvo premio <br>");
	}

	// Porcentajes de Premios

	totalPremios = premioCosta + premioSur + premioCaba;

	if(premioCosta != 0)
	{
		porcentajePremioCosta = (premioCosta * 100) / totalPremios;
		document.write("El porcentaje de premio de Costa es : % "+porcentajePremioCosta.toFixed(2)+ " <br>");
	}
	else
	{
		document.write("Premio Costa % 0")
	}
	if(premioSur !=0)
	{
		porcentajePremioSur = (premioSur * 100) /totalPremios;
		document.write("El porcentaje de premio Sur es % : "+porcentajePremioSur.toFixed(2)+ " <br>");
	}
	else
	{
		document.write("Premio Sur % 0");
	}
	if(premioCaba != 0)
	{
		porcentajePremioCaba = (premioCaba * 100) / totalPremios;
		document.write("El porcentaje de premio caba es %: "+porcentajePremioCaba.toFixed(2)+ " <br>");
	}
	else
	{
		document.write("Premio Caba % 0");
	}

		//B - Mayor Premio

	if(premioCosta > premioCaba && premioCosta > premioSur)
	{
		document.write("El premio mayor lo tiene costa <br>");
	}
	else
	{
		if(premioSur > premioCosta)
		{
			document.write("El premio mayor lo tiene Sur <br>");
		}
		else
		{
			document.write("El premio mayor lo tiene caba <br>" );
		}
	}

	// C- Respuesta Caba Menor vendedor.

	if(acumuladorImporteVentasCaba < acumuladorImporteVentasCosta && acumuladorImporteVentasCaba < acumuladorImporteVentasSur)
	{
		respuestaCaba = "Si";
	}
	else
	{
		respuestaCaba = "No";
	}
	document.write("La sucursal caba fue la que menos vendio ? : "+respuestaCaba+ " <br>");

}//FIN DE LA FUNCIÓN