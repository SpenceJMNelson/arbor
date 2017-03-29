$( document ).ready(function() {
    $( ".branch" ).append('<div class="leaf"></div><div class="seed"></div><div class="flower"></div>');
    

});


$( document ).ready(function() {
    $('#explore-button').click(function(){
    	$(this).addClass('active').siblings('.active').removeClass('active');
    	$('.explore-view').addClass('active').siblings('.active').removeClass('active');
	});

	$('#play-button').click(function(){
    	$(this).addClass('active').siblings('.active').removeClass('active');
    	$('.play-view').addClass('active').siblings('.active').removeClass('active');
	});

	$('#think-button').click(function(){
		$(this).addClass('active').siblings('.active').removeClass('active');
    	$('.think-view').addClass('active').siblings('.active').removeClass('active');
	});

});

