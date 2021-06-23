//funcion que retorna una funcion con el nombre de la variable w mas una frase que le entra por parametro 

function miPrimerFuncion(frase) {
  var w = "brahian leon";
  
  return function() {
    console.log(`${frase} ${w}`);
  }
}

var nom1 = miPrimerFuncion('me llamo');
console.log(nom1()); 

//funcion que retorna una funcion y valida si lo que le esta dentrando por parametro es gato muestra 'gatos no hay' si no muestra una frase y el dato que le entra por parametro
function ComprarAnimal(name) {
   
   return function(){

   if (name == 'gato') {
   	   console.log('gatos no hay');
   }else{
   	var nombre = 'compraste' + name;
    console.log(nombre);
   }
	

   }
    
}
var animal =ComprarAnimal('perro');
console.log(animal());

//funcion que retorna una funcion y validad si lo que le esta entrando por parametro es igual a maimi muestra vuelos cancelados si no muestra si hay vuelos para y el dato que le entra por parametro

function vuelos(name) {
	
	return function(){

	    if (name == 'miami') {
	   	   console.log('vuelos cancelados para miami');
	   }else{
	   	console.log(`si hay vuelos para ${name}`);
	   }
 	};
}
var vuelo = vuelos('francia');
console.log(vuelo());

//funcion que retorna una funcion y validad si lo que le esta entrando por parametro es igual a perro muestra un mensaje si no muestra lo que hay en la variable nombre 

function animal2(name) {
	var nombre = `el animal es  ${name}`;

	return function(){
		if (name == 'perro') {
			console.log(`${nombre} guaaaa , guaaaa`);
		}else{
			console.log(nombre);
		}
	};
}
var animales2 = animal2('perro');
console.log(animales2());

//funcion que retorna una fuction y recorre un array por medio del for y muestra lo que hay en el array colores
function colores() {
	var colores = ['amarillo','rojo','negro'];
	
	return function(){
         for (var i = 0; i < 3; i++) {
         	console.log(colores[i]);
         }
	}
}
var color = colores();
console.log(color());

//funcion que retorna una funcion y dentro de ella hace una suma con lo que le entra por parametro y muestra el resultado
function suma(n1,n2){
	return function () {
		var resultado = n1 + n2 ;
		console.log(resultado);
	}
}
var sumas = suma(7,8);
sumas();

//funcion que retorna una funcion y muestra un mensaje que hay en la variable frase mas lo que le entra por parametro
function ciudad(name){
	var frase = 'soy de';
	return function () {
		console.log(`${frase} ${name}`);
	}
}
var ciudades = ciudad('popayan');
console.log(ciudades());

//funcion que retorna una funcion y muestra un saludo que hay en la variable saludar mas lo que le entra por parametro 
function saludo(name){
	var saludar = 'hola que mas';
	return function () {
		console.log(`${saludar} ${name}`);
	}
}
var saludar = saludo('juan');
console.log(saludar());



//funcion que retorna una funcion y dentro de ella hace una resta que le entra por parametro y muestra el resultado
function resta(n1,n2){
	return function () {
		var resultado = n1 - n2 ;
		console.log(resultado);
	}
}
var restas = resta(7,8);
restas();


//funcion que retorna una funcion y dentro de ella hace una multiplicacion que le entra por parametro y muestra el resultado
function multiplicacion(n1,n2){
	return function () {
		var resultado = n1 * n2 ;
		console.log(resultado);
	}
}
var multiplicaciones = multiplicacion(9,8);
multiplicaciones();

//funcion que retorna una funcion y muestra el array cafetero
function Ejecafetero() {
	var cafetero=['manizales','pereira','armenia','chinchina','riouscio','supia','salamina','aguadas','pacora'];
	return function(){
		console.log(`estos son algunos pueblos y ciudades del eje cafetero: ${cafetero}`);
	}
}
var eje = Ejecafetero();
eje();


// funcion que retorna una funcion y dentro de ella hay un for que recorre el array a y muestra lo que hay dentro del array
function tenis() {
	var a=['adidas','nike','puma'];
	return function(){
	for (var i = 0; i <= 3; i++) {
		console.log(a[i]);
	}
  }
}
var zapatos = tenis();
zapatos()

//funcion que retorna una funcion y dentro de ella hace una divicion que le entra por parametro y muestra el resultado
function divicion(na1,na2) {
	return function(){
	console.log (resultado = na1 / na2);
  }
}
var div = divicion(32,3);
div()


//funcion que restorna una funcion y dentro de esta funcion se hace una validacion de que si lo que le entra por parametros es igual a naranja muestra un mensaje si no muestra otro
function compraFrutas(name) {


    return function(){
    	if (name === 'naranjas') {
		console.log(`no hay ${name}`);
	} else {
		console.log(`compraste ${name}`);
	}
    }
	
}
var compro = compraFrutas('naranjas');
console.log(compro())

//funcion que retorna una funcion con una operacion de raiz cuadrada y muestra el resultado
function raiz(na1) {
	return function(){
	var n = math.sqrt(na1);
	console.log (n);
  }
}
var raizz = raiz(3);
raizz()











