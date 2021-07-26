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
  var precioMasCaro;
  var respuesta;
  var totalBolsas;
  var bolsasCemento;
  var bolsasCal;
  var bolsasArena;
  var materialMasCaro;
  var banderaPrimerCaro;
  var precioMaterial;
  var precioBruto;
  var precioDesc;

  respuesta = true;
  bolsasCemento = 0;
  bolsasCal = 0;
  bolsasArena = 0;
  precioBolsaCaro = 0;
  materialMasCaro = 0;
  precioBruto = 0;
  banderaPrimerCaro = false;

  while(respuesta == true)
  {
    material = prompt("Ingrese el material deseado : Cemento , cal o arena");

    while(material != "cemento" && material != "cal" && material != "arena")
    {
      material = prompt("Error;ingrese el material deseado : Cemento , cal o arena");
    }

    cantidad = prompt("Ingrese la cantidad de bolsas");
    cantidad = parseInt(cantidad);

    while(isNaN(cantidad)|| cantidad < 1)
    {
      cantidad = prompt("Error;Ingrese la cantidad de bolsas");
      cantidad = parseInt(cantidad);
    }

    precioBolsa = prompt("Ingrese el precio por bolsa");
    precioBolsa = parseInt(precioBolsa);
    
    while(isNaN(precioBolsa) || precioBolsa <1)
    {
      precioBolsa = prompt("Error,Ingrese el precio por bolsa");
      precioBolsa = parseInt(precioBolsa);
    }

    switch(material)
    {
      case "cemento":
        bolsasCemento = bolsasCemento + cantidad;
      break;
      case "cal":
        bolsasCal = bolsasCal + cantidad;
      break;
      case "arena":
        bolsasArena = bolsasArena + cantidad;
      break;
    }

    precioMaterial = precioBolsa * cantidad;
    precioBruto = precioBruto + precioMaterial; 

    if(precioBolsa > precioMasCaro ||banderaPrimerCaro==false)
    {
      precioMasCaro = precioBolsa;
      materialMasCaro = material;
      banderaPrimerCaro = true;
    } 

    
    respuesta = confirm("Desea continuar?");
  }

  totalBolsas = bolsasCemento + bolsasCal + bolsasArena;

  document.write("El precio bruto es de $: "+precioBruto+ " <br>");

  if(totalBolsas > 30)
  {
    descuento = 0.25
  }
  else
  {
    if(totalBolsas > 10 && totalBolsas < 30)
    {
      descuento = 0.15
    }
    else
    {
      descuento = 0;
    }    
  }

  if(descuento != 0)
  {
    descuento = precioBruto * descuento;
    precioDesc = precioBruto - descuento;
    document.write("El precio con descuento es de $: "+precioDesc+ " <br>");
  }
  if(bolsasCemento > bolsasArena && bolsasCemento > bolsasCal)
  {
    document.write("El material con mas bolsas es el cemento con : " +bolsasCemento+ " <br>");
  }
  else
  {
    if(bolsasArena > bolsasCemento && bolsasArena > bolsasCal)
    {
      document.write("El material con mas bolsas es el arena con : "+bolsasArena+ " <br>");
    }
    else
    {
      document.write("El material con mas unidades es cal con : "+bolsasCal+ " <br>");
    }
  } 
  document.write("El material mas caro es el : "+materialMasCaro+ " <br>")
}