var colour = "#ffffff"; // "random" can be replaced with any valid colour ie: "red"
var sparkles = 100;

var x = 400, y = 300;
var ox = 400, oy = 300;
var swide = 800, shigh = 600;
var sleft = 0, sdown = 0;

var tiny = [];
var star = [];
var starv = [];
var starx = [];
var stary = [];
var tinyx = [];
var tinyy = [];
var tinyv = [];

window.onload = function () {
	if (!document.getElementById) return;

	for (var i = 0; i < sparkles; i++) {

		var t = createDiv(3, 3);
		t.style.visibility = "hidden";
		t.style.zIndex = "999";
		document.body.appendChild(tiny[i] = t);
		tinyv[i] = 0;

		var s = createDiv(5, 5);
		s.style.backgroundColor = "transparent";
		s.style.visibility = "hidden";
		s.style.zIndex = "999";

		var rlef = createDiv(1, 5);
		var rdow = createDiv(5, 1);
		s.appendChild(rlef);
		s.appendChild(rdow);

		rlef.style.top = "2px";
		rlef.style.left = "0px";
		rdow.style.top = "0px";
		rdow.style.left = "2px";

		document.body.appendChild(star[i] = s);
		starv[i] = 0;
	}

	set_width();
	sparkle();
};

function sparkle() {
	var c;

	if (Math.abs(x - ox) > 1 || Math.abs(y - oy) > 1) {
		ox = x;
		oy = y;

		for (c = 0; c < sparkles; c++) {
			if (!starv[c]) {
				star[c].style.left = (starx[c] = x) + "px";
				star[c].style.top = (stary[c] = y + 1) + "px";
				star[c].style.clip = "rect(0px, 5px, 5px, 0px)";
				star[c].childNodes[0].style.backgroundColor =
				star[c].childNodes[1].style.backgroundColor =
					(colour === "random") ? newColour() : colour;

				star[c].style.visibility = "visible";
				starv[c] = 50;
				break;
			}
		}
	}

	for (c = 0; c < sparkles; c++) {
		if (starv[c]) update_star(c);
		if (tinyv[c]) update_tiny(c);
	}

	setTimeout(sparkle, 40);
}

function update_star(i) {
	if (--starv[i] === 25)
		star[i].style.clip = "rect(1px, 4px, 4px, 1px)";

	if (starv[i]) {
		stary[i] += 1 + Math.random() * 3;
		starx[i] += (i % 5 - 2) / 5;

		if (stary[i] < shigh + sdown) {
			star[i].style.top = stary[i] + "px";
			star[i].style.left = starx[i] + "px";
		} else {
			star[i].style.visibility = "hidden";
			starv[i] = 0;
		}
	} else {
		tinyv[i] = 50;
		tiny[i].style.top = (tinyy[i] = stary[i]) + "px";
		tiny[i].style.left = (tinyx[i] = starx[i]) + "px";
		tiny[i].style.width = "2px";
		tiny[i].style.height = "2px";
		tiny[i].style.backgroundColor =
			star[i].childNodes[0].style.backgroundColor;

		star[i].style.visibility = "hidden";
		tiny[i].style.visibility = "visible";
	}
}

function update_tiny(i) {
	if (--tinyv[i] === 25) {
		tiny[i].style.width = "1px";
		tiny[i].style.height = "1px";
	}

	if (tinyv[i]) {
		tinyy[i] += 1 + Math.random() * 3;
		tinyx[i] += (i % 5 - 2) / 5;

		if (tinyy[i] < shigh + sdown) {
			tiny[i].style.top = tinyy[i] + "px";
			tiny[i].style.left = tinyx[i] + "px";
		} else {
			tiny[i].style.visibility = "hidden";
			tinyv[i] = 0;
		}
	} else {
		tiny[i].style.visibility = "hidden";
	}
}

document.onmousemove = function (e) {
	if (e) {
		y = e.pageY;
		x = e.pageX;
	} else {
		set_scroll();
		y = event.y + sdown;
		x = event.x + sleft;
	}
};

window.onscroll = set_scroll;
window.onresize = set_width;

function set_scroll() {
	if (typeof self.pageYOffset === "number") {
		sdown = self.pageYOffset;
		sleft = self.pageXOffset;
	} else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
		sdown = document.body.scrollTop;
		sleft = document.body.scrollLeft;
	} else if (document.documentElement) {
		sdown = document.documentElement.scrollTop;
		sleft = document.documentElement.scrollLeft;
	}
}

function set_width() {
	swide = window.innerWidth || document.documentElement.clientWidth || 800;
	shigh = window.innerHeight || document.documentElement.clientHeight || 600;
}

function createDiv(h, w) {
	var d = document.createElement("div");
	d.style.position = "absolute";
	d.style.height = h + "px";
	d.style.width = w + "px";
	d.style.overflow = "hidden";
	return d;
}

function newColour() {
	var c = [255, Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
	c.sort(() => 0.5 - Math.random());
	return "rgb(" + c.join(",") + ")";
}
