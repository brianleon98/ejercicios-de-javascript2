//funcion que muestra frutas y mediante apply llama al objeto frutas y le pasa nuevos valores ala funcion
this.name = 'primeras frutas';
function frutas(name,name2) {
	console.log(`${name} y ${name2} ${this.name}` );
}
frutas('manga','pera');

const frutas1 ={
	name: 'nuevas frutas'
 }

frutas.apply(frutas1,['naranja','manzana']);

//funcion que muestra el nombre de pcs y mediante apply llama al objeto computadores1 y le pasa nuevos valores ala funcion

this.pc = 'primeras pcs';
function computadores(name,name2) {
	console.log(`${name} y ${name2} ${this.pc}`);
}
computadores('thosiba','dell');

const computadores1 ={
	pc: 'nuevas computadoras'
 }

computadores.apply(computadores1,['lenovo','azus']);

//funcion que muestra el resultado de una multiplicacion y mediante apply llama al objeto multiplicasion1 y le pasa nuevos valores ala funcion
this.multiplaciones = 'primer multiplicasion';

function multiplicacion(n1,n2) {

console.log( `${n1 * n2} ${this.multiplaciones}`);

}
multiplicacion(2,2);

const multiplicasion1 ={
	multiplaciones: 'nueva multiplacion'
 }

multiplicacion.apply(multiplicasion1,[2,3]);

//funcion que muestra el resultado de una suma y mediante apply llama al objeto suma2 y le pasa nuevos valores ala funcion

this.sumas = 'primer sumas';

function suma(n1,n2) {
	console.log( `${n1 + n2} ${this.sumas}`);
}
suma(1,2);

const suma2 ={
	sumas: ' segunda suma'
 }

suma.apply(suma2,[3,4]);

//funcion que muestra el resultado de una resta y mediante apply llama al objeto resta2 y le pasa nuevos valores ala funcion
this.restas = 'primer resta';
function resta(n1,n2) {
	console.log( `${n1 - n2} ${this.restas}`);
}
resta(12,2);

const resta2 ={
	restas: ' segunda resta'
 }

resta.apply(resta2,[12,4]);

//funcion que muestra el resultado de una division y mediante apply llama al objeto division2 y le pasa nuevos valores ala funcion


this.diviciones = 'primer divicion';
function divicion(n1,n2) {
	console.log( `${n1 / n2} ${this.diviciones}`);
}
divicion(7,2);

const divicion2 ={
	diviciones: ' segunda divicion'
 }
divicion.apply(divicion2,[20,4]);

//funcion que muestra el nombre de animales y mediante apply llama al objeto animal1 y le pasa nuevos valores ala funcion

this.animales = 'primeros animales';
function animal(name,name2) {
	console.log(`${name} y ${name2} ${this.animales}`);
}
animal('gato','perro');

const animal1 ={
	animales: 'nuevos animales'
 }

animal.apply(animal1,['vaca','pajaro']);

//funcion que muestra unos colres y mediante apply llama al objeto colores1 y le pasa nuevos valores ala funcion
this.color = 'primeros colores';

function colores(name,name2) {
	console.log(`${name} y ${name2} ${this.color}`);
}
colores('amarillo','negro');

const colores1 ={
	color: 'nuevos colores'
 }

colores.apply(colores1,['blanco','azul']);

//funcion que muestra nombres de autos y mediante apply llama al objeto auto1 y le pasa nuevos valores ala funcion
this.autos = 'primeros autos';

function auto(name,name2) {
	console.log(`${name} y ${name2} ${this.autos}`);
}
auto('mazda','chevrolet');

const auto1 ={
	autos: 'nuevos autos'
 }

auto.apply(auto1,['montero','toyota']);

//funcion que muestra nombres de ciudades y mediante apply llama al objeto ciudad1 y le pasa nuevos valores ala funcion

this.ciudad = 'primeras ciudades';

function ciudades(name,name2) {
	console.log(`${name} y ${name2} ${this.ciudad}`);
}
ciudades('bogota ','medellin');

const ciudad1 ={
	ciudad: 'nuevas ciudades'
 }

ciudades.apply(ciudad1,['manizales','anserma']);


