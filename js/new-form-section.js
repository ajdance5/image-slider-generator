   $(document).ready(function() {
		
			/*function captionText() {
				if ($('.caption-check').prop('checked') == true) {
					
					$('.caption-text').show();
					}		

				else {	
						$('.caption-text').hide();
					}*/
				
			}

			function newSlide() {
				$(".slide-show svg, slide-show-inputs svg").click(function(){
					
							$(this).toggle();
							$(this).parent().find('.slide-show-image').css("width", "100%");
							newSlide();
							captionText();

						/*$('.caption-check').click(function() {
					
							if ($(this).prop('checked') == true) {
									
									$(this).parent().find('.caption-text').show();
							}		

							else {	
									$(this).parent().find('.caption-text').hide();
								}
						});*/
				});
			}

	
		newSlide();
		captionText();


		/*$('.caption-check').click(function() {
	
			if ($(this).prop('checked') == true) {
					
					$(this).parent().find('.caption-text').show();
			}		

			else {	
					$(this).parent().find('.caption-text').hide();
				}
		});*/



	});