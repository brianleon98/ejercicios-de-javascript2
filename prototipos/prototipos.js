//funcion constructora , metodo hablar que se le añade al prototipo y valiad si lo que le que entra por el parametro nombre es igual ah gato muestra un mensaje si no muestra otro

function animal(nombre,especie){
          this.nombre = nombre;
          this.especie = especie;
}

animal.prototype.hablar = function() {
	if (this.especie === 'gato') {
		console.log(' y ella dice MIAU , MIAU');
	} else {
		console.log(' y el dice GUAU , GUAU');
	}
	
};
var trasquilado = new animal('trasquilado','perro');

console.log(trasquilado);

trasquilado.hablar();

//funcion constructora,metodo mostrar que se le añade al prototype y muestra un mensaje

function mobil(marca,almacenamiento){
    this.marca = marca;
    this.almacenamiento = almacenamiento;
}
mobil.prototype.mostrar = function() {
	console.log(`Made en china`)
};
var celular = new mobil('samsung','67GB');
var celular1 = new mobil('huawei','128GB');

console.log(celular);
console.log(celular1);
celular.mostrar();

//funcion constructora mas un prototype que muestra un mensaje
function pc(name,espacio){
    this.name = name;
    this.espacio = espacio;
}

pc.prototype.info = function() {
	console.log(`Made en EEUU`)
};
var pc1 = new pc('dell','267GB');

console.log(pc1);
pc1.info();

//funcion constructora mas un prototype que muestra un mensaje 
function ciudad(name){
    this.name = name;
 
}

ciudad.prototype.frase = function() {
	console.log(`es muy bonita ciuadad `)
};
var ciudad1 = new ciudad('cali');

console.log(ciudad1);
ciudad1.frase();

//funcion constructora mas un prototype que muestra un mensaje mas lo que hay nueva variable tenis 
function tenis(name,modelo){
    this.name = name;
    this.modelo = modelo;
}

tenis.prototype.detalles = function() {
	console.log(`tienen un precio de 120000`)
};
var teni = new tenis('adidas','rt56');

console.log(teni);
teni.detalles();

//funcion constructora mas un prototype que muestra un mensaje mas lo que hay nueva variable auto
function auto(name,modelo){
    this.name = name;
    this.modelo = modelo;
}

auto.prototype.informacion = function() {
	console.log(`cuesta 42.567.899`)
};
var auto1 = new auto('mazda','6ty6');

console.log(auto1);
auto1.informacion();

//funcion constructora mas un prototype que hace la suma de los valores que l estan entrando por parametro ala funcion constructora y muestra el resultado
function suma(num1,num2){
    this.num1 = num1;
    this.num2 = num2;
}

suma.prototype.resolver = function() {
	console.log(`${this.num1 + this.num2}`)
};
var sum = new suma(2,3);

console.log(sum);
sum.resolver();

//funcion constructora mas un prototype que hace la resta de los valores que l estan entrando por parametro ala funcion constructora y muestra el resultado
function resta(num1,num2){
    this.num1 = num1;
    this.num2 = num2;
}

resta.prototype.resol = function() {
	console.log(`${this.num1 - this.num2}`)
};
var res = new resta(12,3);

console.log(res);
res.resol();

//funcion constructora mas un prototype que hace la multiplicasion de los valores que l estan entrando por parametro ala funcion constructora y muestra el resultado
function multiplicacion(num1,num2){
    this.num1 = num1;
    this.num2 = num2;
}

multiplicacion.prototype.re = function() {
	console.log(`${this.num1 * this.num2}`)
};
var multi = new multiplicacion(12,3);

console.log(multi);
multi.re();

//funcion constructora mas un prototype que hace la divicion de los valores que l estan entrando por parametro ala funcion constructora y muestra el resultado
function divicion(num1,num2){
    this.num1 = num1;
    this.num2 = num2;
}

divicion.prototype.dividir = function() {
	console.log(`${this.num1 / this.num2}`)
};
var dir = new divicion(45,3);

console.log(dir);
dir.dividir();













