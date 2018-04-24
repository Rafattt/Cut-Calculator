const convertToFeets = (data) => {
    console.log(data);

    if((variables.roughSize()-2) % 12 ===0){// checks if data is integer
        let size = parseFloat(variables.roughSize())-2;
        return size;
    } else if((variables.roughSize()-2) % 12 !==0 &&variables.roughSize().indexOf("-")>0){
        let splitedNumber = data.split("-"); //splitting rough opening text data into feets and inches
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
        console.log(data);
        let splitedNumber = data.split("-"); //splitting rough opening text data into feets and inches
        console.log(splitedNumber[0] + " "+splitedNumber[1]);
        let splitedNumberInch = splitedNumber[1].split("/");
        let feetInchArray = [splitedNumber[0],"",
        splitedNumberInch[0],splitedNumberInch[1]];
        return feetInchArray;
    }

   
    
    

    //calculateInches(splitedNumberInch[0],splitedNumberInch[1]);
    if(data.indexOf("-")>0){
        console.log("YES");
    }
    

    function calculateInches(firstPart, secondPart){
        let wholeInch = "";

        if(firstPart>=secondPart){
            wholeInch = firstPart / secondPart;
        } else {
            wholeInch = firstPart + "/" + secondPart;
            console.log(wholeInch);
            return wholeInch; 
        }

        return convertToFraction(wholeInch);
    }
}

