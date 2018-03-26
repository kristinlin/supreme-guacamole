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
	.append("div");}

//switch bars will change the width of the bars and the colors and the text
var switchBars = function(e) {
    bars.data(function(){
	if (yr) {
	    return data00;
	}
	else {
	    return data20;
	}
    })
	.transition()
    	.duration(1000)
	.style("background-color", function(){
	    if (yr) {
		return "blue";
	    }
	    else {
		return "red";
	    }
	})
    	.style("width", function(e) {return e*10 + "px"; })
    	.text(function(f){return f + "%";});
    bars.data(labels).append("b").attr("style","float:left").text(function(d){return d;});
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
toggle();
