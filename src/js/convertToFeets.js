const convertToFeets = (data) => {

    let splitedNumber = data.split("-");
    splitedNumberInch = splitedNumber[1].split("/");
    splitedNumberInch[0] = parseFloat(splitedNumberInch[0]);
    splitedNumberInch[1] = parseFloat(splitedNumberInch[1])/12;
    
    function calculateInches(firstPart, secondPart){
        let wholeInch = "";

        if(firstPart>=secondPart){
            wholeInch = firstPart / secondPart;
        }
        console.log(convertToFraction(wholeInch));
        return convertToFraction(wholeInch);
    }
    calculateInches(splitedNumberInch[0],splitedNumberInch[1]);
    
    splitedNumber[1] = calculateInches(splitedNumberInch[0],splitedNumberInch[1]);
    let splitedNumberOneSplit = splitedNumber[1].split("-");
    splitedNumber[1] = splitedNumberOneSplit[0];
    let lastNumbersSmall = splitedNumberOneSplit[1].split("/");
    splitedNumber[0] = splitedNumber[0]+"'";
    let smallNumbersText = lastNumbersSmall[0]+"/"+lastNumbersSmall[1]+'"';
    let feetInchArray = [splitedNumber[0],splitedNumber[1],
    lastNumbersSmall[0],lastNumbersSmall[1]];

    return feetInchArray;
}

