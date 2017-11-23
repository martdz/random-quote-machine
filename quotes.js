// generation of random color
function color(){
	var color_arr = ["#F5E1DA", "#40A798", "#476268", "#A6D0E4", "#FFECDA", "#D4A5A5", "#77628C", "#71A0A5", "#ACC6AA", "#CABBE9", "#FFCEF3", "#878ECD", "#B9BBDF", "#c46f8a", "#6fc4ad", "#c4746f"];
	var max = 15;
	var min = 0;
	var rand = min - 0.5 + Math.random() * (max - min + 1);
		rand = Math.round(rand);
	return color_arr[rand];
}
//Forismatic api for random quote
$(document).ready(function(){
	$("button").on("click",function(){
		$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
				$("q").html('<i class="fa fa-quote-left" aria-hidden="true"></i> ' + json.quoteText + ' <i class="fa fa-quote-right" aria-hidden="true"></i>');  
				$("p").html(' - ' + json.quoteAuthor);
		});
		$("body").css("background-color", color());
		$("#quote-box").css("background-color", color());
	});   
});

// tweet quote
$(document).ready(function() {
	$("#tweet-button").click(function(){
		var tweet = $("q").text()+ ' - ' + $("p").text();
		var tweetLink = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweet);
		window.open(tweetLink,'_blank');
	})
});

	
