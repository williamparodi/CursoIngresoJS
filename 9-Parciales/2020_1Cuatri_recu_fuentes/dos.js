/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/

function mostrar()
{
  var material;
  var cantidad;
  var precioBolsa;
  var respuesta;
  var descuento;
  var acumuladorBolsas;
  var acumuladorCal;
  var acumuladorArena;
  var acumuladorCemento;
  var precioTotal;
  var precioDesc;
  var banderaDelPrimero;
  var materialMasCAro;
  var precioMatetrialCaro;

  respuesta = true;

  
  acumuladorBolsas = 0;
  acumuladorCemento = 0;
  acumuladorArena = 0;
  acumuladorCal = 0;
  precioTotal = 0;
  banderaDelPrimero = true;
  


  while(respuesta == true)
  {

    material = prompt("Bienvenido; Ingrese el material: Arena, Cal o Cemento");

    while(material != "arena" && material != "cal" && material != "cemento")
    {
      material = prompt("Error,Ingrese el material: Arena, Cal o Cemento");
    }

    cantidad = prompt("Ingrese cantidad de bolsas");
    cantidad = parseInt(cantidad);

    while(isNaN(cantidad))
    {
      cantidad = prompt("Error,Ingrese cantidad de bolsas");
    }

    precioBolsa = prompt("Ingrese precio por bolsa");
    precioBolsa = parseInt(precioBolsa);

    while(isNaN(precioBolsa) || precioBolsa <1)
    {
      precioBolsa = prompt("Error; Ingrese precio por bolsa");
      precioBolsa = parseInt(precioBolsa);
    }

    switch(material)
    {
      case "arena":
        acumuladorArena = acumuladorArena + cantidad;
      break;
      case "cal":
        acumuladorCal = acumuladorCal + cantidad;
      break;
      case "cemento":
        acumuladorCemento = acumuladorCemento + cantidad;
      break;
    }
    
    

    

    respuesta = confirm("Desea Continuar?");


  }

  acumuladorBolsas= acumuladorArena + acumuladorArena + acumuladorCemento;
  precioTotal = cantidad * precioBolsa;
  console.log(acumuladorBolsas);
  console.log(precioTotal);

  if(acumuladorArena > acumuladorCemento && acumuladorArena > acumuladorCal)
  {
    document.write("El mayor numero de bolsas es de arena <br>");
  }
  else
  {
    if(acumuladorCemento > acumuladorArena && acumuladorCemento > acumuladorCal)
    {
      document.write("El mayor numero de bolsas es de cemento <br>");
    }
    else
    {
      document.write("El mayor numero de bolsas es de cal <br>");
    } 
  } 
  if(acumuladorBolsas >9 && acumuladorBolsas < 30)
  {
    descuento = 0.15;
  }
  else
  {
    if(acumuladorBolsas >30)
    {
      descuento = 0.25;
    }
    else
    {
      descuento = 0;
    }
  }
  if(descuento != 0)
  {
    precioDesc = precioTotal * descuento;
    document.write("El precio con descuento es de : "+precioDesc+" <br>");
  }
  else
  {
    document.write("El precio bruto es de "+precioTotal+" <br>");
  }

  document.write("El material mas caro fue "+materialMasCaroPrecio+ " <br>");
}
