function checkbox(){
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