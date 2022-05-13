function validarArray(aArray, aNumber){
    try {
        if(!aArray && !aNumber) throw new ReferenceError("Envie os parâmetros")
        if(aArray !== 'object') throw new TypeError("Envie um array do tipo objeto")
        if(aNumber !== 'number') throw new TypeError("Envie um número do tipo Number")
        if(aArray.length !== aNumber) throw new RangeError("Número diferente do tamanho do Array")

        return aArray;
    } catch (error) {
        if(error instanceof ReferenceError){
            console.log("Este erro é um ReferenceError")
            //throw error;
            console.log(error.message)
        } else if(error instanceof TypeError){
            console.log("Este erro é um TypeError");
            console.log(error.message);
        } else if(error instanceof RangeError){
            console.log("Este erro é um RangeError");
            console.log(error.message);
        } else{
            console.log("Tipo de erro não esperado:" + error);
        }
    }

}


console.log(validarArray())