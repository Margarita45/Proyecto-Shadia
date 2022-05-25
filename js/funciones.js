console.log("")

function superficie(){
    let ladocuadrado = prompt("Ingrese el valor de uno de los lados del cuadrado")
    let superficie = (parseInt(ladocuadrado) * parseInt(ladocuadrado))
    document.write("la superficie del cuadrado es:", superficie)
    console.log(typeof ladocuadrado)
    console.log(typeof superficie)
}

function sumayproducto(){
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

function menor10(){
    let n1= parseInt(prompt("Ingrese el primer numero"));
    let n2= parseInt(prompt("Ingrese el segundo numero"));
    let n3= parseInt(prompt("Ingrese el tercer numero"));
    
    if((n1<10) && (n2<10) && (n3<10)) {
    document.write("Todos los numeros son menores a 10");
    }else {
    
    }
    
    console.log(typeof n1);
    console.log(typeof n2);
    console.log(typeof n3);
    }

function algunomenor10(){
    let n1= parseInt(prompt("Ingrese el primer numero"));
    let n2= parseInt(prompt("Ingrese el segundo numero"));
    let n3= parseInt(prompt("Ingrese el tercer numero"));
    
    if((n1<10) || (n2<10) || (n3<10)) {
    document.write("Alguno de los numeros es menor a 10");
    }else {
    
    }
    
    console.log(typeof n1);
    console.log(typeof n2);
    console.log(typeof n3);
    }

function sumamulti(){
    let n1= parseInt(prompt("Ingrese el primer numero"));
    let n2= parseInt(prompt("Ingrese el segundo numero"));
    let n3= parseInt(prompt("Ingrese el tercer numero"));
    const resultado = document.querySelector("#p");
    const resultado1 = document.querySelector("#p-1");
    
    if((n1<10) || (n2<10) || (n3<10)) {
        let suma = (n1 + n2)
        let multiplicacion = (suma * n3)
        resultado.textContent= "La suma de los dos numeros es de: " +suma;
        resultado1.textContent= "La multiplicacion de los dos por el tercero es de:" +multiplicacion;
        
    }else {
        
    }
    
    console.log(typeof n1);
    console.log(typeof n2);
    console.log(typeof n3);
}    

function sueldooperario(){
    sueldo = Number(prompt("De cuanto es su sueldo actual?"));
	anos = prompt("¿Cuantos años lleva trabajando?");
	if ((sueldo<500) && (anos>10)) {
		aumento = sueldo*0.20;
		ns = sueldo+aumento;
		document.write("El sueldo aumentara a:",ns)
	} else {
		if ((sueldo<500) && (anos<10)) {
			aumento = sueldo*0.05;
			ns = sueldo+aumento;
			document.write("El sueldo aumentara a:",ns)
		} else {
			if ((sueldo>500)) {
				document.write("Su sueldo se mantiene en",sueldo)
			}
		}
	}

}

function mayormenor(){
    n1 = prompt("Ingrese 3 numeros");
n2 = prompt("Ingrese el segundo numero");
n3 = prompt("Ingrese el tercer numero");
if (n1>n2 && n1>n3) {
    document.write("El numero mayor es:",n1)
} else {
    if (n2>n1 && n2>n3) {
        document.write("El numero mayor es:",n2)
    } else {
        if (n3>n1 && n3>n2) {
            document.write("El numero mayor es:",n3)
        }
    }
}
if (n1<n2 && n1<n3) {
    document.write("El numero menor es:",n1)
} else {
    if (n2<n1 && n2<n3) {
        document.write("El numero menor es:",n2)
    } else {
        if (n3<n1 && n3<n2) {
            document.write("El numero menor es:",n3)
        }
    }
}
}

function altura(){
    let personas= parseInt(prompt("Ingrese el numero de personas"));
i=0;
const resultado = document.querySelector("#p");
const resultado1 = document.querySelector("#p-1");
while(i<personas){
i++;
var altura = parseInt(prompt("Ingrese la altura de las personas"));
}
let sa= i+altura
resultado.textContent="La suma de las alturas es de:" +sa;
let promedio= (sa/personas)
resultado1.textContent="El promedio de las personas es:" +promedio;

console.log(typeof personas);
console.log(typeof altura);

}

function sueldoempleado(){
    let empleados= parseInt(prompt("Ingrese el numero de empleados"));
var i=0;
var suma = 0
var menos=0;
var mas=0;
const resultado = document.querySelector("#p");
const resultado1 = document.querySelector("#p-1");
const resultado2 = document.querySelector("#p-2");
while(i<empleados){
    i++;
    var sueldo = parseFloat(prompt("Ingrese el sueldo de los empleados"));
    suma= suma+ Number(sueldo);
    if((sueldo>=100) && (sueldo<=300)){
        var menos = menos+1

    }else{
        if(sueldo>300){
            var mas= mas+1;
        }
    }


    
}

resultado.textContent="El numero de empleados que ganan entren 100 y 300 es:" +menos;
resultado1.textContent="Los que ganan mas de 300 son:" +mas;
resultado2.textContent="El importe de la empresa en sueldos es:" +suma;

console.log(typeof empleados);
console.log(typeof sueldo);
console.log(typeof i);

}

function serie11(){
    let serie=0
    for( let i=0; i<25; i++) {
        i = i+1;
        serie = serie+11;
        document.write(serie)
    }
}

function multiplos8(){
    i = 1;
	do {
		multi = 8*i;
		i = i+1;
		document.write(multi)
	} while (i!=500);
}


function menu (){
    let valor= prompt("\n1. Superficie de un cuadrado \n2. Suma y producto \n3. Compra de un producto \n4. Numero menores a 10 \n5. Algun numero menor a 10 \n6. Suma y multuplicacion de 3 numeros \n7. Sueldo de un operario \n8. Numero mayor y menor \n9. Altura de personas \n10. Sueldo de empleados \n11. Serie de 11 \n12. Multiplos de 8")
    if (valor==1){
        superficie()
    }
    if (valor==2){
        sumayproducto()
    }
    if (valor==3){
        compra()
    }
    if (valor==4){
        menor10()
    }
    if (valor==5){
        algunomenor10()
    }
    if (valor==6){
        sumamulti()
    }
    if (valor==7){
        sueldooperario()
    }
    if (valor==8){
        mayormenor()
    }
    if (valor==9){
        altura()
    }
    if (valor==10){
        sueldoempleado()
    }
    if (valor==11){
        serie11()
    }
    if (valor==12){
        multiplos8()
    }
}

menu();