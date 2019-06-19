function description(top, bott){
	if(top == 0 || top == ""){
		let frac = new Fraction(bott);
		frac = frac.toFraction(true);
		frac = frac.replace(" ", "-");
		$('#description').val('Cut top 0\", cut bottom '+frac+'\", Lock 36\"');
	} else {
		
		let frac = new Fraction(bott);
		frac = frac.toFraction(true);
		frac = frac.replace(" ", "-");
		let fracTop = new Fraction(top);
		fracTop = fracTop.toFraction(true);
		fracTop = fracTop.replace(" ", "-");
		$('#description').val('Cut top '+fracTop+'\", cut bottom '+frac+'\", Lock 36\"');
	}
}