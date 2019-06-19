$(document).ready(function(){
	let controlNumber = 0;
	let slab = "";
	let roughOpeningSize = 0;

	function getHeight(){
		let heightTemp = 0;
		
		if($('#rough-size').val()>0 && $('#rough-size').val()!== ""){
			roughOpeningSize = $('#rough-size').val();
		} else {
			roughOpeningSize = 0;
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
		return height;
	};

	
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
	
	(function setHeight(){
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
	})();
	
	(function bottomCut(){
		let bott = "";
		let top = 0;
		let totalCut = "";
		
			top = $('#top').val();
			if($('#rough-size').val()!==0 && $('#rough-size').val()!==""){
				bott = (getHeight()-(roughOpeningSize-2))-top;
			} else {
				bott = 0;
			}
			
			if($('#rough-size').val()>0 && $('#rough-size').val() !==""){
				$('#bottom').val(bott);
			}
			
			
		
		
		
		if($('#top').val()!== 0 && $('#top').val() !== ""){
			totalCut = parseInt(bott)+parseInt(top);
		} else {
			totalCut = bott+top;
		}
		
		if(bott<=7 && bott !== 0 && bott !== ""){
			$('#warning-bottom').css('display','none');
			$('#final').val(getHeight()-(totalCut)+'\"');
			console.log(typeof(bott));
			
		}  else if (bott == 0 || bott == "") {
			$('#final').val("");
		}
		
		if(bott>7 && $('#rough-size').val()>0 && $('#rough-size').val() !==""){
			$('#warning-bottom').css('display','block');
			$('#final').val(getHeight()-(totalCut)+'\"');
		} else if(bott<7) {
			$('#warning-bottom').css('display','none');
		}
		
		if(top>3){
			
			$('#warning-top').css('display','block');
			$('#final').val(getHeight()-(totalCut)+'\"');
		} else {
			$('#warning-top').css('display','none');
		}
			if(top == 0 || top == ""){
				$('#description').html('Cut top 0\", cut bottom '+bott+'\" Lock 36\"');
			} else {
				$('#description').html('Cut top '+top+'\", cut bottom '+bott+'\" Lock 36\"');
			}
			
		
		
		
		bott = (bott*10)/3;
		top =  (top*10)/3;
		$('#top-cut-draw').css('height',top+'px');

		if($('#rough-size').val()>0 && $('#rough-size').val() !==""){
			$('#bottom-cut-draw').css('height',bott+'px');
			$('#bottom-cut-draw').css('top',359-bott);
		}
		
		if(bott>0 && $('#rough-size').val()>0 && $('#rough-size').val() !==""){
			$('#cut-text-bottom').css('display','block');
			$('#cut-text-bottom').html((bott*3)/10);
		} else if (bott<=0 || bott ==""){
			$('#cut-text-bottom').css('display','none');
		}
		
		if(top>0){
			$('#cut-text-top').css('display','block');
			$('#cut-text-top').html((top*3)/10);
		} else if (top<=0 || top ==""){
			$('#cut-text-top').css('display','none');
		}
		
		
			
			let t = setTimeout(bottomCut, 500);
			
			
		})();
	
	
	
	
});