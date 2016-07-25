   $(document).ready(function() {

   	$(".remodal-trigger").click(function(){
   		var a = $(this).attr("href");
   		$(a).toggle()
   		
   	});
   	$(".cancel-button, .remodal").click(function(e){
   		$(".remodal").css("display", "none");
   	});

   	$(".remodal div").click(function(e){
   		e.stopPropagation();
   	});


   });