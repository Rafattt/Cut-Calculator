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
    } else if (variables.roughSize().indexOf('-')<0 && (variables.roughSize()-2) % 12 ===0){
        document.getElementById("final-feet").innerHTML = convertToFraction(variables.roughSize()/12);
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
