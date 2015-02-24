

var pi = Math.PI;

//-------------------------- 1st circle --------------------------

var arc = d3.svg.arc().outerRadius(200).innerRadius(140);

var pie = d3.layout.pie().sort(null).startAngle(0 * (pi / 180)).endAngle(160 * (pi / 180)).value(function(d) {
	//return d.population;
	return 10;
});

var pie2 = d3.layout.pie().sort(null).startAngle(-70 * (pi / 180)).endAngle(-160 * (pi / 180)).value(function(d) {
	//return d.population;
	return 10;
});

//-------------------------- 2nd circle --------------------------

var arc2 = d3.svg.arc().outerRadius(280).innerRadius(220);

var pie3 = d3.layout.pie().sort(null).startAngle(124 * (pi / 180)).endAngle(154 * (pi / 180)).value(function(d) {
	return 10;
}); 

var pie4 = d3.layout.pie().sort(null).startAngle(164 * (pi / 180)).endAngle(216* (pi / 180)).value(function(d) {
	//return d.population;
	return 10;
});

var pie5 = d3.layout.pie().sort(null).startAngle(77 * (pi / 180)).endAngle(114 * (pi / 180)).value(function(d) {
	//return d.population;
	return 10;
});

var pie6 = d3.layout.pie().sort(null).startAngle(0 * (pi / 180)).endAngle(67 * (pi / 180)).value(function(d) {
	//return d.population;
	return 10;
});

var pie7 = d3.layout.pie().sort(null).startAngle(320 * (pi / 180)).endAngle(351 * (pi / 180)).value(function(d) {
	//return d.population;
	return 10;
});

var pie8 = d3.layout.pie().sort(null).startAngle(280 * (pi / 180)).endAngle(310 * (pi / 180)).value(function(d) {
	//return d.population;
	return 10;
});

var pie9 = d3.layout.pie().sort(null).startAngle(226 * (pi / 180)).endAngle(270 * (pi / 180)).value(function(d) {
	//return d.population;
	return 10;
});

//-------------------------- 3rd circle --------------------------

var arc3 = d3.svg.arc().outerRadius(300).innerRadius(360);

var pie10 = d3.layout.pie().sort(null).startAngle(-16 * (pi / 180)).endAngle(16 * (pi / 180)).value(function(d) {
	//return d.population;
	return 10;
});

var pie11 = d3.layout.pie().sort(null).startAngle(287 * (pi / 180)).endAngle(319 * (pi / 180)).value(function(d) {
	//return d.population;
	return 10;
});

var pie12 = d3.layout.pie().sort(null).startAngle(218 * (pi / 180)).endAngle(265 * (pi / 180)).value(function(d) {
	//return d.population;
	return 10;
});

var pie13 = d3.layout.pie().sort(null).startAngle(155 * (pi / 180)).endAngle(195 * (pi / 180)).value(function(d) {
	//return d.population;
	return 10;
});

var pie14 = d3.layout.pie().sort(null).startAngle(93 * (pi / 180)).endAngle(133* (pi / 180)).value(function(d) {
	//return d.population;
	return 10;
});

var pie15 = d3.layout.pie().sort(null).startAngle(38 * (pi / 180)).endAngle(70 * (pi / 180)).value(function(d) {
	//return d.population;
	return 10;
});

