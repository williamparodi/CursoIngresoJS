/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var precioTotal;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;

	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);
    
    precioTotal = precioUno + precioDos + precioTres;

    alert("El precio total es de $ " + precioTotal);
 
}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var precioTotal;
	var promedio;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;

	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);
	
    precioTotal = precioUno + precioDos + precioTres;

    promedio = precioTotal / 3;

    alert("El precio promedio es de $ " + promedio);
	
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var precioTotal;
	var iva;
	var precioConIva;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;

	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);

	precioTotal = precioUno + precioDos + precioTres;

	iva = precioTotal * 21 / 100;

	precioConIva = precioTotal + iva;
    
	alert("El precio final mas Iva es de $ " + precioConIva);

}