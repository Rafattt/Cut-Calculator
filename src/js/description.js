 const description = (top, bott) => {
	if(top == 0 || top == ""){
        let frac = convertToFraction(bott);
        document.getElementById('description').value = 'Cut top 0\", cut bottom '+frac+'\", Lock 36\"';
	} else {
		let frac = convertToFraction(bott);
        let fracTop = convertToFraction(top);
        document.getElementById('description').value = 'Cut top '+fracTop+'\", cut bottom '+frac+'\", Lock 36\"';
	}
}