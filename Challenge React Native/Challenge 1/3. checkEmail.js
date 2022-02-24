function checkEmail(email){
    let regex = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    if (String(email).search (regex) != -1){
        return "VALID"
    } else if (typeof email === "object" || typeof email === "number"){
        return "Error: Invalid data type";
    } else if (!email){
        return "Error: No parameter included";
    } else {
        return "INVALID"
    }
}

// expected result
console.log(checkEmail('apranata@binar.co.id')) // valid
console.log(checkEmail('apranata@binar.com')) // valid
console.log(checkEmail('apranata@binar')) // invalid
console.log(checkEmail('apranata')) // invalid
console.log(checkEmail(3322)) // error
console.log(checkEmail()) // error parameter kosong