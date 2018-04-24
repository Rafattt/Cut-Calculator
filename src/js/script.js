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
	slabHeight: () => {//getting height (in inches) of rough opening and choosing slab height to cut (one size bigger than RO sizes)
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

			
			return roughOpeningSize;
		}	
	},
	displaySlabSize: (roSize) => {
			displaySlabSizeInch(roSize);
	},
	displaySlabSizeInFeets: (roSize) => {
		showSizeinFeets(roSize);
	}
}

app.clickByEnter();
app.slabHeight();


