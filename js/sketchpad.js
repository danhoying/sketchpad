$(document).ready(function() {

    function createSquares() {
    	for (var i = 0; i < 16; i++) { // 16 is the intial number of squares created
			$("#container").append('<div class="square"></div>');
		}
		var squareSize = (Math.sqrt((560 * 560)/(16))); // Calculates total area to determine
		$(".square").height(squareSize);				// square size relative to container size
		$(".square").width(squareSize);					// defined in css.
	}
	createSquares();

	// Draws squares on canvas on mouse hover. Decreases opacity on each pass.
	function drawSquares() {
		$(".square").hover(function() {
			$(this).css({"background-color" : "black"});
			var opacity = $(this).css("opacity");
					if (opacity <= 1) {
						$(this).css("opacity", opacity - 0.1);
					}
		});	
	}
	drawSquares();

	function squaresPerSide() {
		var max = 50; // Max squares per side a user can enter. Too slow above this point.
		while (!resolution <= max) {
			var resolution = prompt("How many squares per side would you like? Enter a number between 1 and 50.");
			if (resolution <= max) {
				return resolution * resolution; // Returns total number of squares in canvas.
			}
			else {
			alert("Please enter a number between 1 and 50.");
			}	
		}
	}

	function canvasClear() {
		$(".square").css({"background-color" : "#C0C0C0"});
		$(".square").css({"opacity" : 1});
	}

	function createNewSquares(){
		$(".square").remove();
		var numSquares = squaresPerSide();
		for (var i = 0; i < numSquares; i++) {
			$("#container").append('<div class="square"></div>');
		}
		var squareSize = (Math.sqrt((560 * 560)/(numSquares)));
		$(".square").height(squareSize);
		$(".square").width(squareSize);
	}

	// Button press creates new canvas with user-defined number of squares.
	$("#newCanvas").click(function() { 
		createNewSquares();
		drawSquares();
	});

	// Button press creates new canvas with user-defined number of squares and random colors.
	$("#newColorfulCanvas").click(function() { 
		createNewSquares();
		$(".square").hover(function() {
			var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + 
				(Math.floor(Math.random() * 256)) + ',' + 
				(Math.floor(Math.random() * 256)) + ')';
			$(this).css({"background-color" : randomColor});
		});
	});

	// Button press applies a ghost 'burn in' effect on the existing canvas.
	$("#ghostEffect").click(function() {
		$(".square").mouseenter(function() {
			$(this).fadeTo("slow", 0);
		});
		$(".square").mouseleave(function() {
			$(this).fadeTo("slow", 1);
		});
	});

	// Button press clears the canvas.
	$("#clearCanvas").click(function() { 
		canvasClear();
	});
});