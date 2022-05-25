
let n1= parseInt(prompt("Ingrese el primer numero"));
let n2= parseInt(prompt("Ingrese el segundo numero"));
let n3= parseInt(prompt("Ingrese el tercer numero"));
const resultado = document.querySelector("#p");
const resultado1 = document.querySelector("#p-1");

if((n1<=n2) || (n2<n3)) {
    let suma = (n1 + n2)
    let multiplicacion = (suma * n3)
    resultado.textContent= "La suma de los dos numeros es de: " +suma;
    resultado1.textContent= "La multiplicacion de los dos por el tercero es de:" +multiplicacion;
    
}else {
    
}

console.log(typeof n1);
console.log(typeof n2);
console.log(typeof n3);