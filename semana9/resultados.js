/* 
Ejercicio 1
function evaluate(number){
     if(number > 0){
         return 'Positivo'
     }else if(number < 0){
         return 'Negativo'
     }else{
         return 'Cero'
     }
     
}
evaluate(5);


Ejercicio 2
let jugador1 = prompt("Selecciona tu arma") 
let jugador2 = prompt("Selecciona tu arma")

if(jugador1 === "papel" && jugador2 === "piedra" || jugador1 === "tijeras" && jugador2 === "papel" || jugador1 === "piedra" && jugador2 === "tijeras"){
    alert ("Jugador 1 Gana")
   
}else if(jugador1 === "piedra" && jugador2 === "papel" || jugador1 === "papel" && jugador2 === "tijeras" || jugador1 === "tijeras" && jugador2 === "piedra"){
    alert("Jugador 2 Gana")
   
}else if (jugador1 === "piedra" && jugador2 === "piedra" || jugador1 === "papel" && jugador2 === "papel" || jugador1 === "tijeras" && jugador2 === "tijeras"){
    alert("Empate")
}else{
    console.log ("ERROR")
    alert("Intentelo de Nuevo")
}

Ejercicio 3 
const area =(b, h, c)=>{
   return b * h / c
}

console.log(area(2,4,2))

Ejercicio 4
const resta = (a, b) =>{
    console.log( a - b);
}
resta(10 , 100);
resta(1, 100);
resta(11, 100);
resta(150, 100);
resta(100, 100);

Ejercicio 5
const multiplicacion = (a, b) =>{
    console.log( a * b);
}
multiplicacion(10 , 100);
multiplicacion(1, 100);
multiplicacion(11, 100);
multiplicacion(150, 100);
multiplicacion(100, 100);


Ejercicio 6

for(let i = 1; i<=100; i= i + 1){
  if(i % 2===0){
      console.log (i + " Pares")
  }else if(i%1===0 ){
      console.log (i + " Impares")
  }
}

Ejercicio 7 
let usuario = 200 

if(usuario <= 11 || usuario <= 16){
 console.log("Eres un niño")
}else if (usuario >= 17 && usuario <=50){
    console.log("Eres un adulto")
}else{
    console.log("No eres humano")
}

Ejercicio 8

let edad = (prompt("Ingrese su edad"))

if(edad <= 0 || edad <= 15){
    console.log("No puedes conducir")
    alert("No puedes conducir")
}else if (edad >= 16 && edad <=17){
    console.log("Puedes sacar tu permiso")
    alert("Puedes sacar tu permiso")
}else if (edad >= 18 && edad <=80){
    console.log("Puedes conducir")
    alert("Puedes conducir")
}else{
    console.log("No lo haga prroo")
    alert("No lo haga prroo")
}

Ejercicio 9

let usuario = (prompt("Ingrese contraseña"))
let password= "perritoSalchichaR3"

if(usuario === password){
    console.log("Acceso Correcto")
    alert("Acceso Correcto")
}else{
    console.log("Acceso Incorrecto"),
    alert("Acceso Incorrecto")
}



*/