AOS.init({
	duration: 1200,
});

if ($(window).width() <= 768) {
	$('.navbar-nav li a').on("click", function () {
		$('.navbar-nav').hide();
	});

	$('.navbar-toggler').on("click", function () {
		$('.navbar-nav').show();
	});
}

// sideToggle
function myFunction(x) {
	x.classList.toggle("change");
	$(".nav-items").animate({ width: 'toggle' }, 450);
}

// overlay toogle in navber

$(document).ready(function () {
	/**
	 * toggle menu overlay when pressing: menu button, close button or any link in the menu.
	 */
	$(".overlay-menu-close, .menu-button, .overlay-menu-content a").on("click", function () {
		$(".overlay-menu").toggleClass("overlay-menu-show");
	});

});

//products slider
var mySwiper = new Swiper('.swiper-container', {
	speed: 400,
	initialSlide: 0,
	//truewrapper adoptsheight of active slide
	autoHeight: false,
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	// delay between transitions in ms
	autoplay: 6000,
	autoplayStopOnLast: false, // loop false also
	// If we need pagination
	pagination: '.swiper-pagination',
	paginationType: "bullets",
	// Navigation arrows
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',

	// And if we need scrollbar
	//scrollbar: '.swiper-scrollbar',
	// "slide", "fade", "cube", "coverflow" or "flip"
	effect: 'slide',
	// Distance between slides in px.
	spaceBetween: 0,
	//
	slidesPerView: 2,
	//
	centeredSlides: true,
	//
	slidesOffsetBefore: 0,
	//
	grabCursor: true,
})

//-slides
// tabs

var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function (el) {
	el.addEventListener("click", openTabs);
});


function openTabs(el) {
	var btnTarget = el.currentTarget;
	var country = btnTarget.dataset.country;

	tabContent.forEach(function (el) {
		el.classList.remove("active");
	});

	tabLinks.forEach(function (el) {
		el.classList.remove("active");
	});

	document.querySelector("#" + country).classList.add("active");

	btnTarget.classList.add("active");
}
//-slide services

(function ($) {

	/*
	 * JS Class for Tabbed view 
	 */
	var CDTabs = function (elem, options) {
		this.elem = elem;
		this.options = options;
	};

	CDTabs.prototype =
	{
		/*
		 * Prepare the markup for tabed view
		 */
		initMarkup: function () {

			/*
			 * Add mobile navigation reference
			 */

			var $select = $("<select/>", { class: "res-nav" });

			$(".cd-tab", this.elem).each(function (idx, el) {

				$('<option/>', {
					value: $(el).text(),
					text: $(el).text(),
				}).appendTo($select);

			});

			$select.insertAfter(".cd-nav", this.elem);

			// Select default Tab configured by options
			if (this.options && this.options.defaultTabIndex) {
				this.selectTab(this.options.defaultTabIndex - 1); // Convert to 0 based index
			} else {
				// Select first tab
				this.selectTab(0);
			}

		},

		/*
		 * Bind the events for navigation
		 */
		registerEvents: function () {
			var thisCache = this;

			$(this.elem).on("click", ".cd-tab", function (ev) {

				var curIndex = $(this).index();

				thisCache.selectTab(curIndex);

			});

			$(".res-nav", this.elem).on("change", function (ev) {

				var curIndex = $("option:selected", this).index();

				thisCache.selectTab(curIndex);

			});

		},
		/*
		 * Select a tab by it's index (zero based index)
		*/
		selectTab: function (index) {
			$(".cd-tab", this.elem).removeClass("selected");
			$(".pane", this.elem).removeClass("selected");

			$(".cd-tab", this.elem).eq(index).addClass("selected");
			$(".pane", this.elem).eq(index).addClass("selected");

			$(".res-nav option", this.elem).prop("selected", false);
			$(".res-nav option", this.elem).eq(index).prop("selected", true);
		}
	};

	/*
	 * jQuery Plugin
	 * Convert the Class in jQuery plugin
	 */
	$.fn.cdtabs = function (options) {
		var thistab = new CDTabs(this, options);

		thistab.initMarkup();
		thistab.registerEvents();

		$(this).data("cdtabs", thistab);

	};

})(jQuery);

$(document).ready(function () {
	$("#mytabdemo").cdtabs({
		defaultTabIndex: 1
	});
});


// slides for partners

$('.multi-item-carousel').on('slide.bs.carousel', function (e) {
	let $e = $(e.relatedTarget),
		itemsPerSlide = 3,
		totalItems = $('.carousel-item', this).length,
		$itemsContainer = $('.carousel-inner', this),
		it = itemsPerSlide - (totalItems - $e.index());
	if (it > 0) {
		for (var i = 0; i < it; i++) {
			$('.carousel-item', this).eq(e.direction == "left" ? i : 0).
				// append slides to the end/beginning
				appendTo($itemsContainer);
		}
	}
});