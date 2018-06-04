const displaySlabSizeInch = (roSize) => { // displaying slub size in "final" field
    let slabSize = roSize -2;
    slabSize = convertToFraction(slabSize);
    document.getElementById("final").innerHTML = slabSize+'"';
    return slabSize;
}

const displaySlabSizeFeet = (data) => {

    let sizeinFeets = data;
    let feetInchArray = convertToFeets(sizeinFeets);
    if((variables.roughSize()-2) % 12 ===0){
        document.getElementById("final-feet").innerHTML = convertToFeets(data)/12+"'";
    } else if (variables.roughSize().indexOf('-')<0 && (variables.roughSize()-2) % 12 !==0){ //quick fix for inches instead of feet bug
        
        let feetToInch = convertToFraction((variables.roughSize()-2)/12).split('-');
        let feetToInchLast = feetToInch[1].split("/");
         //check if last number is 12
        while(feetToInchLast[1]/12 !==1){
            let findMultiply = 12/feetToInchLast[1];
            feetToInchLast[1]*=findMultiply;
            feetToInchLast[0]*=findMultiply;
        }
        console.log(feetToInchLast);
        document.getElementById("final-feet").innerHTML = feetInchArray[0] + "-";
        document.getElementById("final-feet-small1").innerHTML = feetToInchLast[0];
        document.getElementById("final-feet-small2").innerHTML = '/';
        document.getElementById("final-feet-small3").innerHTML = feetToInchLast[1];
        console.log("feetInchArray[1] "+feetInchArray[1]);
        console.log(feetToInchLast[1]);
        console.log(convertToFraction(variables.roughSize()/12));
    } else {

       

        document.getElementById("final-feet").innerHTML = feetInchArray[0] + "-"+feetInchArray[1];
        document.getElementById("final-feet-small1").innerHTML = feetInchArray[2];
        document.getElementById("final-feet-small2").innerHTML = '/';
        document.getElementById("final-feet-small3").innerHTML = feetInchArray[3];
        document.getElementById("final-feet-small4").innerHTML = '"';
    }
    
    
    
}

const resetSlabSizeinFeets = () => {
        document.getElementById("final-feet").innerHTML = '';
        document.getElementById("final-feet-small2").innerHTML = '';
        document.getElementById("final-feet-small1").innerHTML = '';
        document.getElementById("final-feet-small3").innerHTML = '';
        document.getElementById("final-feet-small4").innerHTML = '';
}
