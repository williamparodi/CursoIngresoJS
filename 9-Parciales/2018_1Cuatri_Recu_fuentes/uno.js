
function mostrar()
{
	var largo;
	var ancho;
	var perimetro;
    
    largo = prompt("Ingrese el largo de un recutangulo");
    ancho = prompt("Ingrese el ancho de un recutangulo");
    
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    largo = largo * 2;
    ancho = ancho * 2;
    perimetro = largo + ancho;

    alert("El perimetro del recutangulo es " + perimetro);
}
