/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon_phone': '&#xe601;',
		'icon_globe2': '&#xe600;',
		'icon_tripmode_bike': '&#xe603;',
		'icon_tripmode_bus': '&#xe604;',
		'icon_tripmode_car': '&#xe605;',
		'icon_tripmode_ferry': '&#xe606;',
		'icon_tripmode_subway': '&#xe607;',
		'icon_tripmode_walk': '&#xe608;',
		'icon_tripmode_flight': '&#xe609;',
		'icon_sitemap': '&#xf0e8;',
		'icon_direction_down': '&#xe60a;',
		'icon_direction_left': '&#xe60b;',
		'icon_direction_right': '&#xe60c;',
		'icon_direction_up': '&#xe60d;',
		'icon_globe': '&#xe60f;',
		'icon_images': '&#xe610;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon_[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());

