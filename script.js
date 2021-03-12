$(document).ready(function () {
	$('.nav__burger').click(function (event) {
		$('.nav__burger, .nav__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.nav__menu').click(function () {
		$('.nav__burger, .nav__menu').removeClass('active');
		$('body').removeClass('lock');
	});

	$(window).on('scroll', function () {
		scroll_pos = $(window).scrollTop() + $(window).height();
		element_pos = $('.skills__row').offset().top + $('.skills__row').height();
		if (scroll_pos > element_pos) {
			$('.circle__percent').addClass('act');

		}
		else {

			$('.circle__percent').addClass('act');
		}

	})
});
