function isValidPassword(password){
    const regex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/

    if(typeof password === "string"){
        res = regex.test(password)
        return res;
    } else if (
        typeof password === "object" || typeof password === "number") {
            return "Error: Invalid data type";            
    } else {
        return "Error: No parameter included";
    }
};



console.log(isValidPassword("Meong2021"));
console.log(isValidPassword("meong2021"));
console.log(isValidPassword("@eong"));
console.log(isValidPassword("Meong2"));
console.log(isValidPassword(0));
console.log(isValidPassword());