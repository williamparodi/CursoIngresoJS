/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edadIngresada;
    var sexoIngresado;
    var estadoCivilIngresado;
    var sueldoBruto;
    var numeroLegajo;
    var nacionalidad;

    edadIngresada = prompt("Bienvenido, ingrese edad");
    edadIngresada =parseInt(edadIngresada);
    
    while(isNaN(edadIngresada) || edadIngresada < 18 || edadIngresada > 90)
    {
        edadIngresada = prompt("Error, ingrese edad nuevamente");
        edadIngresada = parseInt(edadIngresada);
    }

    sexoIngresado = prompt("Ingrese sexo");

    while(sexoIngresado != "f" && sexoIngresado != "m")
    {
        sexoIngresado = prompt("Error; ingrese sexo nuevamente");
        
    }
    if(sexoIngresado == "f")
    {
        sexoIngresado = "Femenino";
    }
    else
    {
        sexoIngresado = "Masculino";
    }

    estadoCivilIngresado = prompt("Ingrese estado civil 1: Soltero; 2: Casado ; 3: Divorciado 4: Viudos");
    estadoCivilIngresado=parseInt(estadoCivilIngresado);

    while(isNaN(estadoCivilIngresado) && estadoCivilIngresado < 1 || estadoCivilIngresado > 4)
    {
        estadoCivilIngresado = prompt("Error, Ingrese estado civil nuevamente 1: Soltero; 2: Casado ; 3: Divorciado 4: Viudos");
        estadoCivilIngresado = parseInt(estadoCivilIngresado);
        
    }
    switch(estadoCivilIngresado)
    {
        case 1:
            estadoCivilIngresado = "Soltero";
        break;
        case 2:
            estadoCivilIngresado = "Casado";
        break;
        case 3:
            estadoCivilIngresado = "Divorciado";
        break;
        case 4:
            estadoCivilIngresado = "Viudo";
        break;
        default:
        break;
    }

    sueldoBruto = prompt("Ingrese sueldo");
    sueldoBruto=parseInt(sueldoBruto);

    while(isNaN(sueldoBruto) || sueldoBruto < 8000)
    {
        sueldoBruto = prompt("Error, ingrese nuevamente sueldo");
        sueldoBruto = parseInt(sueldoBruto);
    }

    numeroLegajo =prompt("Ingrese numero de legajo");
    numeroLegajo =parseInt(numeroLegajo);
    
    while(isNaN(numeroLegajo) || numeroLegajo < 1000 || numeroLegajo > 9999)
    {
        numeroLegajo = prompt("Error, ingrese nuevamente numero de Legajo");
        numeroLegajo = parseInt(numeroLegajo);
    }

    nacionalidad = prompt("Ingrese nacionalidad A : Argentino, E: extranjero o N: para nacionalizados");

    while(nacionalidad != "a" && nacionalidad != "n" && nacionalidad != "e")
    {
        nacionalidad = prompt("Error, ingrese nuevamente nacionalidad A : Argentino, E: extranjero o N: para nacionalizados");
    }
    switch(nacionalidad)
    {
        case "a":
            nacionalidad = "Argentina";
        break;
        case "e":
            nacionalidad = "Extranjero";
        break;
        default:
            nacionalidad = "Nacionalizado"
        break;
    }
    document.getElementById("txtIdEdad").value = edadIngresada;
    document.getElementById("txtIdSexo").value = sexoIngresado;
    document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;
    document.getElementById("txtIdSueldo").value = sueldoBruto;
    document.getElementById("txtIdLegajo").value = numeroLegajo;
    document.getElementById("txtIdNacionalidad").value = nacionalidad;
}
/*
"txtIdEdad"
"txtIdSexo"
"txtIdEstadoCivil"
"txtIdSueldo"
"txtIdLegajo"
"txtIdNacionalidad"
*/



