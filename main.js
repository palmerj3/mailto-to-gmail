(function(global){
	'use strict';

	global.addEventListener('click', function(e) {
		var node = e.target,
			href = '';
		if (node.tagName === 'A') {
			href = node.getAttribute('href');
			console.log(href);

			if (href.indexOf('mailto:') > -1) {
				var compose = "https://mail.google.com/mail/?extsrc=mailto&url=" + encodeURIComponent(href);
				node.setAttribute('href', compose);
			}
		}
	}, false);

}(window));