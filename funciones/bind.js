//dos objetos que son enlasados mediante bind y muestran un nombre mediante una funcion
const persona ={
	nombre : 'javier',
	saludar : function() {
		console.log(this.nombre);
	}
}
persona.saludar();


const otraPersona ={
	saludar: persona.saludar.bind(persona)
}
otraPersona.saludar();

//dos objetos que son enlasados mediante bind y muestran el nombre de una fruta
const frutas ={
	nombre : 'mango',
	fruta : function() {
		console.log(`este es un ${this.nombre}`);
	}
}
frutas.fruta();


const nuevaFruta ={
	fruta: frutas.fruta.bind(frutas)
}
nuevaFruta.fruta();
//dos objetos que son enlasados mediante bind y muestran el nombre de un carro
const autos ={
	nombre : 'mazda',
	carro : function() {
		console.log(`este es un ${this.nombre}`);
	}
}
autos.carro();


const nuevoAuto ={
	carro: autos.carro.bind(autos)
}
nuevoAuto.carro();

//dos objetos que son enlasados mediante bind y dentro de una funcion hay un if que muestra un mensaje segun el valor de la propiedad
const paises ={
	nombre : 'mexico',
	pais: function() {
		if (this.nombre === 'alemania') {
			console.log('bienvenido')
		}
		else{
			console.log(this.nombre);
		}
	}
}
paises.pais();


const nuevoPais ={
	pais: paises.pais.bind(paises)
}
nuevoPais.pais();


//dos objetos que son enlasados mediante bind y dentro de una funcion hay un for que rrecorre un array y muestra en pantalla
const color ={
	nombre : ['amarillo','verde'],
	colores: function() {
		for (var i = 0; i < this.nombre.length; i++) {
			console.log(this.nombre[i]);
		}
		}
	}

color.colores();


const nuevoColor ={
	colores: color.colores.bind(color)
}
nuevoColor.colores();


//dos objetos que son enlasados mediante bind y muestran el nombre de un animal
const animal ={
	nombre : 'gato',
	animales : function() {
		console.log(`este es un ${this.nombre}`);
	}
}
animal.animales();


const repetir ={
	animales: animal.animales.bind(animal)
}
repetir.animales();

//dos objetos que son enlasados mediante bind y muestran el nombre de un planeta
const planeta ={
	nombre : 'marte',
	planetas : function() {
		console.log(`este es ${this.nombre}`);
	}
}
planeta.planetas();


const repetir1 ={
	planetas: planeta.planetas.bind(planeta)
}
repetir1.planetas();

//dos objetos que son enlasados mediante bind y muestran el nombre de dos ciudades
const ciudades ={
	nombre : 'pereira , cali',
	ciudad : function() {
		console.log(`estas son ${this.nombre}`);
	}
}
ciudades.ciudad();


const enlazar ={
	ciudad: ciudades.ciudad.bind(ciudades)
}
enlazar.ciudad();

//dos objetos que son enlasados mediante bind y muestran el nombre de dos continentes
const continentes ={
	nombre : 'asia , europa',
	continente : function() {
		console.log(`estas son ${this.nombre}`);
	}
}
continentes.continente();


const enlazar1 ={
	continente: continentes.continente.bind(continentes)
}
enlazar1.continente();


//dos objetos que son enlasados mediante bind y muestran el de los elementos
const elementos ={
	nombre : 'agua , tierra, fuego, aire',
	elemento : function() {
		console.log(`estos son los ${this.nombre}`);
	}
}
elementos.elemento();


const enlazar2 ={
	elemento: elementos.elemento.bind(elementos)
}
enlazar2.elemento();





