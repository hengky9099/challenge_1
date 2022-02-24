function getAngkaTerbesarKedua(angka){
    let noDuplicate = [...new Set(angka)]
    return noDuplicate[noDuplicate.sort().length - 2]
}

console.log(getAngkaTerbesarKedua([5,2,4,9,9,7,4,6,1]))