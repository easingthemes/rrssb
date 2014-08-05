/*
 Ridiculously Responsive Social Sharing Buttons
 Team: @dbox, @seagoat
 Site: http://www.kurtnoble.com/labs/rrssb
 Twitter: @therealkni

        ___           ___
       /__/|         /__/\        ___
      |  |:|         \  \:\      /  /\
      |  |:|          \  \:\    /  /:/
    __|  |:|      _____\__\:\  /__/::\
   /__/\_|:|____ /__/::::::::\ \__\/\:\__
   \  \:\/:::::/ \  \:\~~\~~\/    \  \:\/\
    \  \::/~~~~   \  \:\  ~~~      \__\::/
     \  \:\        \  \:\          /__/:/
      \  \:\        \  \:\         \__\/
       \__\/         \__\/
*/


;(function(window, jQuery, undefined) {
	'use strict';

// start plugin function
$.fn.rrssb = function(options) {

    // 1. Set default options
    var settings = $.extend({
        title: 'Ridiculously Responsive Social Sharing Buttons by KNI Labs',
        description: 'It seemed like we were constantly making custom social sharing buttons for every single project, so we decided to create a super flexible system that would work in any container. SASS-powered, retina ready, and auto-magical resizing. A KNI Labs freebie.',
        image: 'http://kurtnoble.com/labs/rrssb/media/rrssb-preview.png',
        url: window.location.href,
        baseUrl: window.location.hostname,
        showPopup: true,
        showText: true,
        showIcon: true
    }, options);

    // 2. Create social networks api links
	var apiLinks = {
		email: 'mailto:?subject=Check%20out%20how%20ridiculously%20responsive%20these%20social%20buttons%20are&amp;body=http%3A%2F%2Fkurtnoble.com%2Flabs%2Frrssb%2Findex.html',
		facebook: 'https://www.facebook.com/sharer.php?u={url}',
		linkedin: 'https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}&summary={description}&source={baseUrl}',
	    twitter: 'https://twitter.com/intent/tweet?url={url}&text={description}',
	    googleplus: 'https://plus.google.com/share?url={url}',
	    pinterest: 'https://www.pinterest.com/pin/create/button/?media={image}&url={url}&description={description}',
	    github: 'https://github.com/kni-labs/rrssb'      
    };

    // Update links with user settings data
    var apiLink = function(website){
        var apiUrl = apiLinks[website];
        apiUrl = apiUrl.replace('{url}', encodeURIComponent(settings.url));
        apiUrl = apiUrl.replace('{title}', encodeURIComponent(settings.title));
        apiUrl = apiUrl.replace('{description}', encodeURIComponent(settings.description));
        apiUrl = apiUrl.replace('{image}', encodeURIComponent(settings.image));
        apiUrl = apiUrl.replace('{baseUrl}', encodeURIComponent(settings.baseUrl));
        return apiUrl;
    };

    // 3. Create button elements

	// Store icons
	var icons = {

		email: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="28px" height="28px" viewBox="0 0 28 28" enable-background="new 0 0 28 28" xml:space="preserve"><g><path d="M20.111 26.147c-2.336 1.051-4.361 1.401-7.125 1.401c-6.462 0-12.146-4.633-12.146-12.265 c0-7.94 5.762-14.833 14.561-14.833c6.853 0 11.8 4.7 11.8 11.252c0 5.684-3.194 9.265-7.399 9.3 c-1.829 0-3.153-0.934-3.347-2.997h-0.077c-1.208 1.986-2.96 2.997-5.023 2.997c-2.532 0-4.361-1.868-4.361-5.062 c0-4.749 3.504-9.071 9.111-9.071c1.713 0 3.7 0.4 4.6 0.973l-1.169 7.203c-0.388 2.298-0.116 3.3 1 3.4 c1.673 0 3.773-2.102 3.773-6.58c0-5.061-3.27-8.994-9.303-8.994c-5.957 0-11.175 4.673-11.175 12.1 c0 6.5 4.2 10.2 10 10.201c1.986 0 4.089-0.43 5.646-1.245L20.111 26.147z M16.646 10.1 c-0.311-0.078-0.701-0.155-1.207-0.155c-2.571 0-4.595 2.53-4.595 5.529c0 1.5 0.7 2.4 1.9 2.4 c1.441 0 2.959-1.828 3.311-4.087L16.646 10.068z"/></g></svg>',

	    linkedin: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="28px" viewBox="0 0 28 28" enable-background="new 0 0 28 28" xml:space="preserve"><path d="M25.424,15.887v8.447h-4.896v-7.882c0-1.979-0.709-3.331-2.48-3.331c-1.354,0-2.158,0.911-2.514,1.803 c-0.129,0.315-0.162,0.753-0.162,1.194v8.216h-4.899c0,0,0.066-13.349,0-14.731h4.899v2.088c-0.01,0.016-0.023,0.032-0.033,0.048 h0.033V11.69c0.65-1.002,1.812-2.435,4.414-2.435C23.008,9.254,25.424,11.361,25.424,15.887z M5.348,2.501 c-1.676,0-2.772,1.092-2.772,2.539c0,1.421,1.066,2.538,2.717,2.546h0.032c1.709,0,2.771-1.132,2.771-2.546 C8.054,3.593,7.019,2.501,5.343,2.501H5.348z M2.867,24.334h4.897V9.603H2.867V24.334z"/></svg>',

	    facebook: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="28px" viewBox="0 0 28 28" enable-background="new 0 0 28 28" xml:space="preserve"><path d="M27.825,4.783c0-2.427-2.182-4.608-4.608-4.608H4.783c-2.422,0-4.608,2.182-4.608,4.608v18.434 c0,2.427,2.181,4.608,4.608,4.608H14V17.379h-3.379v-4.608H14v-1.795c0-3.089,2.335-5.885,5.192-5.885h3.718v4.608h-3.726 c-0.408,0-0.884,0.492-0.884,1.236v1.836h4.609v4.608h-4.609v10.446h4.916c2.422,0,4.608-2.188,4.608-4.608V4.783z"/></svg>',

	    twitter: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="28px" viewBox="0 0 28 28" enable-background="new 0 0 28 28" xml:space="preserve"><path d="M24.253,8.756C24.689,17.08,18.297,24.182,9.97,24.62c-3.122,0.162-6.219-0.646-8.861-2.32 c2.703,0.179,5.376-0.648,7.508-2.321c-2.072-0.247-3.818-1.661-4.489-3.638c0.801,0.128,1.62,0.076,2.399-0.155 C4.045,15.72,2.215,13.6,2.115,11.077c0.688,0.275,1.426,0.407,2.168,0.386c-2.135-1.65-2.729-4.621-1.394-6.965 C5.575,7.816,9.54,9.84,13.803,10.071c-0.842-2.739,0.694-5.64,3.434-6.482c2.018-0.623,4.212,0.044,5.546,1.683 c1.186-0.213,2.318-0.662,3.329-1.317c-0.385,1.256-1.247,2.312-2.399,2.942c1.048-0.106,2.069-0.394,3.019-0.851 C26.275,7.229,25.39,8.196,24.253,8.756z"/></svg>',

	    googleplus: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="28px" viewBox="0 0 28 28" enable-background="new 0 0 28 28" xml:space="preserve"> <g> <g> <path d="M14.703,15.854l-1.219-0.948c-0.372-0.308-0.88-0.715-0.88-1.459c0-0.748,0.508-1.223,0.95-1.663 c1.42-1.119,2.839-2.309,2.839-4.817c0-2.58-1.621-3.937-2.399-4.581h2.097l2.202-1.383h-6.67c-1.83,0-4.467,0.433-6.398,2.027 C3.768,4.287,3.059,6.018,3.059,7.576c0,2.634,2.022,5.328,5.604,5.328c0.339,0,0.71-0.033,1.083-0.068 c-0.167,0.408-0.336,0.748-0.336,1.324c0,1.04,0.551,1.685,1.011,2.297c-1.524,0.104-4.37,0.273-6.467,1.562 c-1.998,1.188-2.605,2.916-2.605,4.137c0,2.512,2.358,4.84,7.289,4.84c5.822,0,8.904-3.223,8.904-6.41 c0.008-2.327-1.359-3.489-2.829-4.731H14.703z M10.269,11.951c-2.912,0-4.231-3.765-4.231-6.037c0-0.884,0.168-1.797,0.744-2.511 c0.543-0.679,1.489-1.12,2.372-1.12c2.807,0,4.256,3.798,4.256,6.242c0,0.612-0.067,1.694-0.845,2.478 c-0.537,0.55-1.438,0.948-2.295,0.951V11.951z M10.302,25.609c-3.621,0-5.957-1.732-5.957-4.142c0-2.408,2.165-3.223,2.911-3.492 c1.421-0.479,3.25-0.545,3.555-0.545c0.338,0,0.52,0,0.766,0.034c2.574,1.838,3.706,2.757,3.706,4.479 c-0.002,2.073-1.736,3.665-4.982,3.649L10.302,25.609z"/> <polygon points="23.254,11.89 23.254,8.521 21.569,8.521 21.569,11.89 18.202,11.89 18.202,13.604 21.569,13.604 21.569,17.004 23.254,17.004 23.254,13.604 26.653,13.604 26.653,11.89 "/> </g> </g> </svg>',

	    pinterest: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="28px" viewBox="0 0 28 28" enable-background="new 0 0 28 28" xml:space="preserve"> <path d="M14.021,1.57C6.96,1.57,1.236,7.293,1.236,14.355c0,7.062,5.724,12.785,12.785,12.785c7.061,0,12.785-5.725,12.785-12.785 C26.807,7.294,21.082,1.57,14.021,1.57z M15.261,18.655c-1.161-0.09-1.649-0.666-2.559-1.219c-0.501,2.626-1.113,5.145-2.925,6.458 c-0.559-3.971,0.822-6.951,1.462-10.116c-1.093-1.84,0.132-5.545,2.438-4.632c2.837,1.123-2.458,6.842,1.099,7.557 c3.711,0.744,5.227-6.439,2.925-8.775c-3.325-3.374-9.678-0.077-8.897,4.754c0.19,1.178,1.408,1.538,0.489,3.168 C7.165,15.378,6.53,13.7,6.611,11.462c0.131-3.662,3.291-6.227,6.46-6.582c4.007-0.448,7.771,1.474,8.29,5.239 c0.579,4.255-1.816,8.865-6.102,8.533L15.261,18.655z"/> </svg>',

	    github: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="28px" viewBox="0 0 28 28" enable-background="new 0 0 28 28" xml:space="preserve"> <path d="M13.971,1.571c-7.031,0-12.734,5.702-12.734,12.74c0,5.621,3.636,10.392,8.717,12.083c0.637,0.129,0.869-0.277,0.869-0.615 c0-0.301-0.012-1.102-0.018-2.164c-3.542,0.77-4.29-1.707-4.29-1.707c-0.579-1.473-1.414-1.863-1.414-1.863 c-1.155-0.791,0.088-0.775,0.088-0.775c1.277,0.104,1.96,1.316,1.96,1.312c1.136,1.936,2.991,1.393,3.713,1.059 c0.116-0.822,0.445-1.383,0.81-1.703c-2.829-0.32-5.802-1.414-5.802-6.293c0-1.391,0.496-2.527,1.312-3.418 C7.05,9.905,6.612,8.61,7.305,6.856c0,0,1.069-0.342,3.508,1.306c1.016-0.282,2.105-0.424,3.188-0.429 c1.081,0,2.166,0.155,3.197,0.438c2.431-1.648,3.498-1.306,3.498-1.306c0.695,1.754,0.258,3.043,0.129,3.371 c0.816,0.902,1.315,2.037,1.315,3.43c0,4.892-2.978,5.968-5.814,6.285c0.458,0.387,0.876,1.16,0.876,2.357 c0,1.703-0.016,3.076-0.016,3.482c0,0.334,0.232,0.748,0.877,0.611c5.056-1.688,8.701-6.457,8.701-12.082 C26.708,7.262,21.012,1.563,13.971,1.571L13.971,1.571z"/> </svg>'
	};
	/*
	 * Utility functions
	 */
	var setPercentBtns = function() {
		// loop through each instance of buttons
		jQuery('.rrssb-buttons').each(function(index) {
			var self = jQuery(this);
			var numOfButtons = jQuery('li', self).length;
			var initBtnWidth = 100 / numOfButtons;

			// set initial width of buttons
			jQuery('li', self).css('width', initBtnWidth + '%').attr('data-initwidth',initBtnWidth);
		});
	};

	var makeExtremityBtns = function() {
		// loop through each instance of buttons
		jQuery('.rrssb-buttons').each(function(index) {
			var self = jQuery(this);
			//get button width
			var containerWidth = parseFloat(jQuery(self).width());
			var buttonWidth = jQuery('li', self).not('.small').first().width();
			var smallBtnCount = jQuery('li.small', self).length;

			// enlarge buttons if they get wide enough
			if (buttonWidth > 170 && smallBtnCount < 1) {
				jQuery(self).addClass('large-format');
			} else {
				jQuery(self).removeClass('large-format');
			}

			if (containerWidth < 200) {
				jQuery(self).removeClass('small-format').addClass('tiny-format');
			} else {
				jQuery(self).removeClass('tiny-format');
			}
		});
	};

	var backUpFromSmall = function() {
		// loop through each instance of buttons
		jQuery('.rrssb-buttons').each(function(index) {
			var self = jQuery(this);
			var totalBtnSze = 0, totalTxtSze = 0, upCandidate, nextBackUp;
			var smallBtnCount = jQuery('li.small', self).length;

			if (smallBtnCount === jQuery('li', self).length) {
				var btnCalc = smallBtnCount * 42;
				var containerWidth = parseFloat(jQuery(self).width());
				upCandidate = jQuery('li.small', self).first();
				nextBackUp = parseFloat(jQuery(upCandidate).attr('data-size')) + 55;

				if ((btnCalc + nextBackUp) < containerWidth) {
					jQuery(self).removeClass('small-format');
					jQuery('li.small', self).first().removeClass('small');

					sizeSmallBtns();
				}

			} else {
				jQuery('li', self).not('.small').each(function(index) {
					var txtWidth = parseFloat(jQuery(this).attr('data-size')) + 55;
					var btnWidth = parseFloat(jQuery(this).width());

					totalBtnSze = totalBtnSze + btnWidth;
					totalTxtSze = totalTxtSze + txtWidth;
				});

				var spaceLeft = totalBtnSze - totalTxtSze;
				upCandidate = jQuery('li.small', self).first();
				nextBackUp = parseFloat(jQuery(upCandidate).attr('data-size')) + 55;

				if (nextBackUp < spaceLeft) {
					jQuery(upCandidate).removeClass('small');
					sizeSmallBtns();
				}
			}
		});
	};

	var checkSize = function(init) {
		// loop through each instance of buttons
		jQuery('.rrssb-buttons').each(function(index) {
			//console.log('starting check for: '+(index+1));
			var self = jQuery(this);
			var elems = jQuery('li', self).nextAll(), count = elems.length;

			// get buttons in reverse order and loop through each
			jQuery(jQuery('li', self).get().reverse()).each(function(index, count) {

				if (jQuery(this).hasClass('small') === false) {
					var txtWidth = parseFloat(jQuery(this).attr('data-size')) + 55;
					var btnWidth = parseFloat(jQuery(this).width());

					if (txtWidth > btnWidth) {
						//console.log($(self).attr('class')+' '+$(this).attr('class')+' txtWidth: '+txtWidth+ ' & btnWidth: '+btnWidth);
						var btn2small = jQuery('li', self).not('.small').last();
						jQuery(btn2small).addClass('small');
						//console.log($(btn2small).attr('class'));
						sizeSmallBtns();
					}
				}

				if (!--count) backUpFromSmall();
			});
		});

		// if first time running, put it through the magic layout
		if (init === true) {
			rrssbMagicLayout(sizeSmallBtns);
		}
	};

	var sizeSmallBtns = function() {
		// loop through each instance of buttons
		jQuery('.rrssb-buttons').each(function(index) {
			var self = jQuery(this);
			var regButtonCount,
					regPercent,
					pixelsOff,
					magicWidth,
					smallBtnFraction;

			// readjust buttons for small display
			var smallBtnCount = jQuery('li.small', self).length;

			// make sure there are small buttons
			if (smallBtnCount > 0 && smallBtnCount !== jQuery('li', self).length) {
				jQuery(self).removeClass('small-format');

				//make sure small buttons are square when not all small
				jQuery('li.small', self).css('width','42px');
				pixelsOff = smallBtnCount * 42;
				regButtonCount = jQuery('li', self).not('.small').length;
				regPercent = 100 / regButtonCount;
				smallBtnFraction = pixelsOff / regButtonCount;

				if (navigator.userAgent.indexOf('Chrome') >= 0 || navigator.userAgent.indexOf('Safari') >= 0) {
					magicWidth = '-webkit-calc('+regPercent+'% - '+smallBtnFraction+'px)';
				} else if (navigator.userAgent.indexOf('Firefox') >= 0) {
					magicWidth = '-moz-calc('+regPercent+'% - '+smallBtnFraction+'px)';
				} else {
					magicWidth = 'calc('+regPercent+'% - '+smallBtnFraction+'px)';
				}
				jQuery('li', self).not('.small').css('width', magicWidth);

			} else if (smallBtnCount === jQuery('li', self).length) {
				// if all buttons are small, change back to percentage
				jQuery(self).addClass('small-format');
				setPercentBtns();
			} else {
				jQuery(self).removeClass('small-format');
				setPercentBtns();
			}
		}); //end loop

		makeExtremityBtns();
	};

	var rrssbInit = function() {
		jQuery('.rrssb-buttons').each(function(index) {
			jQuery(this).addClass('rrssb-'+(index + 1));
		});

		setPercentBtns();

		// grab initial text width of each button and add as data attr
		jQuery('.rrssb-buttons li .text').each(function(index) {
			var txtWdth = parseFloat(jQuery(this).width());
			jQuery(this).closest('li').attr('data-size', txtWdth);
		});

		checkSize(true);
	};

	var rrssbMagicLayout = function(callback) {
		//remove small buttons before each conversion try
		jQuery('.rrssb-buttons li.small').removeClass('small');

		checkSize();

		callback();
	};

	var popupCenter = function(url, title, w, h) {
		// Fixes dual-screen position                         Most browsers      Firefox
		var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
		var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

		var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
		var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

		var left = ((width / 2) - (w / 2)) + dualScreenLeft;
		var top = ((height / 3) - (h / 3)) + dualScreenTop;

		var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

		// Puts focus on the newWindow
		if (window.focus) {
			newWindow.focus();
		}
	};

	var waitForFinalEvent = (function () {
		var timers = {};
		return function (callback, ms, uniqueId) {
			if (!uniqueId) {
				uniqueId = "Don't call this twice without a uniqueId";
			}
			if (timers[uniqueId]) {
				clearTimeout (timers[uniqueId]);
			}
			timers[uniqueId] = setTimeout(callback, ms);
		};
	})();

	/*
	 * Event listners
	 */

	jQuery('.rrssb-buttons a.popup').on('click', function(e){
		var _this = jQuery(this);
		popupCenter(_this.attr('href'), _this.find('.text').html(), 580, 470);
		e.preventDefault();
	});

	// resize function
	jQuery(window).resize(function () {

		rrssbMagicLayout(sizeSmallBtns);

		waitForFinalEvent(function(){
			rrssbMagicLayout(sizeSmallBtns);
		}, 200, "finished resizing");
	});

	// init load
	jQuery(document).ready(function(){
		rrssbInit();
	});

} 
// end plugin function

})(window, jQuery);
