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


 
    $.fn.shareSocial = function( options ) {
 		
        // 1. Set default options

        var settings = $.extend({
            title: 'Title Sample',
            text: 'Text Sample',
            image: 'http://frontenddot.com/rrssb/media/rrssb-preview.png',
            url: window.location.href,
            baseUrl: window.location.hostname,
            showPopup: true,
            showText: true,
            showIcon: true
        }, options );
        // 2. Creare social networks api links
        // <a  href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;display=popup">test</a>
        // Set social networks api links
 		var apiLinks = {
            twitter: 'https://twitter.com/intent/tweet?url={url}&text={text}',
            pinterest: 'https://www.pinterest.com/pin/create/button/?media={image}&url={url}&description={text}',
            facebook: 'https://www.facebook.com/sharer.php?s=100&p[title]={title}&p[summary]={text}&p[url]={url}&p[images][0]={image}',
            //facebook: 'https://www.facebook.com/sharer.php?u={url}&t={title}',
            linkedin: 'https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}&summary={text}&source={baseUrl}',
            tumblr: 'https://tumblr.com/share?s=&v=3&t={title}&u={url}',
            plus: 'https://plus.google.com/share?url={url}',
            pocket: 'https://getpocket.com/edit?url={url}&title={title}'
        };

        // Update links with user settings data
        var apiLink = function(website){
            var apiUrl = apiLinks[website];
            apiUrl = apiUrl.replace('{url}', encodeURIComponent(settings.url));
            apiUrl = apiUrl.replace('{title}', encodeURIComponent(settings.title));
            apiUrl = apiUrl.replace('{text}', encodeURIComponent(settings.text));
            apiUrl = apiUrl.replace('{image}', encodeURIComponent(settings.image));
            apiUrl = apiUrl.replace('{baseUrl}', encodeURIComponent(settings.baseUrl));
            return apiUrl;
        };

        // 3. Create button elements

		// Store icons
		var icons = {

		    linkedin: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="28px" viewBox="0 0 28 28" enable-background="new 0 0 28 28" xml:space="preserve"><path d="M25.424,15.887v8.447h-4.896v-7.882c0-1.979-0.709-3.331-2.48-3.331c-1.354,0-2.158,0.911-2.514,1.803 c-0.129,0.315-0.162,0.753-0.162,1.194v8.216h-4.899c0,0,0.066-13.349,0-14.731h4.899v2.088c-0.01,0.016-0.023,0.032-0.033,0.048 h0.033V11.69c0.65-1.002,1.812-2.435,4.414-2.435C23.008,9.254,25.424,11.361,25.424,15.887z M5.348,2.501 c-1.676,0-2.772,1.092-2.772,2.539c0,1.421,1.066,2.538,2.717,2.546h0.032c1.709,0,2.771-1.132,2.771-2.546 C8.054,3.593,7.019,2.501,5.343,2.501H5.348z M2.867,24.334h4.897V9.603H2.867V24.334z"/></svg>',

		    facebook: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="28px" viewBox="0 0 28 28" enable-background="new 0 0 28 28" xml:space="preserve"><path d="M27.825,4.783c0-2.427-2.182-4.608-4.608-4.608H4.783c-2.422,0-4.608,2.182-4.608,4.608v18.434 c0,2.427,2.181,4.608,4.608,4.608H14V17.379h-3.379v-4.608H14v-1.795c0-3.089,2.335-5.885,5.192-5.885h3.718v4.608h-3.726 c-0.408,0-0.884,0.492-0.884,1.236v1.836h4.609v4.608h-4.609v10.446h4.916c2.422,0,4.608-2.188,4.608-4.608V4.783z"/></svg>',

		    twitter: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="28px" viewBox="0 0 28 28" enable-background="new 0 0 28 28" xml:space="preserve"><path d="M24.253,8.756C24.689,17.08,18.297,24.182,9.97,24.62c-3.122,0.162-6.219-0.646-8.861-2.32 c2.703,0.179,5.376-0.648,7.508-2.321c-2.072-0.247-3.818-1.661-4.489-3.638c0.801,0.128,1.62,0.076,2.399-0.155 C4.045,15.72,2.215,13.6,2.115,11.077c0.688,0.275,1.426,0.407,2.168,0.386c-2.135-1.65-2.729-4.621-1.394-6.965 C5.575,7.816,9.54,9.84,13.803,10.071c-0.842-2.739,0.694-5.64,3.434-6.482c2.018-0.623,4.212,0.044,5.546,1.683 c1.186-0.213,2.318-0.662,3.329-1.317c-0.385,1.256-1.247,2.312-2.399,2.942c1.048-0.106,2.069-0.394,3.019-0.851 C26.275,7.229,25.39,8.196,24.253,8.756z"/></svg>'
		};
		
		// Create main sharing link

        this.children().each(function(index, el){

        	//Get variables
        	var website = $(el).attr('data-rsb-website');
        	var text = $(el).attr('data-rsb-text');
        	var icon = $(el).attr('data-rsb-icon');

        	//Set button icon
        	if(settings.showIcon) {
        		if (icon && icon.length > 0) {
        			var buttonIcon = '<span class="icon"><img src="'+icon+'"></span>';
        		} else {
        			var buttonIcon = '<span class="icon">'+icons[website]+'</span>';
        		}
        	} else {
        		var buttonIcon = '';
        	};

        	//Set button text
        	if(settings.showText) {
        		if (text && text.length > 0) {
        			var buttonText = '<span class="text">'+text+'</span>';
        		} else {
        			var buttonText = '<span class="text">'+website+'</span>';
        		}
         	} else {
        		var buttonText = '';
        	};

        	//Check popup
        	if (settings.showPopup) {
	            var popup = 'popup';
	        } else {
	        	var popup = '';
	        };

	        //create main sharing link
        	$('<a href="'+apiLink(website)+'">'+buttonIcon+buttonText+'</a>').addClass(popup).appendTo($(el).addClass(website));

        });

        this.each(function(index, el) {
        	$(el).addClass('rrssb-buttons');
        });

		/*
		 * Utility functions
		 */
		var setPercentBtns = function() {
			// loop through each instance of buttons
			$('.rrssb-buttons').each(function(index) {
				var self = jQuery(this);
				var numOfButtons = jQuery('li', self).length;
				var initBtnWidth = 100 / numOfButtons;

				// set initial width of buttons
				jQuery('li', self).css('width', initBtnWidth + '%').attr('data-initwidth',initBtnWidth);
			});
		};

		var makeExtremityBtns = function() {
			// loop through each instance of buttons
			$('.rrssb-buttons').each(function(index) {
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
			$('.rrssb-buttons').each(function(index) {
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
			$('.rrssb-buttons').each(function(index) {
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
			$('.rrssb-buttons').each(function(index) {
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
			$('.rrssb-buttons').each(function(index) {
				jQuery(this).addClass('rrssb-buttons rrssb-'+(index + 1));
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
	};

})(window, jQuery);
