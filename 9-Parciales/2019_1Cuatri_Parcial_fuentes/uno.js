
function mostrar()
{
	var lado;
	var perimetro;

	lado = prompt("Ingrese la longitud de uno de los lados del Triangulo");
	
	lado = parseInt(lado);
    
    perimetro = lado * 3;

    alert("El perimetro del Triangulo es " + perimetro);

}
