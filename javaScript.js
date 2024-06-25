document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    ingreso();
});
document.getElementById('btn2').addEventListener('click', function(event) {
    event.preventDefault();
    activarEjercicios();
});

function ingreso() {
    const nombre = document.getElementById('name').value;
    const edad = document.getElementById('age').value;

    try {
        validarNombre(nombre);
        validarEdad(edad);
        const mensajeBienvenida = mensaje(nombre, edad);
        mostrarMensaje(mensajeBienvenida);
    } catch (error) {
        mostrarError(error.message);
    }
}

function validarEdad(edad) {
    if (edad === null || edad === "") throw new Error("Debe ingresar edad");
    if (edad < 0) throw new Error("La edad no puede ser negativa");
}

function validarNombre(nombre) {
    if (nombre === null || nombre === "") throw new Error("Debe ingresar nombre");
}

function mensaje(nombre, edad) {
    return `Bienvenido/a, ${nombre}. Tenés ${edad} años.`;
}

function mostrarMensaje(mensaje) {
    const mensajeElemento = document.getElementById('message');
    mensajeElemento.textContent = mensaje;
    mensajeElemento.style.color = 'green';
}

function mostrarError(error) {
    const mensajeElemento = document.getElementById('message');
    mensajeElemento.textContent = error;
    mensajeElemento.style.color = 'red';
}

//////////Ejercicios anteriores


function activarEjercicios(){
  //ejercicio1

const nombre = 'Rodrigo';
let edad = 36;
console.log(nombre + edad);


//ejercicio2

const tString = `Hola me llamo ${nombre} y tengo ${edad} años`
console.log(tString);

//ejercicio3

const sumar = (a, b) => a + b;
let resultado = sumar(2, 2);
console.log(resultado); 

//ejercicio 4
//Crea un array de números y utiliza el //método map para duplicar cada número //del array. Luego, imprime el nuevo //array por consola.

const array = [0,1,2,3,4]
const doble = array.map(x => x*2)
console.log(doble)

//Utiliza el método filter para //filtrar los números pares del array //creado en el ejercicio anterior. //Imprime el nuevo array por consola.

const pares = array.filter(x => x % 2 === 0);
console.log(pares);

//Crea una función que tome un array de números como parámetro y devuelva la suma de todos ellos. Utiliza el método reduce para implementar la función.

const suma = array.reduce((acumulador, actual) => acumulador + actual);

console.log(suma);

//Ejercicio 7:  
//Utiliza el operador spread para combinar dos arrays en uno solo.
const array2 = [4, 5, 6];

const combinado = [...array, ...array2];

console.log(combinado); 


//Ejercicio 8: 
//Crea un objeto con información sobre una película, incluyendo título, género y año de estreno. Utiliza el destructuring para extraer esta información en variables separadas.
const peli = {
  titulo: "Fight club",
  genero: "Drama",
  estreno: 1999
};

const { titulo, genero, estreno } = peli;

//Ejercicio 9:
//Crea una función que tome un objeto como parámetro y devuelva una cadena con información legible sobre la película. Utiliza templates de strings y destructuring para obtener los valores del objeto.


const infoPeli = ({ titulo, genero, estreno }) =>`La pelicula: ${titulo}, de genero ${genero}, fue estrenada en el año ${estreno}`


console.log(infoPeli(peli));

//Ejercicio 10:  
//Crea una función que tome un número como parámetro y simule un error si el número es negativo. Utiliza try-catch para manejar el error e imprimir un mensaje de error por consola.
function verificarNumero (numero) {
    if (numero < 0) {
        throw new Error("El número debe ser positivo.");
    }
    return "El número es positivo.";
};
const numerosPositivos = (numero) => {
    try {
        console.log(verificarNumero(numero));
    } catch (error) {
        console.error("Error:", error.message);
    }
};
numerosPositivos(5);
numerosPositivos(-5);

}