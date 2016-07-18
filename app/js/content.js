$(document).on('ready', function() {
	var winHeight = $(window).height(), 
     	docHeight = $(document).height(),
     	position, loadAd;

     	$(document).on('scroll', function (){ 
     		position = $(window).scrollTop(),
     		loadAd = $('#ad').offset();
     		
     		// This first if statment is if you want to start w/transparent. 
     		// If not, remove it, move the other if statements up and remove the trasnparent class from the html 
     		if (position > loadAd.top) { 
     			$('#ad').addClass('ad-active'); 

     		} else{
     			$('#ad').addClass('ad-active');
     		} 	
     	});

        document.getElementById('btnClose').addEventListener('click', function() {
            $('#ad').removeClass('ad-passive');
            $('#ad').addClass('ad-passive');
        }, false);

        
});
