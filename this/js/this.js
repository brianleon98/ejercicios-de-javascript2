//funcion que restorna la suma entre la constante num1 y lo que le entra por parametro
const num1= 2;

function this1(n) {
	return this.a = num1 + n;
}
console.log(this1(2));

//funcion que restorna el resultado de la multiplicasion entre la constante num2 y lo que le entra por parametro
const num2= 3;

function this2(n) {
	return this.a = num2 * n;
}
console.log(this2(2));

//funcion que restorna el resultado de la division entre la constante num3 y lo que le entra por parametro
const num3= 8;

function this3(n) {
	return this.a = num3 / n;
}
console.log(this3(78));

//funcion que restorna el resultado de la resta entre la constante num4 y lo que le entra por parametro
const num4= 10;

function this4(n) {
	return this.a = num4 - n;
}
console.log(this4(2));
//objeto con una propiedad y un metodo que muestra la propiedad mediante una funcion
const obj={
	nombre : 'brahian',
	mostrar: function() {
		console.log(this.nombre);
	}
}
obj.mostrar();

//objeto con dos propiedades y un metodo que valida mediante una funcion
var animal = {
    sonido : 'guau',
    sonido1 : 'miauuuu',
    hacerRuido: function (name) {
    	if (name === 'perro') {
    		console.log(this.sonido);
    	} else {
    		console.log(this.sonido1)
    	}
    }
}
animal.hacerRuido('perro');

//una clase que muestra un saludo mediante un metodo funcion
class saludo{
	constructor(nombre,saludo){
	this.nombre = nombre;
	this.saludo = saludo;
  } 
  saludar(){
  	console.log(`${this.saludo} ${this.nombre}`)
  }
  
}
var hablar = new saludo('juan','hola como estas');
console.log(hablar.saludar());

//funcion que muestra la tablas de multiplicar de un numero que ingresemos por parametros
function tablas(n1) {
	for (var i = 1; i <= 10; i++) {
		var resultado = n1 * [i];
		console.log(resultado);
	}
}
console.log(this.tablas(5));	

//funcion que muestra nombres de frutas que ingresemos por parametros
function frutas(name) {
	   console.log(name);
	}
console.log(this.frutas('mango peraz bananos limones naranjas'));

//funcion que hace una operacion matematica mediante un if segun el nombre de la operacion que le ingresemos por parametro
function calcu(name,n1,n2) {
	if (name == 'suma') {
        this.resultado = n1 + n2 ;
        console.log(this.resultado)
	} 
	else if (name == 'multiplicacion') {
		this.resultado = n1 * n2 ;
		console.log(this.resultado);
	}
	else if (name == 'resta') {
		this.resultado = n1 - n2 ;
		console.log(this.resultado);
	}
	else if(name == 'davicion') {
		this.resultado = n1 / n2 ;
		console.log(this.resultado);
	}
}
console.log(this.calcu('davicion',5,3))

//muestra una alerta en pantalla 
console.log(this.alert('oeee abre la consola pa que vea los ejercicios :p'));


//una funcion que muestra un mensaje mediente un if segun lo que alla en this.a
function compra() {
	this.a = 'dell';

	if (this.a === 'azus') {
		console.log('no hay azuz');
	} else {
		console.log(`compraste ${this.a}`);
	}
}
console.log(compra());

//una funcion que tiene dentro un array que es recorrido por un for y muestra lo que hay en el array
function tenis() {
	this.a=['adidas','nike','puma'];
	for (var i = 0; i <= 3; i++) {
		console.log(this.a[i]);
	}
}
console.log(this.tenis());	

//funcion que muestra lo que hay en un array
function planetas() {
	this.planets=['mercurio','venus','tierra','marte','jupiter','saturno','urano','neptuno','pluton'];
	console.log(this.planets);
}
console.log(this.planetas());


//funcion que tiene dentro un array que es recorrido mediante un for y mediante un if dice si encuentra la palabra gucci en el array nos muestra un mensaje si no nos muestra el array completo
function comprarRopa() {
	this.a=['adidas','nike','calvin clein','gucci'];
	for (var i = 0; i <= 4; i++) {
		if (this.a[i] == 'gucci') {
			console.log('ropa gucci se acabo');
		} else {
			console.log(this.a[i]);
		}
	}
}
console.log(this.comprarRopa())

//funcion que le saca raiz cuadrada  a un numero y muestra el resultado
function raiz(x) {
    this.resultado = Math.sqrt(x);
    console.log(this.resultado)
}
raiz(9);



