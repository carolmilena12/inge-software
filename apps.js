
function saludar(nombre){
    console.log('hola'+nombre);
    
}
const nombre = 'Maria'
saludar(nombre)

let saludar = nombre =>console.log('hola'+nombre);
const nom = 'Silvia'
saludar(nom)

function suma(a,b){
    resultado=a+b;
    console.log(resultado);    
}
suma(4,5)
let suma = (a,b) => console.log(a+b); 

suma(15,20)


//ejercicio 1 funciones flecha numeros pares
const numeros = [4,8,6,25,9,64,125];

let pares = numeros.map((numero)=>{
    par = [];
    if (numero%2==0){
        par.push(numero)
    }
    return par
})
console.log(pares)



// let filtrar = (numeros)=>{
//     const pares = [];
//     for (let i=0; i < numeros.length; i++){
//         if (numeros[i]%2===0){
//             pares.push(numeros[i]);
//         }
//     }
//     return pares;
// }
// console.log(filtrar(numeros));

//ejercio 2 funcion flecha p




//ejercicio 2 funcion map, devolver el doble de los elementos del arreglo

let array_numeros = [5, 9, -7, 3, 0, 12]
let array_numeros_map = array_numeros.map((x)=>x+x);
console.log(array_numeros_map);

// ejercicio 3 potencia 

let array_num = [1, 2, 3, 4, 5];
let array_num_map = array_num.map(x=>Math.pow(x,2));
console.log(array_num_map);

// ejercicio 4 map calular el 10% de impuesto
const productos = [{nombre:"refresco", precio:15},
                   {nombre:"galletas", precio: 5},
                   {nombre:"chocolates", precio: 20}];
const impuestos1 = productos.map(producto => {
    return {
        nombre:producto.nombre,
        precio:producto.precio + (0.10*producto.precio)
    };
});console.log(impuestos);

// ejercicio
let numbers = [1, 5, 10, 15];
let doubles = numbers.map(function (x) {
  return x * 2;
});
console.log(doubles)

var numer = [1, 4, 9];
var roots = numbers.map(function (num) {
  return Math.sqrt(num);
});

//ejercicio 
const pedidos = [{cliente:"Juan", total:50, entregado: true},
                 {cliente:"Mateo", total:80, entregado: false},
                 {cliente:"Lucas", total:150, entregado: false},
                 {cliente:"Santiago", total:60, entregado: true}];

const impuestos = productos.map(producto => {
    return {
        nombre:producto.nombre,
        precio:producto.precio + (0.10*producto.precio)
    };
});console.log(impuestos);                 
// const clientes = pedidos.filter(item => item.entregado==true);
// console.log(pedidos);
// console.log(clientes);



//FILTER
// ejemplo 1

let nums = [1,5,23,4,12,45,78,8,8.9,10,11,3.4,10.1,84,6]
let mayores = nums.filter(num => num > 10);
console.log(mayores);

// for (let i = 0; i<numbers.length; i++) {
//   var numeroActual = numbers[i];
//   if (numeroActual > 10) {
//     mayores.push(numeroActual)
    
//   }
// }

const sumandos =[2, 5, 8, 4, 6]
const total = sumandos.reduce((acumulador,sumando) => acumulador +sumando,0)
console.log(total);


setTimeout(()=>console.log('Ejecutando setTimeout')
,2000);

console.log("A");
function mostrarB(x){
    setTimeout(()=> {
        console.log("B");
        x()}
        ,3000); 
}
function mostrarC(){
    console.log("C");   
}
mostrarB(mostrarC)


new Promise ((resolve,reject)=>
    {
        if (true){
            resolve("Todo bien")
        }else {
            reject ("error")
        }
    })

    console.log("A");
    const promesa = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("B")
            reject("😪")
        },2000)

    })
    promesa.then(()=>{
        console.log("promesa cumplida ");
        
    }).catch((mensaje)=>{
        console.log("La promesa no fue cumplida " + mensaje);
    })

   console.log("C");
    
function conexion(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("B")
            resolve()
        },2000)

    })
}    

async function codigoasincrono(){
    console.log("A")
    await conexion()
    console.log("C");
}

codigoasincrono();










