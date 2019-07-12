var nav = $('.nav');
var line = $('<div />').addClass('line');

line.appendTo(nav);

var active = nav.find('.active');
var pos = 0;
var wid = 0;

if(active.length) {
	pos = active.position().left;
	wid = active.width();
	line.css({
		left: pos - 17,
		width: wid
	});
}

nav.find('ul li a').mouseenter(function(e) {
	if(!$(this).parent().hasClass('active')) {
		e.preventDefault();

		var _this = $(this);

		nav.find('ul li').removeClass('active');

		var position = _this.parent().position();
		var width = _this.parent().width();
		if(position.left >= pos) {
			line.animate({
				width: ((position.left - pos) + width)
			}, 300, function() {
				line.animate({
					width: width,
					left: position.left
				}, 150);
				_this.parent().addClass('active');
			});
		} else {
			line.animate({
				left: position.left,
				width: ((pos - position.left) + wid)
			}, 300, function() {
				line.animate({
					width: width
				}, 150);
				_this.parent().addClass('active');
			});
		}

		pos = position.left;
		wid = width;
	}
});

window.onload = function() {
	var u899 = document.getElementById("u899");
	var u900 = document.getElementById("u900");
	var u901 = document.getElementById("u901");
	var u902 = document.getElementById("u902");
	var JUKUGO21=document.getElementById("JUKUGO21");
	u899.onclick = function() {
		if(u902.style.display == "none") {
			u902.style.display = "block";
			u902.style.visibility = "inherit";
			u901.style.display = "none";
			JUKUGO21.id="JUKUGO21";
		}
	}

	u900.onclick = function() {
		if(u901.style.display == "none") {
			u901.style.display = "block";
			u901.style.visibility = "inherit";
			u902.style.display = "none";
			JUKUGO21.id="JUKUGO11";
		}
	}
}