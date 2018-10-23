
//wait for button to be clicked
$('#clickToStart').on('click', function() {

	//debug log to console that game has begun
	console.log ('Begin!');


	//define starting variables 
	var males = 75;
	var females = 25;

	//fade in 
	$('#moreInfo').fadeIn(500, function () {})

	//start a new function
	$(function animateStart () {

		//Change the text value of the header and button
		$('#chartTitle').text('Ratio of Male/Female Protagnists in Video Games')
		$('#clickToStart').text('Click the bar to boost female representation in games');

	//end function
	});

//This bit is where the 'game' takes place. All the code below is used to determine the values of
//males and females, then set the bar's percentage width respectively
	var reduceFemales = function(reduceFemales) {

		//set the initial rates of male increase and female increase
		var maleRate = 1;
		var femaleRate = 2;

			//check if females value is equal to or greater than 25
		if (females >= 25) {

			//if the above statement is true, dramatically increase male rate to 'reset' progress
			maleRate = 10
			femaleRate = 1
			//and log to the console that this is happening, so we know it works!
			console.log ('value too high, supressing females')
			console.log ('Current Rates: ' + maleRate + ' M/Ms and '+ femaleRate + ' F/Click')

		} else {

			//otherwise, if the 'if' statement is not true, set the values to default
			maleRate = 1
			femaleRate = 2

		}
		
		//this 'if' checks if the males are at the maximum value of 100, so we do not break past
		//100 and enter an inescapable scenario where the value continues to increase to ridiculous
		//levels. The first part is if males are NOT at that threshold.
		if (males < 100 && females >= 0) {

			console.log ('Current Rates: ' + maleRate + ' M/Ms and '+ femaleRate + ' F/Click')
			//if males is not 100, subtract from females the value of the variable maleRate
			females -= maleRate
			//likewise, add to males the value of maleRate
			males += maleRate
			//then adjust the CSS code to have the percentage of the bar equal the males variable
			$('#males').css('width', males+"%");
			//and the same for females
			$('#females').css('width', females+"%");
			//also change the text value of the counters at the bottom to reflect the new percentages
			$('#maleCounter').text('Males: ' + males + '%')
			$('#femaleCounter').text('Females: ' + females + '%')
		
		} else if (males == 100) {

			//if the value of males = 100, lock the value at 100
			$('#maleCounter').text('Males: 100%')
			$('#femaleCounter').text('Females: 0%')
			males = 100
			//stop the timer
			clearInterval(reduceFemales)

		}	


	}

	//set a repeating timer that runs the reduceFemales function every 50 milliseconds 
	setInterval(reduceFemales, 50);

	//this function will run every time the bar is clicked, and add 5 to females while 
	//subtracting 5 from males, creating forward progress
	$('#chartBase').mouseup(function () {

		// console.log ('clicked!')
		//set females to its own value +5
		females += 5;
		//set males to its own value -5
		males -= 5;
		//and change the text directly to reflect this
		$('#females').css('width', females+"%");
		$('#males').css('width', males+"%");

	})


})

//you can ignore this, this is old code I tried to make work

	// window.onload = function () {

	// var chart = new CanvasJS.Chart("chart", {
	// 	theme: "dark2",
	// 	exportFileName: "Doughnut Chart",
	// 	exportEnabled: true,
	// 	animationEnabled: true,
	// 	title:{
	// 		text: "Monthly Expense"
	// 	},
	// 	legend:{
	// 		cursor: "pointer",
	// 		// itemclick: explodePie
	// 	},
	// 	data: [{
	// 		type: "doughnut",
	// 		innerRadius: 150,
	// 		showInLegend: true,
	// 		toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
	// 		indexLabel: "{name} - #percent%",
	// 		dataPoints: [
	// 			{ y: 24, name: "Males" },
	// 			{ y: 8, name: "Females" },
	// 			{ y: 13, name: "N/A" },
	// 			{ y: 5, name: "Gender Ambiguous" },
	// 		]
	// 	}]
	// });
	// chart.render();

	// // function explodePie (e) {
	// // 	if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
	// // 		e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
	// // 	} else {
	// // 		e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
	// // 	}
	// // 	e.chart.render();
	// // }

	// }

	// $('#chart').on('click', function () {



	// })