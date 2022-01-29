$(document).ready(function () {
	var level = 1;
	var liveCount = 3;
	var noSkips = 7;
	var skips = 0;
	var cantTouch = false;
	
	function roomLevel(){
		switch(level){
			case 1:
				lvOne()
				break;
			case 2:
				lvTwo()
				break;
			case 3:
				lvThree()
				break;
			case 4:
				lvFour()
				break;
			case 5:
				lvFive()
				break;
			case 6:
				lvSix()
				break;
			case 7:
				lvSeven()
				break;
			case 8:
				lvEight()
				break;
			case 9:
				lvNine()
				break;
			case 10:
				lvTen()
				break;
      case 11:
				lvEleven()
				break;
      case 12:
				lvTwelve()
				break;
      case 13:
				lvThirteen()
				break;
      case 14:
				lvFourteen()
				break;
      case 15:
				lvFifteen()
				break;
      case 16:
				lvSixteen()
				break;
      case 17:
				lvSeventeen()
				break;
      case 18:
				lvEighteen()
				break;
      case 19:
				lvNineteen()
				break;
			case 20:
        lvTwenty()
				break;
      case 21:
        lvTwentyOne()
				break;
      case 22:
				lvEnd()
				break;
			default:
				alert('Error. Refresh page');
		}
	}
	roomLevel()
	function restart(){
		$('#q1,#q2,#q3,#q4').css({'font-size':'50px','font-family':'Apple Chancery, cursive','color':'black'});
		$('#gameOverScreen').hide();
		$('#leftMouseHere,#rightMouseHere,#notThis1,#notThis2,#notThis3,#notThis4,#notThis5,#notThis6,#hiddenCorrect,.sec,#tenOne,#tenTwo,#tenThree,#tenFour,#tenFive').remove();
    $('#measure').remove();
		$('.Qs,.qContainer').show();
		level = 1;
		liveCount = 3;
		noSkips = 7;
		skips = 0;
		cantTouch = false;
		roomLevel();
	}
  /* Let's know the definition of an antonym */
	function lvOne() {
		$('#questionText').html('1.');
		$('#titleText').html('Which is an Antonym to Bad?').css({ 'font-size': '50px' });
		$('#q1').html('Mad');
		$('#q2').html('Wild');
		$('#q3').html('Ugly');
		$('#q4').html('Good');
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	/* Just a fun way to push someone to scroll through socials 
		might put this towards the end to deter from guessing */
	function lvTwo() {
		$('#questionText').html('2.');
		$('#titleText').html('When did Antonymn go live on socials?').css({ 'font-size': '50px' });
		$('#q1').html('January 1st, 2022').css({ 'font-size': '25px' });
		$('#q2').html('December 11th, 2020').css({ 'font-size': '25px' });
		$('#q3').html('November 11th, 2021').css({ 'font-size': '25px' });
		$('#q4').html('April 3rd, 2005').css({ 'font-size': '25px' });
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	/* Fun question, we can choose an actual question 
		for this */
	function lvThree() {
		$('#questionText').html('3.');
		$('#titleText').html('.SDRAWKCAB NOITSEUQ SIHT REWSNA').css({ 'font-size': '50px' });
		$('#q1').html('K.O');
		$('#q2').html('WHAT?');
		$('#q3').html('I DON\'T UNDERSTAND').css({ 'font-size': '29px' });
		$('#q4').html('TENNIS ELBOW').css({ 'font-size': '30px' });
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	/* Or we can put antonym on the screen somewhere hidden to select */
	function lvFour() {
		$('#questionText').html('4.');
		$('#titleText').html('CLICK <span id="answerTo4">THE ANSWER</span>').css({ 'font-size': '60px' });
		$('#q1').html('C-01').css({ 'font-size': '30px', 'color': 'red' });
		$('#q2').html('BAYC').css({ 'font-size': '30px', 'color': 'red' });
		$('#q3').html('PixelMon').css({ 'font-size': '30px', 'color': 'red' });
		$('#q4').html('HapeBeast').css({ 'font-size': '30px', 'color': 'red' });
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	/* DON'T TOUCH BUBBLE BOY or pop his bubbles! */
	function lvFive() {
		$('#leftMouseHere').remove();
		$('#rightMouseHere').remove();
		$('#questionText').html('5.');
		$('#titleText').html('PUT THE MOUSE......<br/> ..... ON HERE');
		$('#bottom').before('<div id="rightMouseHere">Here</div>')
		$('#game').css({ 'overflow': 'hidden', 'background': 'white' });
		$('.qContainer').hide();
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	/* pick the correct way to reroll in chat */
	function lvSix() {
		$('.qContainer').show();
		$('#leftMouseHere').remove();
		$('#rightMouseHere').remove();
		$('#game').css({ 'overflow': 'visible', 'background': 'white' });
		$('#questionText').html('6.');
		$('#titleText').html('Reroll Please!');
		$('#q1').html('!reroll').css({ 'font-size': '50px', 'color': 'black' });
		$('#q2').html('greroll').css({ 'font-size': '50px', 'color': 'black' });
		$('#q3').html('!greroll').css({ 'font-size': '50px', 'color': 'black' });
		$('#q4').html('reroll').css({ 'font-size': '50px', 'color': 'black' });
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	/* Pick in order of the intro video 
	1.vast
	2.chaos
	3.Thunder
	4.Pride
  */
	function lvSeven() {
		$('#questionText').html('7.');
		$('#titleText').html('Were you watching closely?').css({ 'font-size': '40px' });
		$('#q1').html('Thunder');
		$('#q2').html('Chaos');
		$('#q3').html('Vast');
		$('#q4').html('Pride').css({ 'font-size': '40px' });
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	/* I plan to throw 5 other projects and you have to find the antonym.  */
	function lvEight() {
		$('#notThis1,#notThis2,#notThis3,#notThis4,#notThis5,#notThis6,#hiddenCorrect').remove();
		$('#questionText').html('8.');
		$('#titleText').html('SEARCH!');
		$('.qContainer').hide();
		$('#bottom').before('<div id="notThis1">Nope</div><div id="notThis2">No</div><div id="notThis3">Keep looking</div><div id="notThis4">Try again</div><div id="notThis5">:\(</div><div id="notThis6">X</div><div id="hiddenCorrect"><i class="fa fa-check" aria-hidden="true"></i></div>')
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	/* This one is fun and I want to leave near the beginning
		because for most this will be a complete guess */
	function lvNine() {
		$('.qContainer').show();
    $('#q1,#q2,#q3').show();
		$('#notThis1,#notThis2,#notThis3,#notThis4,#notThis5,#notThis6,#hiddenCorrect').hide();
		$('#questionText').html('9.');
		$('#titleText').html('WHAT WAS THE ANSWER TO QUESTION 2?').css({ 'font-size': '50px' });
		$('#q1').html('THAT ONE →').css({ 'font-family': 'arial', 'font-size': '30px' });
		$('#q2').html('THAT ONE ↙').css({ 'font-family': 'arial', 'font-size': '30px' });
		$('#q3').html('THAT ONE ↑').css({ 'font-family': 'arial', 'font-size': '30px' });
		$('#q4').html('THIS ONE').css({ 'font-family': 'arial', 'font-size': '40px' });
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	/* Who likes math anyways? */
	function lvTen() {
		$('#questionText').html('<span id="answerTo10">10.</span>').css({ 'font-size': '40px' });
		$('#titleText').html('5+10*50/25-15').css({ 'font-size': '40px' });
		$('#q1').html('5');
		$('#q2').html('15');
		$('#q3').html('75');
		$('#q4').html('500');
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	/* need to imput the correct neck measurements needs image */
	function lvEleven() {
		$('#questionText').html('11.');
		$('#titleText').html('Insert pic of an Antonym, take inputs for length of neck').css({ 'font-size': '40px' });
		$('#q1').hide();
		$('#q2').hide();
		$('#q3').hide();
		$('#q4').hide();
    $('#measure').show();
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	/* Who is Antonym's artist insert pic plus name
Carlos Hernández
Camille Chiang
*/
	function lvTwelve() {
		$('#questionText').html('12.');
		$('#titleText').html('Who is not on Antonym\'s creative team?').css({ 'font-size': '40px' });
    $('#q1,#q2,#q3,#q4').show();
    $('#form').hide();
		$('#q1').html('CamilleChiang.eth');
		$('#q2').html('CharlieHdz');
    $('#q3').html('Steve');
    $('#q4').html('48mm');
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	/* Which mod is this? show pic, find name */
	function lvThirteen() {
		$('#questionText').html('13.');
		$('#titleText').html('Which mod is this?').css({ 'font-size': '40px' });
		$('#q1').html('Conflicts');
		$('#q2').html('Snowwy');
    $('#q3').html('Tlop');
    $('#q4').html('Fungi');
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	/* Which is a real antonym design? add images */
	function lvFourteen() {
		$('#questionText').html('14.');
		$('#titleText').html('Which is a real antonym design?').css({ 'font-size': '40px' });
		$('#q1').html('26mm');
		$('#q2').html('48mm');
		$('#q3').html('10000');
		$('#q4').html('500');
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	/* guessing game in the casino */
	function lvFifteen() {
		$('#questionText').html('15.');
		$('#titleText').html('/guess 100 coins guess a number between 1 and 100 your guess 50, you\'re correct').css({ 'font-size': '10px' });
		$('#q1').html('100');
		$('#q2').html('1000');
		$('#q3').html('10000');
		$('#q4').html('500');
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	/* pick the real VC option */
	function lvSixteen() {
		$('#questionText').html('16.');
		$('#titleText').html('Join the VC').css({ 'font-size': '10px' });
		$('#q1').html('Gaming-VC-2').css({ 'font-size': '30px' });
		$('#q2').html('Gaming 2');
		$('#q3').html('Gaming VC #2');
		$('#q4').html('Gamin VC 3');
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	/* Tough question, just for fun. 
	  Maybe there is a good number we like to do this with? */
	function lvSeventeen() {
		$('#questionText').html('17.').hide();
		$('#titleText').html('What level is this?').css({ 'font-size': '10px' });
		$('#q1').html('18');
		$('#q2').html('19');
		$('#q3').html('17');
		$('#q4').html('16');
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	/* Let's know how to spell antonym */
	function lvEighteen() {
		$('#questionText').html('18.').show();
		$('#titleText').html('Read Carefully').css({ 'font-size': '10px' });
		$('#q1').html('Antonymn');
		$('#q2').html('Antonym');
		$('#q3').html('Ayntonm');
		$('#q4').html('Antynim');
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	/* Not sure if this is something we know */
	function lvNineteen() {
		$('#questionText').html('19.');
		$('#titleText').html('What design software do we make Antonyms on?').css({ 'font-size': '10px' });
		$('#q1').html('Blender');
		$('#q2').html('Autodesk');
		$('#q3').html('Rhino');
		$('#q4').html('Zbrush');
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
	/* For the crypto fans */
	function lvTwenty() {
		$('#questionText').html('20.');
		$('#titleText').html('What ETH chain will Antonym be on?').css({ 'font-size': '10px' });
		$('#q1').html('ERC-20');
		$('#q2').html('ERC-1155');
		$('#q3').html('ERC-721');
		$('#q4').html('ERC-523');
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
/* Founder Q */
	function lvTwentyOne() {
		$('#questionText').html('20.');
		$('#titleText').html('Which is our pair of founders?')
		$('#q1').html('Amm and Tim');
		$('#q2').html('Reuben and Andy');
		$('#q3').html('Nate and Amm');
		$('#q4').html('Amm and Reuben');
		$('#liveText').html(liveCount);
		$('#skips').html('<i class="fa fa-arrow-right aSkip" aria-hidden="true"></i>'.repeat(skips) + '<i class="fa fa-arrow-right" aria-hidden="true"></i>'.repeat(noSkips));
		checkForLives()
	}
  /* Win function */
	function lvEnd(){
		$('body').append('<div id="win">YOU WON!!</div>')
	}
	function gameOver(){
		$('#gameOverScreen').show();
		$('#game').css({'overflow':'hidden'});
	}
	$('#againGameOver').click(function(){
		restart();
		//location.reload();
	});
	function checkForLives(){
		if (liveCount <= 0){
			gameOver();
		}
	}
	function loseLife(){
		liveCount--;
		$('#wrong').fadeIn( "slow" ).fadeOut( "slow" );;
	}
	$('#q1').click(function () {
		switch (level) {
			case 1:
				loseLife();
				lvOne();
				break;
			case 2:
				loseLife();
				lvTwo()
				break;
			case 3:
				level++;
				roomLevel()
				break;
			case 4:
				loseLife();
				lvFour()
				break;
			case 6:
				loseLife();
				lvSix()
				break;
			case 7:
				if ($('#q2').is(':hidden')) {
					$('#q1').hide();
					lvSeven()
				} else {
					loseLife();
					lvSeven()
				}
				break;
			case 9:
				loseLife();
				lvNine()
				break;
			case 10:
				loseLife();
				lvTen()
				break;
      case 11:
				loseLife();
				lvEleven()
				break;
			case 12:
				loseLife();
				lvTwelve()
				break;
			case 13:
				level++;
				roomLevel()
				break;
			case 14:
				loseLife();
				lvFourteen()
				break;
			case 15:
				loseLife();
				lvFifteen()
				break;
			case 16:
				loseLife();
				lvSixteen()
				break;
			case 17:
				loseLife();
				lvSeventeen()
				break;
			case 18:
				loseLife();
				lvEighteen()
				break;
      case 18:
				level++;
				roomLevel()
				break;
      case 20:
				loseLife();
				lvTwenty()
				break;  
      case 21:
				loseLife();
				lvTwentyOne()
				break;  
			default:
				alert('Error. Refresh page');
		}
	});
	$('#q2').click(function () {
		switch (level) {
			case 1:
				loseLife();
				lvOne();
				break;
			case 2:
				loseLife();
				lvTwo()
				break;
			case 3:
				loseLife();
				lvThree()
				break;
			case 4:
				loseLife();
				lvFour()
				break;
			case 6:
				loseLife();
				lvSix()
				break;
			case 7:
				if ($('#q3').is(':hidden')) {
					$('#q2').hide();
					lvSeven()
				} else {
					loseLife();
					lvSeven()
				}
				break;
			case 9:
				loseLife();
				lvNine()
				break;
			case 10:
				loseLife();
				lvTen()
				break;
			case 11:
				loseLife();
				lvEleven()
				break;
			case 12:
				loseLife();
				lvTwelve()
				break;
			case 13:
				loseLife();
				lvThirteen()
				break;
			case 14:
				loseLife();
				lvFourteen()
				break;
			case 15:
				loseLife();
				lvFifteen()
				break;
			case 16:
				loseLife();
				lvSixteen()
				break;
			case 17:
				loseLife();
				lvSeventeen()
				break;
			case 18:
				level++;
				roomLevel()
				break;
      case 19:
				loseLife();
				lvNineteen()
				break;
      case 20:
				loseLife();
				lvTwenty()
				break;
      case 21:
				loseLife();
				lvTwentyOne()
				break;
			default:
				alert('Error. Refresh page');
		}
	});
	$('#q3').click(function () {
		switch (level) {
			case 1:
				loseLife();
				lvOne();
				break;
			case 2:
				level++;
				roomLevel()
				break;
			case 3:
				loseLife();
				lvThree()
				break;
			case 4:
				loseLife();
				lvFour()
				break;
			case 6:
				level++;
				roomLevel()
				break;
			case 7:
				$('#q3').hide();
				lvSeven()
				break;
			case 9:
				level++;
				roomLevel()
				break;
			case 10:
				loseLife();
				lvTen()
				break;
			case 11:
				level++;
				roomLevel()
				break;
			case 12:
				level++;
				roomLevel()
				break;
			case 13:
				loseLife();
				lvThirteen()
				break;
			case 14:
				loseLife();
				lvFourteen()
				break;
			case 15:
				level++;
				roomLevel()
				break;
			case 16:
				loseLife();
				lvSixteen()
				break;
			case 17:
				level++;
				roomLevel()
				break;
			case 18:
				loseLife();
				lvEighteen()
				break;
      case 19:
				loseLife();
				lvNineteen()
				break;
      case 20:
				level++;
				roomLevel()
				break;
      case 21:
				loseLife();
				lvTwentyOne()
				break;
			default:
				alert('Error. Refresh page');
		}
	});
	$('#q4').click(function () {
		switch (level) {
			case 1:
				level++;
				roomLevel()
				break;
			case 2:
				loseLife();
				lvTwo()
				break;
			case 3:
				loseLife();
				lvThree()
				break;
			case 4:
				loseLife();
				lvFour()
				break;
			case 6:
				loseLife();
				lvSix()
				break;
			case 7:
				if ($('#q1').is(':hidden')) {
					level++;
				  roomLevel()
				} else {
					loseLife();
					lvSeven()
				}
				break;
			case 9:
				loseLife();
				lvNine()
				break;
			case 10:
				loseLife();
				lvTen()
				break;
			case 11:
				loseLife();
				lvEleven()
				break;
			case 12:
				loseLife();
				lvTwelve()
				break;
			case 13:
				loseLife();
				lvThirteen()
				break;
			case 14:
				level++;
				roomLevel()
				break;
			case 15:
				loseLife();
				lvFifteen()
				break;
			case 16:
				level++;
				roomLevel()
				break;
			case 17:
				loseLife();
				lvSeventeen()
				break;
			case 18:
				loseLife();
				lvEighteen()
				break;
      case 19:
				loseLife();
				lvNineteen()
				break;
      case 20:
				loseLife();
				lvTwenty()
				break;
      case 21:
				level++;
				roomLevel()
				break;
			default:
				alert('Error. Refresh page');
		}
	});
  $('#questionText').click(function(){
    switch (level) {
      case 10:
        level++;
        roomLevel()
    }
  });
	
	$(document).on('click','#answerTo4',function(){
		level++;
		roomLevel();
	});
	
	$(document).on('mouseenter','#rightMouseHere',function(){
		$(this).html('GO');
		$('#titleText').html('NOW, DON\'T TOUCH THE BLUE!');
		$('#game').css({'background-color':'deepskyblue'});
		if ($('#leftMouseHere').length){
			return false;
		} else {
			$('#bottom').before('<div id="leftMouseHere">Next Question</div>');
		}
		cantTouch = true;
	});
	$('#game').mouseover(function(){
		if (cantTouch == true){
			if ($('#rightMouseHere').is(':hover')) {
				return false;
			} else if ($('#leftMouseHere').is(':hover')) {
				level++;
				roomLevel();
				return false;
			} loseLife();
			lvFive()
			cantTouch = false;
		}
	});
	$(document).on('mouseenter','#leftMouseHere',function(){
		
	});
	$(document).on('click','#notThis1,#notThis2,#notThis3,#notThis4,#notThis5,#notThis6',function(){
		loseLife();
		lvEight();
	});
	$(document).on('click','#hiddenCorrect',function(){
		level++;
		roomLevel();
	});
	$(document).on('click','#tenTwo',function(){
		level++;
		skips++;
		noSkips--;
		lvTen();
		roomLevel();
	});
	$(document).on('click','#tenOne,#tenThree,#tenFour,#tenFive',function(){
		loseLife()
		lvTen();
	});
  $('#submit').click(function () {
    if (document.getElementById('fnum').value!="26"){
      loseLife()
      lvEleven();
    } else if (document.getElementById('snum').value!="48"){
      loseLife()
      lvEleven(); 
    } else{
      level++;
      roomLevel();
    }
  });
});