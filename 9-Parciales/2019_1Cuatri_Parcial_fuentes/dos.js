function mostrar()
{
  var nombre;
  var nombre2;
  var peso;
  var peso2;
  var pesoTotal;
  var promedioPeso;

  nombre = prompt("Ingrese su nombre");
  nombre2 = prompt("Ingrese el nombre de su pareja");
  peso = prompt("Ingrese su peso");
  peso2 = prompt("Ingrese el peso de su pareja");

  peso = parseInt(peso);
  peso2 = parseInt(peso2);

  pesoTotal = peso + peso2;
  promedioPeso = pesoTotal / 2;

  alert("Ustedes se llaman " + nombre + " y " + nombre2 + " y pesan " + peso + " kilos  y " + peso2 + " kilos que sumado son " + pesoTotal + " kilos y el promedio de peso es " + promedioPeso + " kilos");
}
