function showSizeinFeets(roSize){ //displaying slab size in feets
    let netFeet = roSize;
	netFeet = parseFloat(netFeet)-2; //converting string to float and substracts 2 inches (slab is 2 inches smaller than RO)
	netFeet = netFeet/12; //converting inches to feets

	let fracFeet = convertToFraction(netFeet);
	// TO WYZEJ


		
/*if(variables.roughSize().indexOf("-")>0){
	app.displaySlabSizeInFeets(roughOpeningSize);
}*/
		//spliting to feet and inches
		
		
		displaySlabSizeFeet(fracFeet);

        
}