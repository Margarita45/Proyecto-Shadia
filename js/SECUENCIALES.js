var opc= prompt("Ingrese el ejercicio a realizar del 1 al 4");


if (Math.round(opc) = 1) {
    superficie();
} else if (opc="2") {
    sumpro();
} else if (opc="3") {
    compra();
}

function superficie(){
let ladocuadrado = prompt("Ingrese el valor de uno de los lados del cuadrado")
let superficie = (parseInt(ladocuadrado) * parseInt(ladocuadrado))
document.write("la superficie del cuadrado es:", superficie)
console.log(typeof ladocuadrado)
console.log(typeof superficie)
}

function sumpro(){
let n1 = prompt("Ingrese un numero ");
let n2 = prompt("Ingrese un segundo numero ");
let suma = (parseInt(n1) + parseInt(n2));
let producto = (parseInt(n1) * parseInt(n2));

document.write(" el resultado de la suma es:", suma, " y  El resultado del producto es: ", producto);
console.log(typeof suma);
console.log(typeof producto);
}

function compra(){
    let precio = prompt("Ingrese el precio del producto ");
let cantidad = prompt("Ingrese la cantidad de productos ");
let totalapagar = (parseInt(precio) * parseInt(cantidad));
document.write(" el total a pagar es:", totalapagar);
console.log(typeof precio);
console.log(typeof cantidad);
}