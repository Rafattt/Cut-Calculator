 warningBottom = (bott, totalCut) =>{
	if(bott<=7 && bott !== 0 && bott !== ""){
        document.getElementById('warning-bottom').style.display = 'none;'
		let finFrac = new Fraction(getHeight()-(totalCut));	
		finFrac = finFrac.toFraction(true);
        finFrac = finFrac.replace(" ", "-");
        document.getElementById('final').value = finFrac+'\"';	
		let net = convert($('#rough-size').val());
		net = parseFloat(net);
		net = net -0.25;
		
		let frac = new Fraction(net);	
		frac = frac.toFraction(true);
		frac = frac.replace(" ", "-");
		$('#net-frame').val(frac+'\"');
		
	} else if (bott == 0 || bott == "") {
		$('#final').val("");
	}
			
	if(bott>7 && convert($('#rough-size').val())>0 &&convert($('#rough-size').val()) !==""){
		$('#warning-bottom').css('display','block');
		let finFrac = new Fraction(getHeight()-(totalCut));
		finFrac = finFrac.toFraction(true);
		finFrac = finFrac.replace(" ", "-");	
		$('#final').val(finFrac+'\"');
		let net = convert($('#rough-size').val());
		net = parseFloat(net);
		net = net -0.25;
		
		let frac = new Fraction(net);		
		frac = frac.toFraction(true);
		frac = frac.replace(" ", "-");
		$('#net-frame').val(frac+'\"');
	} else if(bott<7) {
		$('#warning-bottom').css('display','none');
	}
	
		
}