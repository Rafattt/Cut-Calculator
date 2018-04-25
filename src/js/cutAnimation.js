const cutAnimation = (roSize, bott, top) => {

    document.getElementById('top-cut-draw').style.height = top+'px';
console.log("11111111111");
    let roughOpeningSize = roSize;
	if(roughOpeningSize>0 && roughOpeningSize !==""){
        document.getElementById('bottom-cut-draw').style.height = bott + 'px';
        document.getElementById('bottom-cut-draw').style.top = (359-bott) + 'px';
	} else if (roughOpeningSize === 0) {
        document.getElementById('bottom-cut-draw').style.height = bott+'px';
        document.getElementById('bottom-cut-draw').style.top = (359-bott) + 'px';
	}
		
	if(bott>0 && roughOpeningSize && roughOpeningSize !==""){
        document.getElementById('cut-text-bottom').style.display = 'block';
		let bottF = parseFloat((bott*3)/10);
		bottF = new Fraction(bottF);
		bottF = bottF.toFraction(true);
        bottF = bottF.replace(" ", "-");
        document.getElementById('cut-text-bottom').innerHTML = bottF;
	} else if (bott<=0 || bott ==""){
        document.getElementById('cut-text-bottom').style.display = 'none';
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

