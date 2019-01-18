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

	clickedImage = $(this).attr('src');
	imgNum = imgArray[$(this).attr("id")]
	imgID = ("group"+imgNum)
	
	newTitle = $("#boxTitle"+imgNum).text()
	// newYear = $("#boxYear"+imgNum).text()
	newText = $("#boxDesc"+imgNum).text()

	$("#lbImage").attr('src', clickedImage);
	$("#lbTitle").text(newTitle);
	// $("#lbYear").text(newYear);
	$("#lbText").html(newText);
	$("#lightBox").fadeIn(500)

})

//Close lightbox when any part of the image is clicked

$("#lbImage").click(function(){

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
			$("#aboutCont").fadeOut(500)			
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
			$("#aboutCont").fadeOut(500)
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
			$("#aboutCont").fadeOut(500)
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
			$("#aboutCont").fadeOut(500)
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
			$("#aboutCont").fadeOut(500)
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
			$("#aboutCont").fadeOut(500)
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
			$("#aboutCont").fadeOut(500)
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
			$("#aboutCont").fadeOut(500)
			break;

		case "aboutFilter":
			console.log("About Page");
			$(".vector").fadeOut(500)
			$(".branding").fadeOut(500)
			$(".photo").fadeOut(500)
			$(".web").fadeOut(500)
			$(".design").fadeOut(500)
			$(".video").fadeOut(500)
			$("#showAll").fadeOut(500)
			$("#showAllMini").fadeIn(500)
			if (topBarOpen == "flex") {
				$("#miniNav").slideToggle(500)
			}
			$("#about").fadeIn(500)
			break;
	}

})

//Testing out the .split command

// $(".gI").click(function(){
	
// 	clickedImage = ($(this).attr('class').split(' ')[1])
// 	alert(clickedImage)

// });