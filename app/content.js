$(document).on('ready', function() {
	var winHeight = $(window).height(), 
     	docHeight = $(document).height(),
     	position, loadAd;

     	$(document).on('scroll', function (){ 
     		position = $(window).scrollTop(),
     		
     		// Copy this everytime you want a new transition and change the var/id name.
     		loadAd = $('#ad').offset(),
     		
     		// This first if statment is if you want to start w/transparent. 
     		// If not, remove it, move the other if statements up and remove the trasnparent class from the html 
     		if (position > loadAd.top) { 
     			$('#ad').addClass('ad-active'); 

     		} else{
     			
     		} 	
     	});
});
