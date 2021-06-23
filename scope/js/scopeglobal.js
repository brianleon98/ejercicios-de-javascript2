const n = 4;

//funcion que suma un numero que le entra por parametros mas la variable constante n y muestra el resultado
function suma(j) {
	resultado = j + n ;
	console.log(resultado);
}
suma(3);

//funcion que hace una resta de un numero que le entra por parametros y lo resta con la variable constante n y muestra el resultado.
function resta(z) {
	resultado = z - n ;
	console.log(resultado);
}
resta(3);

//funcion que hace una divicion de un numero que le entra por parametros y lo divide por la variable constante n y muestra el resultado
function division(h){
    resultado = n / h ;
    console.log(this.resultado);
}
division(2);

//funcion que multiplica un numero que le entra por parametros y lo multiplica con la variable constante n y muestra el resultado
function multiplicacion(s) {
	resultado = s / n ;
	console.log(resultado);
}
multiplicacion(3);

const saludo = 'hola buenos dias';
//funcion que muestra lo que hay en la variable constante saludo mas el nombre que le entra por parametro
 
function nombre(name) {
	console.log(saludo + ' ' + name);
}
nombre('juan');
//funcion que muestra lo que hay en la variable constante edad mas la edad que le entra por parametro
var edad = 'mi edad es';
function tiempo(o) {
	console.log(edad+' '+ o);
}
tiempo(23);
//funcion que muestra los colores que hay en la variable colores
var colores = ' azul , blanco';
function color() {
	console.log(colores)
}
color()

//funcion que muestra los animales que hay en la variable animales
var animales = 'pero , gato , vaca';

function animal() {
	console.log(animales)
}
animal();

//funcion que muestra las ciudades que hay en la variable ciudad
var ciudades = 'manizales, bogota';

function ciudad() {
	console.log(ciudades);
}
ciudad();

//funcion que muestra los paise que hay en la variable paises
var paises = 'francia, belgica';
function pais() {
	console.log(paises)
}
pais()





