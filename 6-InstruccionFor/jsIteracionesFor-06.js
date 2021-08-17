/*
Se ingresan 10 notas, nombre del alumno y materia. (Matemática, Lectura o Programación).

CALCULAR Y MOSTRAR
A. Mínima nota con el nombre del alumno.
B. La materia con máxima nota.
C. Promedio de notas para lectura.
D. Porcentaje de alumnos que rindió cada materia.
ANEXO
E. Cantidad de alumnos aprobados. (Nota mayor a 6 - 6 Inclusive).
F. La materia con más cantidad de desaprobados. 
G. Porcentaje de alumnos que se llamen “Juan” y estén aprobados sobre el total de alumnos ingresados (No sobre el total de Juanes). (Nota mayor a 6 - 6 Inclusive).
H. Porcentaje de aprobados y desaprobados por materia. (ej.: Lectura: 2 APROB – 10 DESAPROB).
*/
function mostrar()
{
	var nombre;
	var nota;
	var materia;
	var contador;

	//A
	var notaMinima;
	var nombreNotaMinima;

	//B
	var notaMaxima;
	var materiaNotaMaxima;

	//c
	var promedioNotasLectura;

	//D
	var porcentajeLectura;
	var acumuladorNotasLectura;
	var porcentajeMatematica;
	var porcentajeProgramacion;

	var contadorAlumnosMatematica;
	var contadorAlumnosLengua;
	var contadorAlumnosProgramacion;
	var contadorAlumnosAprobados;
	var contadorDesaprobadosLengua;
	var contadorDesaprobadosMatematica;
	var contadorDesaprobadosProgramacion;
	var contadorAprobadosProgramacion;
	var contadorAprobadosLengua;
	var contadorAprobadosMatematicas;
	var contadorDeJuanesAprobados;
	var porcentajeDeJuanesAprobados;
	var porcentajeAprobadosLengua;
	var porcentajeAprobadosMatematicas;
	var porcentajeAprobadosProgramacion;
	var porcentajeDesaprobadosLengua;
	var porcentajeDesaprobadosMatematica;
	var porcentajeDesaprobadosProgramacion;


	contador = 0;
	contadorAlumnosLengua = 0;
	contadorAlumnosProgramacion = 0;
	contadorAlumnosMatematica = 0;
	contadorAlumnosAprobados = 0;
	contadorDesaprobadosLengua = 0;
	contadorDesaprobadosProgramacion = 0;
	contadorDesaprobadosMatematica = 0;
	contadorAprobadosMatematicas = 0;
	contadorAprobadosLengua = 0;
	contadorAlumnosProgramacion = 0;
	contadorDeJuanes = 0;
	acumuladorNotasLectura = 0;

	while(contador < 10)
	{
		nombre = prompt("Ingrese nombre");

		nota = prompt("Ingrese Nota");
		nota = parseInt(nota);

		while(isNaN(nota) || nota < 1 || nota > 10)
		{
			nota = prompt("Error;Ingrese Nota");
			nota = parseInt(nota);
		}

		materia = prompt("Ingrese materia : Matemática, Lectura o Programación");

		while(materia != "matematica" && materia != "lectura" && materia != "programacion")
		{
			materia = prompt("Error; Ingrese materia : Matemática, Lectura o Programación");
		}

		if(nota < notaMinima || contador == 0)// Resolución A
		{
			notaMinima = nota;
			nombreNotaMinima = nombre;
		}
		if(nota > notaMaxima || contador == 0) // Resolución B
		{
			notaMaxima = nota;
			materiaNotaMaxima = materia;
		}

		switch(nota)
		{
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				switch(materia)
				{
					case "matematica":
						contadorDesaprobadosMatematica = contadorDesaprobadosMatematica + 1;
						contadorAlumnosMatematica = contadorAlumnosMatematica + 1;
					break;
					case "lectura":
						contadorDesaprobadosLengua = contadorDesaprobadosLengua + 1;
						contadorAlumnosLengua = contadorAlumnosLengua + 1;
						acumuladorNotasLectura = acumuladorNotasLectura + nota;
					break;
					case "programacion":
						contadorDesaprobadosProgramacion = contadorDesaprobadosProgramacion + 1;
						contadorAlumnosProgramacion = contadorAlumnosProgramacion + 1;
					break;
				}
			break;
			default:
				contadorAlumnosAprobados = contadorAlumnosAprobados + 1;
				if(nombre == "juan")
				{
					contadorDeJuanesAprobados = contadorDeJuanesAprobados + 1;
				}
				switch(materia)
				{
					case "matematica":
						contadorAprobadosMatematicas = contadorAprobadosMatematicas + 1;
						contadorAlumnosMatematica = contadorAlumnosMatematica + 1;
					break;
					case "lectura":
						contadorAprobadosLengua = contadorAprobadosLengua + 1;
						contadorAlumnosLengua = contadorAlumnosLengua + 1;
						acumuladorNotasLectura = acumuladorNotasLectura + nota;
					break;
					break;
					case "programacion":
						contadorAprobadosProgramacion = contadorAprobadosProgramacion + 1;
						contadorAlumnosProgramacion = contadorAlumnosProgramacion + 1;
					break;
				}
			break;

		}

		contador = contador + 1;
	}

	document.write("La nota minima fue : "+notaMinima+ "y se llama "+nombreNotaMinima+ " <br>");
	document.write("La materia con nota maxima : "+materiaNotaMaxima+ " <br>");

	if(contadorAlumnosLengua !=0)
	{
		porcentajeLectura = (contadorAlumnosLengua * 100) / 10;
		promedioNotasLectura = acumuladorNotasLectura / contadorAlumnosLengua;
		porcentajeAprobadosLengua = (contadorAprobadosLengua * 100) / contadorAlumnosLengua; // Podria ir otro if para no mostrar algo vacio
		porcentajeDesaprobadosLengua = (contadorDesaprobadosLengua * 100) / contadorAlumnosLengua;
		document.write("El promedio de notas de lectura es de : "+promedioNotasLectura+ " <br>");
		document.write("El % de alumnos que rindieron  lectura es : "+porcentajeLectura+ " <br>");
		document.write("El % de aprobados de lectura es de % : "+porcentajeAprobadosLengua+ " <br>");
		document.write("El % de desaprobados de lectura es de % "+porcentajeDesaprobadosLengua+ " <br>");
	}
	else
	{
		document.write("no se pudo calcular <br>");
	}
	if(contadorAlumnosProgramacion != 0)
	{
		porcentajeProgramacion = (contadorAlumnosProgramacion * 100) / 10;
		porcentajeAprobadosProgramacion = (contadorAprobadosProgramacion * 100) / contadorAlumnosProgramacion;
		porcentajeDesaprobadosProgramacion = (contadorDesaprobadosProgramacion * 100) / contadorAlumnosProgramacion;
		document.write("El % de aprobados de programacion es de % : "+porcentajeAprobadosProgramacion+ " <br>");
		document.write("El % de desaprobados de programacion es de % "+porcentajeDesaprobadosProgramacion+ " <br>");
		document.write("El % de Programacion es "+porcentajeProgramacion+ " <br>");
	}
	else
	{
		document.write("no se pudo calcular <br>");
	}
	if(contadorAlumnosMatematica !=0)
	{
		porcentajeMatematica = (contadorAlumnosMatematica * 100) / 10;
		porcentajeAprobadosMatematicas = (contadorAprobadosMatematicas * 100) / contadorAlumnosMatematica;
		porcentajeDesaprobadosMatematica = (contadorDesaprobadosMatematica * 100) / contadorAlumnosMatematica;
		document.write("El % de aprobados de matematica es de % : "+porcentajeAprobadosMatematicas+ " <br>");
		document.write("El % de desaprobados de matematica es de % "+porcentajeDesaprobadosMatematica+ " <br>");
		document.write("El % de matematica es "+porcentajeMatematica+ " <br>");
	}
	else
	{
		document.write("no se pudo calcular <br>");
	}
	if(contadorAlumnosAprobados != 0)
	{
		document.write("la cantidad de alumnos aprobados es de : "+contadorAlumnosAprobados+ " <br>");
	}
	if(contadorDesaprobadosLengua > contadorDesaprobadosMatematica && contadorDesaprobadosLengua > contadorDesaprobadosProgramacion)
	{
		document.write("La mayor cantidad de contador desaprobados es Lengua <br>");
	}
	else
	{
		if(contadorDesaprobadosProgramacion > contadorDesaprobadosMatematica && contadorDesaprobadosProgramacion > contadorDesaprobadosLengua)
		{
			document.write("la mayo cantidad de desaprobados es de programacion <br>");
		}
	}
	if(contadorDeJuanesAprobados != 0)
	{
		porcentajeDeJuanesAprobados = contadorDeJuanesAprobados * 10 / 100;
		document.write("El porcentaje de Juanes aprobados es de % : "+porcentajeDeJuanesAprobados+ " <br>");
	}
	else
	{
		document.write("No aprobo ningun Juan <br>");
	}


}//FIN DE LA FUNCIÓN