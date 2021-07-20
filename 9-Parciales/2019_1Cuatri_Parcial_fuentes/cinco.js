/*una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%*/

function mostrar()
{
    var precio;
	var descuento;
	var continente;
	var dias;
	var formaDePago;
	var recargo;

	dias = prompt("Ingrese la cantidad de días a vacacionar");
	formaDePago = prompt("Ingrese forma de pago: Debito,MercadoPago o Efectivo");
	continente = document.getElementById("Marca").value;

	dias = parseInt(dias)
	descuento = 0;
	precio = 100;
	precio = precio * dias;
	recargo = precio * 0.20;

	switch(continente)
	{
		case "América":
			switch(formaDePago)
			{
				case "debito":
					descuento = 0.60;
				break;
				default:
					descuento = 0.50;
				break;
			}
		break;
		case "África":
			switch(formaDePago)
			{
				case "mercadopago":
				case "efectivo":
					descuento = 0.75;
				break;
				default:
					descuento = 0.60;
     		}	break;
     	break;
     	case "Europa":
     		switch(formaDePago)
     		{
     			case "debito":
     				descuento = 0.35;
     			break;
     			case "mercadopago":
     				descuento = 0.30;
     			default:
     				descuento = 0.25;
     			break;
			}
		break;
		default:
			  precio = precio + recargo;
		break;
	}

	descuento = precio * descuento;
	precio = precio - descuento;

	alert("Precio final por vacacionar " +dias+ " días en " +continente+ " es de $ " +precio);
}