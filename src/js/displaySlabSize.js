function displaySlabSizeInch(roSize){ // displaying slub size in "final" field
    let slabSize = roSize -2;
    slabSize = convertToFraction(slabSize);
    document.getElementById("final").innerHTML = slabSize+'"';
}
