(function ($) {
	$.fn.placeholder = function (options) {
	  var defaults = {
		      color: '#777',
		      colorFocus: '#bbb'
		    };
		options = jQuery.extend(defaults, options);
	  $(this).each(function () {
	    if ($(this).data('placeholder-enabled')) {
			  return false;
			} else {
			  $(this).data('placeholder-enabled', true);
			}
	    // create helper
      var $field = $(this),
          $cover = $('<div class="_placeholder">' + $(this).attr('placeholder') + '</div>');
  		$cover.insertAfter($field);
  		$cover.css({
  			'position':'absolute',
  			'top': $field.offset().top,
  			'left': $field.offset().left,
  			'padding-left': $field.css('padding-left'),
  			'padding-right': $field.css('padding-right'),
  			'padding-top': $field.css('padding-top'),
  			'padding-bottom': $field.css('padding-bottom'),
  			'line-height': $field.css('line-height'),
  			'font-size': $field.css('font-size'),
  			'color': ($(this).is(':focus') ? options.colorFocus : options.color),
  			'cursor': 'text',
  			'margin-left': '3px',
  			'margin-top': $field.css('margin-top')
  		}).on('click', function () {
  		  $field.focus();
  		});
  		
  		// bind events
  		$field.on('keydown keypress keyup blur change', function () {
  		  if ($(this).val().length) {
  		    $cover.hide();
  		  } else {
  		    $cover.fadeIn(100);
  		  }
  		}).on('focus', function () {
  		  $cover.css('color', options.colorFocus);
  		}).on('blur', function () {
        $cover.css('color', options.color);
    	}).attr('placeholder', '').change();

  		$(window).on('resize', function () {
  			$cover.css({
  			  'top': $field.offset().top,
  			  'left': $field.offset().left
  			});
  		});
	  });
	}
})(jQuery);