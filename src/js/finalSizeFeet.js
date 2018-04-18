function showSizeinFeets(roSize){ //displaying slab size in feets
    let netFeet = roSize;
	netFeet = parseFloat(netFeet)-2; //converting string to float and substracts 2 inches (slab is 2 inches smaller than RO)
	netFeet = netFeet/12; //converting from inches to feets
	let fracFeet = convertToFraction(netFeet);
	console.log(fracFeet);
		
/*if(variables.roughSize().indexOf("-")>0){
	app.displaySlabSizeInFeets(roughOpeningSize);
}*/
		//spliting to feet and inches
		let feetInchArray = convertToFeets(fracFeet);

		if(variables.roughSize().indexOf("-")>0){
			app.displaySlabSizeInFeets(roughOpeningSize);
		}
		

        if(netFeet>0){
			document.getElementById("final-feet").innerHTML = feetInchArray[0] + "-"+feetInchArray[1];
			document.getElementById("final-feet-small1").innerHTML = feetInchArray[2];
			document.getElementById("final-feet-small2").innerHTML = '/';
			document.getElementById("final-feet-small3").innerHTML = feetInchArray[3];
			document.getElementById("final-feet-small4").innerHTML = '"';

			
		}else if(netFeet<=0){
			document.getElementById("final-feet").innerHTML = '6-8"';
		}
}