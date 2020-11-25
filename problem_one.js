function simpleArraySum(ar) {
    
    if(arguments.length > 1) {
        let arg1 = arguments[0];
        let arg2 = arguments[1];
        let total;
        let length = Array.isArray(arg1) ? arg2 : arg1;
        
        if(Array.isArray(arg1)) {
            for(let counter = 0; counter < length; counter++) {
                total =+ arg1[counter]
            }
        } else {
            for(let counter = 0; counter < length; counter++) {
                total =+ arg2[counter]
            }
        }
        
        return total;
    }
        
    return ar.reduce((acc, currentValue) => acc + currentValue)

}
