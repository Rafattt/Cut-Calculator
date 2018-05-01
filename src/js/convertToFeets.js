const convertToFeets = (data) => {

    const calculateInches = (firstPart, secondPart) => {
        let wholeInch = "";

        if(firstPart>=secondPart){
            wholeInch = firstPart / secondPart;
        } else {
            wholeInch = firstPart + "/" + secondPart;
            
            return wholeInch; 
        }

        return convertToFraction(wholeInch);
    }

    let splitedNumber = data.split("-"); //splitting rough opening text data into feets and inches
    let firstNumber = variables.roughSize().split("-");//getting first number from RO field
    firstNumber = firstNumber[0];

    if((firstNumber-2) % 12 === 0 && (variables.roughSize()-2) % 12 !==0){
        let splitedNumber = data.split("-"); //splitting rough opening text data into feets and inches
        let splitedNumberInch = splitedNumber[1].split("/");
        let feetInchArray = [splitedNumber[0],"",
        splitedNumberInch[0],splitedNumberInch[1]/12];
        return feetInchArray;
    }else if((variables.roughSize()-2) % 12 ===0){// checks if data is integer
        resetSlabSizeinFeets();
        let size = parseFloat(variables.roughSize())-2;
        return size;
    } else if((variables.roughSize()-2) % 12 !==0 &&variables.roughSize().indexOf("-")>0){
       
        splitedNumberInch = splitedNumber[1].split("/");
        splitedNumberInch[0] = parseFloat(splitedNumberInch[0]);
        splitedNumberInch[1] = parseFloat(splitedNumberInch[1])/12;

        splitedNumber[1] = calculateInches(splitedNumberInch[0],splitedNumberInch[1]);
        let splitedNumberOneSplit = splitedNumber[1].split("-");
        splitedNumber[1] = splitedNumberOneSplit[0];
        let lastNumbersSmall = splitedNumberOneSplit[1].split("/");
        splitedNumber[0] = splitedNumber[0]+"'";
        let smallNumbersText = lastNumbersSmall[0]+"/"+lastNumbersSmall[1]+'"';
        let feetInchArray = [splitedNumber[0],splitedNumber[1],
        lastNumbersSmall[0],lastNumbersSmall[1]];

        return feetInchArray;
    } else if((variables.roughSize()-2) % 12 !==0 && variables.roughSize().indexOf("-")<0){
        let splitedNumber = data.split("-"); //splitting rough opening text data into feets and inches
        let splitedNumberInch = splitedNumber[1].split("/");
        let feetInchArray = [splitedNumber[0],"",
        splitedNumberInch[0],splitedNumberInch[1]];
        return feetInchArray;
    }
    

   
}

