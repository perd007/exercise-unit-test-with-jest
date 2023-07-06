const {sum, fromEuroToDollar, fromDollarToYen,fromYenToPound }= require("./app.js");

test("adds 14 +9 to equal 23", ()=>{

    let total=sum(14,9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
   
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One euro should be 127.9 yen", function(){
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(1)).toBe(127.9); //1 euro son 127.9 Yen, entonces 3.5 euros deberian ser = (3.5 * 127.9)
})
test("One euro should be 0.8 pound", function(){
   
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(1)).toBe(0.8); //1 euro son 0.8 pound, entonces 3.5 euros deberian ser = (3.5 * 0.8)
})