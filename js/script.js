
var catCounter = [0, 0, 0, 0, 0];
var names = ["steffan", "Sebastian", "Memol", "MoonEye", "sonny"];

$("img").click(function() {
	var imgSrc = $(this).attr("src");
	var catId = $(this).attr("id");
	var bigImg = document.createElement('img');
	$(bigImg).addClass('img-responsive selected');
	$(bigImg).attr('src',imgSrc);
	catId = parseInt(catId);
	catCounter[catId]++;
	$('img.selected').remove();
	$(".selected").append(bigImg);
	$("#catCounter").html("<strong>"+names[catId]+"</strong> clicked "+catCounter[catId]+" times.");
	console.log(catCounter[catId]);
});



function displayNames(){
	for( var i=0; i<names.length; i++){
		$("span.name"+i).html(names[i]);
	}
}

displayNames()


//displayCounter(clickCounter);