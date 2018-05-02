const sizeConvertion = {
    convert: convertFunction = (number) => {
        let splitedNumber = number.split("-");
        let fractionConvert = 0;
       
        for(i = 0; i < splitedNumber.length; i++){
            if(checkIfFraction(splitedNumber[i])){
                let fractionNumbers = splitedNumber[i].split("/");
                splitedNumber[i] = fractionNumbers[0]/fractionNumbers[1];
            }
        }
        fractionConvert = parseFloat((splitedNumber[0]))+
            parseFloat(splitedNumber[1]);
            return fractionConvert;
    },
    
}

const checkIfFraction = (arra) => {
    if(arra.indexOf("/")>0){
        return true;
    } else {
        return false;
    }
}
