
var togButton = document.getElementById("toggle");
var labels = ["Social Security, Unemployment, Labor",
	      "Medicare and Health",
	      "National Defense",
	      "Net Interest"];
var data00 = [36.6, 19.4, 16.2, 12.3];
var data20 = [35.4, 27.9, 12.3, 10.6];
var bars = null;
var yr = true;

//makebars will create the divs with the correct style
var createBars = function() {
    bars = d3.select(".chart")
	.selectAll("div")
	.data(data00)
	.enter()
	.append("div");
}

//switch bars will change the width of the bars and the colors and the text
var switchBars = function(yr00) {
    bars.transition()
	.duration(1000)
//	.style("width", depends on data)
//	.style("background-color", 2000-blue and 2020 red or something)
//	.text(return data);
}

//switch bars to the other year; changes the color and the text of "SHOWING"
var toggle = function(e) {
    switchBars(yr);
    d3.selectAll("h3")
	.transition()
	.duration(1000)
	.text(function()
	      {
		  if (yr) {
		      return "SHOWING: 2000";
		  } else {
		      return "SHOWING: 2020";
		  }
	      })
	.style("color", function()
	       {
		  if (yr) {
		      return "blue";
		  } else {
		      return "red";
		  }
	       });
    yr = !yr;
}

togButton.addEventListener("click", toggle);
createBars();
