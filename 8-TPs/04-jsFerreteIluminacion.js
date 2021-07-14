/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidad;
    var marca;
    var precio;
    var precioTotal;
    var descuento;
    var precioFinal;
    var ingresosBrutos;
    var precioIIBB;

    cantidad = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    cantidad = parseInt(cantidad);
    precio = 35;
    precioTotal = cantidad * precio;

    if(cantidad > 5)
    {
        descuento = precioTotal / 2;
        precioFinal = precioTotal - descuento;
        document.getElementById("txtIdprecioDescuento").value = precioFinal; 
    }
    else
    {
        if(cantidad == 5 && marca == "ArgentinaLuz")
        {
          descuento = precioTotal * 40 / 100;
          precioFinal = precioTotal - descuento;
          document.getElementById("txtIdprecioDescuento").value = precioFinal; 
        }
        else
        {   
            if(cantidad == 4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            {
               descuento = precioTotal * 25 / 100;
               precioFinal = precioTotal - descuento;
               document.getElementById("txtIdprecioDescuento").value = precioFinal; 
            }
            else
            {  
                if(cantidad == 4 && marca != "ArgentinaLuz" || marca != "FelipeLamparas")
                {
                    descuento = precioTotal * 20 / 100;
                    precioFinal = precioTotal - descuento;
                    document.getElementById("txtIdprecioDescuento").value = precioFinal; 
                }
                else
                {
                    if(cantidad == 3 && marca == "ArgentinaLuz")
                    {
                        descuento = precioTotal * 15 / 100;
                        precioFinal = precioTotal - descuento;
                        document.getElementById("txtIdprecioDescuento").value = precioFinal; 
                    }
                    else
                    {
                        if(cantidad == 3 && marca == "FelipeLamparas")
                        {
                            descuento = precioTotal * 10 / 100;
                            precioFinal = precioTotal - descuento;
                            document.getElementById("txtIdprecioDescuento").value = precioFinal;
                        }
                        else
                        {
                            if(cantidad == 3 && marca != "ArgentinaLuz" || marca != "FelipeLamparas")//No repetir la misma pregunta.
                            {    
                               descuento = precioTotal * 5 / 100;
                               precioFinal = precioTotal - descuento;
                               document.getElementById("txtIdprecioDescuento").value = precioFinal;
                            }
                        }      
                    }    
                }    
            }    
        }    
    }
    if(precioFinal > 120)
    {
        ingresosBrutos = precioFinal * 10 / 100;
        precioIIBB = precioFinal + ingresosBrutos;
        document.getElementById("txtIdprecioDescuento").value = precioIIBB;
        alert("Usted pago $ " +ingresosBrutos+ " de IIBB");
    }
}
