function cut(){
	let bott = "";
	let top = $('#top').val(); //getting number of inch to cut from top from input field
	let totalCut = "";
	
	if(roughOpeningSize>0 && roughOpeningSize!==""){ //if RO field is not blank setting bottom cut as slab height - (ro-2)- top trim
		bott = (getHeight()-(roughOpeningSize-2))-top;
		let bottF = parseFloat(bott);
		bottF = new Fraction(bottF);
		bottF = bottF.toFraction(true);
		bottF = bottF.replace(" ", "-");
		
		$('#bottom').val(bottF); //displaying bottom cut number
	} else if (roughOpeningSize === 0) {
		bott = 0;
		$('#bottom').val(bott);
	} else { //if RO field is blank set bottom cut to 0
		bott = 0;
	}
		
	if($('#top').val()!== 0 && $('#top').val() !== ""){ //if top trim field is not blank setting totalCut value as bottom+top cuts
		totalCut = parseFloat(bott)+parseFloat(top); //changing string to int to prevent printing "NaN"
	} else {
		totalCut = bott+top;
	}
		
	warningBottom(bott, totalCut);
	warningTop(getHeight, totalCut, top);
	description(top, bott);
				
	bott = (bott*10)/3; //changing bottom cut number of inches to pixels
	top =  (top*10)/3;  //changing top cut number of inches to pixels
	cutAnimation(bott, top);

		
		

	
	let t = setTimeout(cut, 500);	
};