function cutAnimation(bott, top){
	$('#top-cut-draw').css('height',top+'px');

	if(roughOpeningSize>0 && roughOpeningSize !==""){
		$('#bottom-cut-draw').css('height',bott+'px');
		$('#bottom-cut-draw').css('top',359-bott);
	} else if (roughOpeningSize === 0) {
		$('#bottom-cut-draw').css('height',bott+'px');
		$('#bottom-cut-draw').css('top',359-bott);
	}
		
	if(bott>0 && roughOpeningSize && roughOpeningSize !==""){
		$('#cut-text-bottom').css('display','block');
		let bottF = parseFloat((bott*3)/10);
		bottF = new Fraction(bottF);
		bottF = bottF.toFraction(true);
		bottF = bottF.replace(" ", "-");
		$('#cut-text-bottom').html(bottF);
	} else if (bott<=0 || bott ==""){
		$('#cut-text-bottom').css('display','none');
	}
		
	if(top>0){
		$('#cut-text-top').css('display','block');
		let topF = parseFloat((top*3)/10);
		topF = new Fraction(topF);
		topF = topF.toFraction(true);
		topF = topF.replace(" ", "-");
		$('#cut-text-top').html(topF);
	} else if (top<=0 || top ==""){
		$('#cut-text-top').css('display','none');
	}
}