function mostrar()
{
  var nombre;
  var nombre2;
  var peso;
  var peso2;
  var pesoTotal;
  var promedioPeso;
  var mensajeNombre;
  var mensajeKilos;
  var mensajePromedio;

  nombre = prompt("Ingrese su nombre");
  nombre2 = prompt("Ingrese el nombre de su pareja");
  peso = prompt("Ingrese su peso");
  peso2 = prompt("Ingrese el peso de su pareja");

  peso = parseInt(peso);
  peso2 = parseInt(peso2);

  pesoTotal = peso + peso2;
  promedioPeso = pesoTotal / 2;

  mensajeNombre =" Ustedes se llaman " +nombre+ " y " +nombre2;
  mensajeKilos =" y pesan " +peso+ " y " +peso2+ " kilos que sumado son " +pesoTotal+ " kilos ";
  mensajePromedio =" el promedio de peso es de " +promedioPeso+ " kilos ";

  alert(mensajeNombre+mensajeKilos+mensajePromedio);
}
