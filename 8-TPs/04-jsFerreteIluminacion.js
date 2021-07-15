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
    var ingresosBrutos;
    
    cantidad = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    cantidad = parseInt(cantidad);
    precio = 35;
    precioTotal = cantidad * precio;

    if(cantidad > 5)
    {
        descuento = precioTotal / 2;
    }
    else
    {
        if(cantidad == 5)
        {
            if(marca == "ArgentinaLuz")
            {
                descuento = precioTotal * 0.4;
            }
            else
            {
                if(marca != "ArgentinaLuz")
                {
                    descuento - precioTotal * 0.3;
                }
            }
        }
        else
        {
            if(cantidad == 4)
            {
                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    descuento = precioTotal * 0.25;
                }
                else
                {
                    if(marca != "ArgentinaLuz" || marca == "FelipeLamparas")
                    {
                        descuento = precioTotal * 0.2;
                    }
                }
            }
            else
            {
                if(cantidad == 3)
                {
                    if(marca == "ArgentinaLuz")
                    {
                        descuento = precioTotal * 0.15;
                    }
                    else
                    {
                        if(marca == "FelipeLamparas")
                        {
                            descuento = precioTotal * 0.10;
                        }
                        else
                        {
                            if(marca != "ArgentinaLuz" || "FelipeLamparas")
                            {
                                descuento = precioTotal * 0.05;
                            }
                        }
                    }
                }
            }
        }
    }

    precioTotal = precioTotal - descuento; 
    if(precioTotal > 120)
    {
        ingresosBrutos = precioTotal * 0.10;
        precioTotal = precioTotal + ingresosBrutos;
        alert("Usted pago $ " +ingresosBrutos+ " de IIBB");
    }
    document.getElementById("txtIdprecioDescuento").value = precioTotal;

}
