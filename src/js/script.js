/*
Darpet Cut Calculator 1.1
Author: Rafal Kmiecik 
rafalkmiecik@gmail.com
*/
"use strict";

let variables = {
	roughOpeningSize: 0,
	roughSize: () =>  document.getElementById("rough-size").value, //geting value from input field 
	roughSizeValue: ()  =>  parseFloat(document.getElementById("rough-size").value),//geting value from input field and converting it to floats

	submitButton: document.getElementById("sub"),
	slab: 0, //default height of slab
	getSlabHeight: () => {
		let heightTemp = 0;
		let roughOpeningSize = 0;
		if(parseFloat(document.getElementById("rough-size").value)>0 && document.getElementById("rough-size").value !==""){
			roughOpeningSize = parseFloat(document.getElementById("rough-size").value);
		} else {
			
		}
		let slab = roughOpeningSize - 2;
		if(slab<=80){
			heightTemp = 80;
		} else if(slab<=84) {
			heightTemp = 84;
		} else if (slab<=96){
			heightTemp = 96;
		} 
		const height = heightTemp;
		console.log("test");
		return height;
	}
	
}

let app = {
	clickByEnter: () => { //function that allows using "enter" key instead of submit button
		document.getElementById("rough-size")
    		.addEventListener("keyup", function(event) {
    		event.preventDefault();
    	if (event.keyCode === 13) {
        	document.getElementById("sub").click();
    	}
		});
	},
	getHeight: () => {//getting height (in inches) of rough opening and choosing slab height to cut (one size bigger than RO sizes)
		document.getElementById("sub").onclick = () => { //starts when user clicks on submit button
			let roughOpeningSize = variables.roughOpeningSize;
			variables.roughSizeValue = parseFloat(document.getElementById("rough-size").value);
			if(variables.roughSize !==0 && variables.roughSize !== "" && variables.roughSize().indexOf("-")>0){ //checks if user typed somethng into "#rough-size" field
				roughOpeningSize = sizeConvertion.convert(variables.roughSize()); //converting "0-0" format to "0.0" format
				//showSizeinFeets(); //function calculate inches to feet -inch
			} else if(variables.roughSize().indexOf("-")<0) {
				roughOpeningSize = variables.roughSizeValue;
			} else {
				
			}
			
			app.displaySlabSize(roughOpeningSize);
			app.displaySlabSizeInFeets(roughOpeningSize);
			app.setSlabHeight(roughOpeningSize);
			app.cutCalculator(roughOpeningSize);

			return roughOpeningSize;
		}	
	},
	displaySlabSize: (roSize) => {
			displaySlabSizeInch(roSize);
	},
	displaySlabSizeInFeets: (roSize) => {
		showSizeinFeets(roSize);
	},
	setSlabHeight: () => {
		let roSize = variables.getSlabHeight();

		console.log(roSize);
		if(roSize === 80){
			document.getElementById('door').style.height = '267px';
			document.getElementById('door-height').style.height = '267px';
			document.getElementById('door-height').style.top = '92px';
			document.getElementById('door').style.marginTop = '93px';
			document.getElementById('height-center').innerHTML = ('6\'-8\"');
			
		} else if (roSize === 84){
			document.getElementById('door').style.height = '280px';
			document.getElementById('door-height').style.height = '280px';
			document.getElementById('door-height').style.top = '79px';
			document.getElementById('door').style.marginTop = '80px';
			document.getElementById('height-center').innerHTML = ('7\'-0\"');
		} else if (roSize === 96){
			document.getElementById('door').style.height = '320px';
			document.getElementById('door-height').style.height = '320px';
			document.getElementById('door-height').style.top = '39px';
			document.getElementById('door').style.marginTop = '40px';
			document.getElementById('height-center').innerHTML = ('8\'-0\"');
		}
	
		
	},
	cutCalculator: (roughOpeningSize) => {
		let bott = "";
		let top = $('#top').val(); //getting number of inch to cut from top from input field
		let totalCut = "";
		
		if(roughOpeningSize>0 && roughOpeningSize!==""){ //if RO field is not blank setting bottom cut as slab height - (ro-2)- top trim
			bott = (variables.getSlabHeight()-(roughOpeningSize-2))-top;
			let bottF = parseFloat(bott);
			bottF = new Fraction(bottF);
			bottF = bottF.toFraction(true);
			bottF = bottF.replace(" ", "-");
			
			document.getElementById('bottom').value = bottF;
			
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
			
					
		bott = (bott*10)/3; //changing bottom cut number of inches to pixels
		top =  (top*10)/3;  //changing top cut number of inches to pixels
		cutAnimation(roughOpeningSize, bott, top);
	},
	checkbox:  () => {
		let controlNumber = 0;
		$('#checkBox').click(function(event){
		if(controlNumber === 0){
			$('#top').css('background-color','white');
			$('#top').css('pointer-events', 'auto');
			controlNumber = 1;
		} else {
			$('#top').css('background-color','lightgrey');
			$('#top').css('pointer-events', 'none');
			$('#top').val(0);
			controlNumber = 0;
		}
	});
	}
}

app.clickByEnter();
app.getHeight();
app.checkbox();



