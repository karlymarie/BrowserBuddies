//THINGS LEFT TO DO:
// - make the step animations! Yay! Check out the article Anne shared with you 
// - Figure out a way to fix the positioning issue:
//		Character's next action should begin where the last action ended
//		Can we make it that when the character runs off the screen on one side, 
//		it comes back on the screen on the other side?
// ???????? use window.width, measure the size of the character use x and y coordinates if x is less than 0, reposition to other side

// - Actually make this into a plug-in
// - Decide if they get any options with this
// - Write all the documentation and make a pretty page for it



// $.fn.browserBuddies = function() {

var app = {};


app.events = function() {

	//Pet character will appear when a button is clicked
	//The character will drop from the top of the screen to the bottom
	$( ".onSwitch" ).click(function() {
	   $(".kittyCat-container").animate({
	   	top: '75%'}, 2000);

	   //have set interval loop
	   //for every loop, run action randomizer
	   //store return value from it in a variable
	   //with that variable, apply id to kittyCat-container
	   // and then run THIS!! app.randomizedActions();

	   setInterval(function() {
      		var action = app.actionRandomizer(actions);
      		$(".kittyCat-container").attr('id', action);
			app.randomizedActions();
		}, 
		// Do something every 3 seconds
		3000);

	   
	});

	//There will also be a clear button, if for SOME reason, someone doesn't want a cute character on their page
	$( ".offSwitch" ).click(function() {
	   $(".kittyCat-container")
	   .addClass('runLeft')
		   .removeClass('yawn')
		   .removeClass('crawlLeft')
		   .removeClass('chasingTail')
		   .removeClass('kittyCat')
		   .removeClass('sleeping')
		   .removeClass('walkLeft')
		   .removeClass('walkRight')
		   .removeClass('crawlRight')
		   .removeClass('runRight')
		   .animate({left: '-10000px'}, 10000)
	   ; 
	});	


};


//These actions will run on their own, after the initial drop
//No clicking required
//Will run randomly


app.randomizedActions = function() {


	   $("#walkLeft").addClass('walkLeft')
		   .removeClass('runLeft')
		   .removeClass('yawn')
		   .removeClass('crawlLeft')
		   .removeClass('chasingTail')
		   .removeClass('kittyCat')
		   .removeClass('sleeping')
		   .removeClass('runRight')
		   .removeClass('walkRight')
		   .removeClass('crawlRight')
	   ;

	   $("#runLeft").addClass('runLeft')
		   .removeClass('walkLeft')
		   .removeClass('yawn')
		   .removeClass('crawlLeft')
		   .removeClass('chasingTail')
		   .removeClass('kittyCat')
		   .removeClass('sleeping')
		   .removeClass('runRight')
		   .removeClass('walkRight')
		   .removeClass('crawlRight')
	   ;

	    $("#yawn").addClass('yawn')
		   .removeClass('walkLeft')
		   .removeClass('runLeft')
		   .removeClass('crawlLeft')
		   .removeClass('chasingTail')
		   .removeClass('kittyCat')
		   .removeClass('sleeping')
		   .removeClass('runRight')
		   .removeClass('walkRight')
		   .removeClass('crawlRight')
	   ;

	    $("#crawlLeft")
		   // .animate({right:'400px'}, 2000)
		   .addClass('crawlLeft')
		   .removeClass('walkLeft')
		   .removeClass('runLeft')
		   .removeClass('yawn')
		   .removeClass('chasingTail')
		   .removeClass('kittyCat')
		   .removeClass('sleeping')
		   .removeClass('runRight')
		   .removeClass('walkRight')
		   .removeClass('crawlRight')
		;

	   $("#chasingTail").addClass('chasingTail')
		   .removeClass('walkLeft')
		   .removeClass('runLeft')
		   .removeClass('yawn')
		   .removeClass('crawlLeft')
		   .removeClass('kittyCat')
		   .removeClass('sleeping')
		   .removeClass('runRight')
		   .removeClass('walkRight')
		   .removeClass('crawlRight')
	   ;

	   $('#sleeping').addClass('sleeping')
	   		.removeClass('walkLeft')
		   .removeClass('runLeft')
		   .removeClass('yawn')
		   .removeClass('crawlLeft')
		   .removeClass('kittyCat')
		   .removeClass('chasingTail')
		   .removeClass('runRight')
		   .removeClass('walkRight')
		   .removeClass('crawlRight')
		;

		$('#runRight').addClass('runRight')
			.removeClass('walkLeft')
		   .removeClass('runLeft')
		   .removeClass('yawn')
		   .removeClass('crawlLeft')
		   .removeClass('kittyCat')
		   .removeClass('chasingTail')
		   .removeClass('walkRight')
		   .removeClass('crawlRight')
		   .removeClass('sleeping')
		 ;

		$('#walkRight').addClass('walkRight')
			.removeClass('walkLeft')
		   .removeClass('runLeft')
		   .removeClass('yawn')
		   .removeClass('crawlLeft')
		   .removeClass('kittyCat')
		   .removeClass('chasingTail')
		   .removeClass('runRight')
		   .removeClass('crawlRight')
		   .removeClass('sleeping')

		 ;

		$('#crawlRight').addClass('crawlRight')
		.removeClass('walkLeft')
		   .removeClass('runLeft')
		   .removeClass('yawn')
		   .removeClass('crawlLeft')
		   .removeClass('kittyCat')
		   .removeClass('chasingTail')
		   .removeClass('runRight')
		   .removeClass('walkRight')
		   .removeClass('sleeping')

		 ;


	   


	   // $("#runLeft").animate({
	   // 	right: '100%'},2000);

	   // $("#rollRight").animate({
	   // 	right: '100%'},2000);

}


//Each of the following actions (Walking, Rolling, etc) will be in an array
//The actions will be called upon randomly using a random number function
//No click required for these actions, they will just continually move and play on screen

//Make the actions/events randomized:
//***********************************
//===================================

app.randomNumber = function(n) {
	return (Math.floor(Math.random() * n) );
};

app.actionRandomizer = function(actionArray) {
	var randomActionIndex = app.randomNumber(actionArray.length)
	var randomAction = actionArray[randomActionIndex];
	return randomAction;
};

var actions = ['runLeft', 'walkLeft', 'crawlLeft', 'yawn', 'chasingTail', 'runRight'];


app.init = function() {
	app.events();
};

$(function() {
	app.init();
});

// };


//*******************************************************************************************
//*******************************************************************************************

//If you can accomplish any of the above, ;) try adding in some on .click or on .hover actions! 
//You could also add a drag and drop action

