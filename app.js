var res1 = document.getElementById('resultOne');
var res2 = document.getElementById('resultTwo');
var res3 = document.getElementById('resultThree');
var res4 = document.getElementById('resultFour');


var userName = prompt('What\'s your name friend?');
console.log('The user\'s name is ' + userName);
alert('Okay ' + userName + ', I hope you are here to learn about me. If not... forget it let\'s begin!');

var firstTry = 0;

qOne();
qTwo();
qThree();
qFour();


function qOne() {
	var questionOne = prompt('Do I want to go into the game industry? Yes or No');
	if ((questionOne.toUpperCase() === "Y") || (questionOne.toUpperCase() === "YES")) {
		firstTry++;
		console.log(firstTry);
		res1.textContent = 'Right!  My end goal is to go into game development!';
	} else {
		res1.textContent = 'nope';
	}
}

function qTwo() {
	var questionTwo = prompt('Do i have any siblings? Yes or No');
	if ((questionTwo.toUpperCase() === 'Y') || (questionTwo.toUpperCase() === 'YES')) {``
		firstTry++;
		console.log(firstTry);
		res2.textContent = 'Right, three brothers.';
	} else {
		res2.textContent = 'nope!';
	}
}

function qThree() {
	var questionThree =  prompt('Yes or No ? (yes is the answer)');
	if ((questionThree.toUpperCase() === 'Y') || (questionThree.toUpperCase() === 'YES')) {
		res3.textContent = 'Right, it would be hard to mess that one up';
		firstTry++;
		console.log(firstTry);
	} else {
		res3.textContent = 'Come on man...';
	}
}

function qFour() {
	var questionFour = prompt('What is your favorite number between 1 and 10?');
	if (questionFour == 7) {
		res4.textContent = 'Right!';
		firstTry++;
		console.log(firstTry);
	} else if(questionFour <  7) {
		res4.textContent = 'Nope, too low';
	} else {
		res4.textContent = 'Nope, too high';
	}
}
	alert('I know you are happy you know more about me \n see ya later!');

	alert(firstTry + ' correct Answers');
