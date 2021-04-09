(function($){
    $.fn.extend({
		showroomNavifollow:function() {
			var _this = $(this);
			$(window).load(function() {
				ScrollPoint = _this.find('#').height();
				$('.carspec-area a').click(function() {
					var ScrollCu = $($(this).attr('href')).offset().top;
					$('html, body').animate({scrollTop:ScrollCu-ScrollPoint},{duration:500, easing:'easeInOutQuart'})
					return false;
				});
			})
		},
        showroomContentscontrol:function() {
            var _this = $(this);    
            _this.showroomNavifollow();
        }
    })
    
})
(jQuery);

$(document).ready(function() {
		$('#showroom-container').showroomContentscontrol();
});