const strToNum = str =>{
    if(str * 1 === typeof(Number)){
    return str * 1
    } else {
        return "String have invalid character"
    }
}

console.log(strToNum(''))