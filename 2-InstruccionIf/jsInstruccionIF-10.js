function mostrar()
{
	var notaRandom;

	notaRandom = parseInt(notaRandom);
	notaRandom = Math.floor(Math.random() * 10) +1;
	
    if(notaRandom > 8)
	{
		alert("Nota de examen: " +notaRandom+ " Excelente");
	}
    else
    {
    	if(notaRandom >4)
    	{
    		alert("Nota de examen: " +notaRandom+ " Aprobo");
    	}
    	else
    	{
    		alert("Nota de examen: " +notaRandom+ " Vamos, la proxima se puede");
    	}

    }
}//FIN DE LA FUNCIÓN