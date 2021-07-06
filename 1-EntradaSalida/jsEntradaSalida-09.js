/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var aumento;
	var resultado;

	sueldo = document.getElementById("txtIdSueldo").value;
    
    aumento = 1.10;

    sueldo = parseInt(sueldo);
    aumento = parseFloat(aumento);
    
    resultado = sueldo * aumento;



    
    document.getElementById("txtIdResultado").value = resultado;							
}
