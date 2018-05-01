 warningBottom = (bott, totalCut, roughOpeningSize) =>{
	
	if(bott<=7 && bott !== 0 && bott !== ""){
        document.getElementById('warning-bottom').style.display = 'none;'
	}
			
	if(bott>7 && roughOpeningSize>0 && roughOpeningSize !==""){
		document.getElementById('warning-bottom').style.display = 'block';
	} else if(bott<7) {
		document.getElementById('warning-bottom').style.display = 'none';
	}
			
}