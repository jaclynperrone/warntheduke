$(function(){

	$('.press-nav li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');

		var selectedPress = $('.active a').attr('rel');
		
		if (selectedPress == 'interviews') {
			$('#reviews').fadeOut('fast', function(){
				$('#' + selectedPress).fadeIn();
			});
		} else {
			$('#interviews').fadeOut('fast', function(){
				$('#' + selectedPress).fadeIn();
			});
		}
	});

});