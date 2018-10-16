$('#clickToStart').on('click', function() {

	console.log ('Begin!');

	var males = 75;
	var females = 25;

	$(function animateStart () {

		$('#clickToStart').text('Click the bar to fight status quo');

	});


	var reduceFemales = function(reduceFemales) {

		var maleRate = 1;
		var femaleRate = 2;

			if (females >= 25) {

			maleRate = 10
			femaleRate = 1
			console.log ('value too high, supressing females')
			console.log ('Current Rates: ' + maleRate + ' M/Ms and '+ femaleRate + ' F/Click')

		} else {

			maleRate = 1
			femaleRate = 2

		}
		
		if (males < 100 && females >= 0) {

			// console.log ('value 1 ' + males + "%, and " + females + "% value 2");
			console.log ('Current Rates: ' + maleRate + ' M/Ms and '+ femaleRate + ' F/Click')
			females -= maleRate
			males += maleRate
			$('#males').css('width', males+"%");
			$('#females').css('width', females+"%");
			$('#maleCounter').text('Males: ' + males + '%')
			$('#femaleCounter').text('Females: ' + females + '%')
		
		} else if (males == 100) {

			$('#maleCounter').text('Males: 100%')
			$('#femaleCounter').text('Females: 0%')
			males = 100
			clearInterval(reduceFemales)
			// console.log ('males at 100!')

		}	


	}

	setInterval(reduceFemales, 50);

	$('#chartBase').mouseup(function () {

		// console.log ('clicked!')
		females += 5;
		males -= 5;
		$('#females').css('width', females+"%");
		$('#males').css('width', males+"%");

	})


})

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