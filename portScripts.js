//Count number of images being displayed in the HTML document
var imgCount = ($('#content > img').length);
//Prepare array to store image ID numbers
var imgArray = [];

//Populate array used for grabbing image information to display in the lightbox with image ID's

for (i=0; i<imgCount; ++i) {

	// console.log(i)
	imgArray.push(i)
	// console.log("Array is now: " + imgArray)

}

//When image is clicked, open in lightbox and pull information from bottom of HTML doc

$(".gI").click(function() {

	//First we get the ID of the image, and the file extention it uses
	clickedImage = $(this).attr('id');
	console.log("clickedImage is " + clickedImage)
	
	classGrab = $(this).attr('class');
	console.log("classGrab is " + classGrab)
	
	//Next we determine which extention to insert into our new image string
	if ($(this).hasClass('GIF')) {
		console.log("Image is a GIF")
		$("#lbImage").attr('src', 'Images/' + clickedImage + '.gif');
	} else if ($(this).hasClass('JPG')){
		console.log("Image is a JPG")
		$("#lbImage").attr('src', 'Images/' + clickedImage + '.jpg');
	} else if ($(this).hasClass('PNG')){
		console.log("Image is a PNG")
		$("#lbImage").attr('src', 'Images/' + clickedImage + '.png');
	}
	
	//With the image number identified, we then grab the text under the specified class, using the ID we grabbed earlier
	newTitle = $("#boxTitle" + clickedImage).text()
	newText = $("#boxDesc" + clickedImage).text()

	//Then all that's left after obtaining the text from the defined newTitle and newText buckets is dumping it into the appropriate containers.
	$("#lbTitle").text(newTitle);
	// $("#lbYear").text(newYear);
	$("#lbText").html(newText);
	$("#lightBox").fadeIn(500)

})

//Close lightbox when any part of the image is clicked

$("#lightBox").click(function(){

	$("#lightBox").fadeOut(500)

})

//Toggle miniNav drawer

$("#dropDown").click(function(){

	$("#miniNav").slideToggle(500)

});

//Hide and show images when a label is clicked

$(".filters").click(function(){

	clickedFilter = $(this).attr('id');
	topBarOpen = $("#topBar").css('display');

	console.log(topBarOpen)

	switch (clickedFilter) {

		case "showAll":
			console.log("Show All");
			$(".vector").fadeIn(500)
			$(".branding").fadeIn(500)
			$(".photo").fadeIn(500)
			$(".web").fadeIn(500)
			$(".design").fadeIn(500)
			$(".video").fadeIn(500)
			$("#showAll").fadeOut(500)
			if (topBarOpen == "flex") {
				$("#miniNav").slideToggle(500)
			}
			$("#about").fadeOut(500)			
			break;

		case "showAllMini":
			console.log("Show All");
			$(".vector").fadeIn(500)
			$(".branding").fadeIn(500)
			$(".photo").fadeIn(500)
			$(".web").fadeIn(500)
			$(".design").fadeIn(500)
			$(".video").fadeIn(500)
			$("#showAllMini").fadeOut(500)
			$("#showAll").fadeOut(500)
			if (topBarOpen == "flex") {
				$("#miniNav").slideToggle(500)
			}
			$("#about").fadeOut(500)
			break;

		case "vectorFilter":
			console.log("Vectors");
			$(".vector").fadeIn(500)
			$(".branding").fadeOut(500)
			$(".photo").fadeOut(500)
			$(".web").fadeOut(500)
			$(".design").fadeOut(500)
			$(".video").fadeOut(500)
			$("#showAll").fadeIn(500)
			$("#showAllMini").fadeIn(500)
			if (topBarOpen == "flex") {
				$("#miniNav").slideToggle(500)
			}
			$("#about").fadeOut(500)
			break;

		case "webFilter":
			console.log("Web");
			$(".vector").fadeOut(500)
			$(".branding").fadeOut(500)
			$(".photo").fadeOut(500)
			$(".web").fadeIn(500)
			$(".design").fadeOut(500)
			$(".video").fadeOut(500)
			$("#showAll").fadeIn(500)
			$("#showAllMini").fadeIn(500)
			if (topBarOpen == "flex") {
				$("#miniNav").slideToggle(500)
			}
			$("#about").fadeOut(500)
			break;

		case "brandFilter":
			console.log("Branding");
			$(".vector").fadeOut(500)
			$(".branding").fadeIn(500)
			$(".photo").fadeOut(500)
			$(".web").fadeOut(500)
			$(".design").fadeOut(500)
			$(".video").fadeOut(500)
			$("#showAll").fadeIn(500)
			$("#showAllMini").fadeIn(500)
			if (topBarOpen == "flex") {
				$("#miniNav").slideToggle(500)
			}
			$("#about").fadeOut(500)
			break;

		case "videoFilter":
			console.log("Video");
			$(".vector").fadeOut(500)
			$(".branding").fadeOut(500)
			$(".photo").fadeOut(500)
			$(".web").fadeOut(500)
			$(".design").fadeOut(500)
			$(".video").fadeIn(500)
			$("#showAll").fadeIn(500)
			$("#showAllMini").fadeIn(500)
			if (topBarOpen == "flex") {
				$("#miniNav").slideToggle(500)
			}
			$("#about").fadeOut(500)
			break;	

		case "genFilter":
			console.log("General Design");
			$(".vector").fadeOut(500)
			$(".branding").fadeOut(500)
			$(".photo").fadeOut(500)
			$(".web").fadeOut(500)
			$(".design").fadeIn(500)
			$(".video").fadeOut(500)
			$("#showAll").fadeIn(500)
			$("#showAllMini").fadeIn(500)
			if (topBarOpen == "flex") {
				$("#miniNav").slideToggle(500)
			}
			$("#about").fadeOut(500)
			break;

		case "photoFilter":
			console.log("Photo");
			$(".vector").fadeOut(500)
			$(".branding").fadeOut(500)
			$(".photo").fadeIn(500)
			$(".web").fadeOut(500)
			$(".design").fadeOut(500)
			$(".video").fadeOut(500)
			$("#showAll").fadeIn(500)
			$("#showAllMini").fadeIn(500)
			if (topBarOpen == "flex") {
				$("#miniNav").slideToggle(500)
			}
			$("#about").fadeOut(500)
			break;

		case "aboutFilter":
			console.log("About Page");
			$(".vector").fadeOut(500)
			$(".branding").fadeOut(500)
			$(".photo").fadeOut(500)
			$(".web").fadeOut(500)
			$(".design").fadeOut(500)
			$(".video").fadeOut(500)
			$("#showAll").fadeIn(500)
			$("#showAllMini").fadeIn(500)
			$("#about").fadeIn(500)
			if (topBarOpen == "flex") {
				$("#miniNav").slideToggle(500)
			}

			break;
	}

})

//Testing out the .split command

// $(".gI").click(function(){
	
// 	clickedImage = ($(this).attr('class').split(' ')[1])
// 	alert(clickedImage)

// });