function convertToFeets(data){

    let splitedNumber = data.split("-");
    splitedNumberInch = splitedNumber[1].split("/");
    splitedNumberInch[0] = parseFloat(splitedNumberInch[0]);
    splitedNumberInch[1] = parseFloat(splitedNumberInch[1])/12;
    
    console.log("splited "+splitedNumberInch);
    function calculateInches(firstPart, secondPart){
    
        if(firstPart>=secondPart){
            wholeInch = firstPart / secondPart;	
        }
    
        return convertToFraction(wholeInch);
    }
    calculateInches(splitedNumberInch[0],splitedNumberInch[1]);
    
    splitedNumber[1] = calculateInches(splitedNumberInch[0],splitedNumberInch[1]);
    let splitedNumberOneSplit = splitedNumber[1].split("-");
    splitedNumber[1] = splitedNumberOneSplit[0];
    let lastNumbersSmall = splitedNumberOneSplit[1].split("/");
    splitedNumber[0] = splitedNumber[0]+"'";
    let smallNumbersText = lastNumbersSmall[0]+"/"+lastNumbersSmall[1]+'"';

}

