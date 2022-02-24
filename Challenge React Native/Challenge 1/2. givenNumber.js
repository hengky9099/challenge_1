function checkTypeNumber(givenNumber){
    if(typeof givenNumber === "number"){
        if(givenNumber % 2 === 0){
            return "genap";
        } else if(givenNumber % 2 != 0){
            return "ganjil"
        }
    } else if(typeof givenNumber === "object" || typeof givenNumber === "string") {
        return "Error: Invalid data type";
    } else {
        return "Error: Bro where is the parameter?"
    }

}

// expected result
console.log(checkTypeNumber(10)) // genap
console.log(checkTypeNumber(3)) // ganjil
console.log(checkTypeNumber('3')) // error: invalid data type
console.log(checkTypeNumber({})) // error: invalid data type
console.log(checkTypeNumber([])) // error: invalid data type
console.log(checkTypeNumber()) // error: no parameter