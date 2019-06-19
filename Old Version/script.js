/*
Darpet Cut Calculator 1.1
Author: Rafal Kmiecik 
rafalkmiecik@gmail.com
*/
let roughOpeningSize = 0;
function getHeight(){ //getting height (in inches) of rough opening and choosing slab height to cut (one size bigger than RO sizes)
		let heightTemp = 0;
		if($('#rough-size').val()>0 && $('#rough-size').val()!== ""){
			$("#sub").click(function() {
				roughOpeningSize = $('#rough-size').val();
				
			});
			$("#rough-size").keyup(function(event){
				if(event.keyCode == 13){
			$("#sub").click();
				}
			});
		} else {
			
		}
		
		slab = roughOpeningSize - 2;
		if(slab<=80){
			heightTemp = 80;
		} else if(slab<=84) {
			heightTemp = 84;
		} else if (slab<=96){
			heightTemp = 96;
		} 
		const height = heightTemp;
		let t = setTimeout(getHeight, 1000);
		console.log("test");
		return height;
	};
	


$(document).ready(function(){
	let slab = "";
	checkbox(); //checkbox toggle top trim field active/inactive
	setHeight();
	cut();
	
	
	function setHeight(){ //changing height of door drawing when user enter RO
		if(getHeight() === 80){
			$('#door').css('height','267px');
			$('#door-height').css('height','267px');
			$('#door-height').css('top','92px');
			$('#door').css('margin-top','93px');
			$('#actual').val(80);
			$('#height-center').html('6\'-8\"');
		} else if (getHeight() === 84){
			$('#door').css('height','280px');
			$('#door-height').css('height','280px');
			$('#door-height').css('top','79px');
			$('#door').css('margin-top','80px');
			$('#actual').val(84);
			$('#height-center').html('7\'-0\"');
		} else if (getHeight() === 96){
			$('#door').css('height','320px');
			$('#door-height').css('height','320px');
			$('#door-height').css('top','39px');
			$('#door').css('margin-top','40px');
			$('#actual').val(96);
			$('#height-center').html('8\'-0\"');
		}
		let t = setTimeout(setHeight, 500);
	};
	


$("#copy-button").click(function() {
	copy();
				
});
	
});