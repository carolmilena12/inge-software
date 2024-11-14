function sumar(a,b){
    return a+b;
}
function restar(a,b){
    return a-b;
}
function multiplicar(a,b){
    return a*b
}
function dividir(a,b){
    return a/b;
}

function calculadora(callback, num1, num2){
    console.log(callback(num1,num2));
}
    
calculadora(multiplicar,10,2);

    