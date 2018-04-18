function showSizeinFeets(roSize){ //displaying slab size in feets
    let netFeet = roSize;
	netFeet = parseFloat(netFeet)-2;
	netFeet = netFeet/12;
	console.log(netFeet);
	let fracFeet = convertToFraction(netFeet);
console.log(fracFeet);
		
/*if(variables.roughSize().indexOf("-")>0){
	app.displaySlabSizeInFeets(roughOpeningSize);
}*/
		//spliting to feet and inches
		let splitedNumber = fracFeet.split("-");
		splitedNumberInch = splitedNumber[1].split("/");
		splitedNumberInch[0] = parseFloat(splitedNumberInch[0]);
		splitedNumberInch[1] = parseFloat(splitedNumberInch[1])/12;


		function calculateInches(firstPart, secondPart){
			let wholeInch = "";

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
	
        if(netFeet>0){
			document.getElementById("final-feet").innerHTML = splitedNumber[0] + "-"+splitedNumber[1];
			document.getElementById("final-feet-small1").innerHTML = lastNumbersSmall[0];
			document.getElementById("final-feet-small2").innerHTML = '/';
			document.getElementById("final-feet-small3").innerHTML = lastNumbersSmall[1];
			document.getElementById("final-feet-small4").innerHTML = '"';
			console.log("lastNumbersSmall[1] "+lastNumbersSmall[1]);
			
		}else if(netFeet<=0){
			document.getElementById("final-feet").innerHTML = '6-8"';
		}
}