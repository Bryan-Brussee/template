// When the document is ready, initialize tabletop.js
$(function() { init() });

var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=13GePQJBo1XDHHsjIn6AoqklPnp9kF0HTaL0cgGDVyV8&output=html';

// once tabletop is ready, call the function showInfo
function init() {
	Tabletop.init( { 
		key: public_spreadsheet_url,
	    callback: showInfo,
	    simpleSheet: true } )
}

// showInfo understands that data comes from the key we set up in Tabletop.init
function showInfo(data, tabletop) {
	var source   = $("#table-script").html();
	var template = Handlebars.compile(source);
	
	$.each( tabletop.sheets("Snowfall").all(), function(i, element) {
		var html = template(element);
		$("#live-table").append(html);
	});

	var total = 0;
	for (var i = 0; i < data.length; i++) {
		var value = parseFloat(data[i].snow);
		if (!isNaN(value)) {
			total += value;	
		}							
	};
	$("#live-table").append("<tr><td><b>Total Snowfall</b></td><td></td><td><b>" + total + " inches</b></td><td>&nbsp;</td></tr>");
}

// document.write("The published spreadsheet is located at <a target='_new' href='" + public_spreadsheet_url + "'>" + public_spreadsheet_url + "</a>");  
