$(function() {

	// tooltip class
	/*
		Current implementation required the inclusion of
		<div class="tooltip"></div>
		into the html file.
	*/
	// hide the tooltip element on document load
	$(".tooltip").hide();

	// on mouse over append and show the tooltip
	$(".tooltip-target").on("mouseover", function (event) {

		var target = $(this);
		var tooltip = $(".tooltip");
		// append and temporarily hide the tooltip to the element
		target.append( tooltip.hide() );

		// fill the tooltip with text
		var text = target.attr("data-tooltip-text") || "";
		text = text.length > 0 ? text : "[ missing tooltip ]";

		// adjust the tooltip alignment
		var alignment = target.attr("data-tooltip-alignment") || "abs-outside-S";
		html.align(tooltip, alignment);

		// set the text of the tooltip and show it
		tooltip.html(text).show();
	});

	// on mouse out hide the tooltip
	$(".tooltip-target").on("mouseout", function (event) {

		var target = $(this);
		target.find(".tooltip").hide();
	});
});

// classes

// create namespace
var html = {

}

// aligns the element
html.align = function (element, alignment) {
	element.attr({"data-alignment":alignment});
}




