/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var i;
	
	i = 0;

	while(i < 10)
	{
		document.write((i+1) +"<br>");// es para que salga en columna.

		i = i + 1;
	}
}//FIN DE LA FUNCIÓN