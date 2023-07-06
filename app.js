
// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
const fromDollarToYen = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInYen = valueInEuro * 127.9;
    // retornamos el valor
    return Number(valueInYen.toFixed(2));
}
const fromYenToPound = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInPound = valueInEuro * 0.8;
    // retornamos el valor
    return Number(valueInPound.toFixed(1));
}

const sum= (a,b)=> {
    return a + b;
}

console.log(sum(7,3));
console.log(fromYenToPound(3.5));

module.exports ={sum, fromEuroToDollar, fromDollarToYen,fromYenToPound };
