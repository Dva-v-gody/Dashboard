(function ($) {
	$(function () {
		new DataTable('#customers', {
			responsive: true,
			ordering: false,
			lengthMenu: [8],
			language: {
				searchPlaceholder: "Search"
			},
		});
	});

	$(document).on('click', '.burger-wrap', function () {
		$('.burger')
			.toggleClass('opened')
			.parent()
			.siblings('.menu_wrap')
			.toggleClass('active');

		$('.side').toggleClass('side--active');
	});

	$(document).on('click', '.dt-paging-button:not(.disabled)', function () {
		$('html, body').animate({ scrollTop: 0 }, 800);
	});
})(jQuery);
