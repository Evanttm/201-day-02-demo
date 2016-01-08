var res1 = document.getElementById('resultOne');
var res2 = document.getElementById('resultTwo');
var res3 = document.getElementById('resultThree');
var res4 = document.getElementById('resultFour');


var userName = prompt('What\'s your name friend?');
console.log('The user\'s name is ' + userName);
alert('Okay ' + userName + ', I hope you are here to learn about me. If not... forget it let\'s begin!');

var firstTry = 0;
var questData = [['Do I want to go into the game industry? Yes or No',
	'Y',
	'YES',
	'Right! My end goal is to go into game development!',
	'Nope.',
	res1],
	['Do I have any siblings? Yes or No',
	'Y',
	'YES',
	'Right, three brothers.',
	'Nope',
	res2],
	['Yes or No? Yes is the answer',
	'Y',
	'YES',
	'Right, it would be hard to mess that one up.',
	'Come on, man...',
	res3]];

function askQuestion() {
	var questionOne = prompt(questData[i][0]);
	if ((questionOne.toUpperCase() === questData[i][1]) || (questionOne.toUpperCase() === questData[i][2])) {
		//right answer
		firstTry++;
		console.log(firstTry);
		questData[i][5].textContent = questData[i][3];
		questData[i][5].className = 'right'
	} else {
		//wrong answer
		questData[i][5].textContent = questData[i][4];
		questData[i][5].className = 'wrong'
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

for (var i = 0; i < questData.length; i++) {
	askQuestion();
}
qFour();

alert('I know you are happy you know more about me \n see ya later!');

alert(firstTry + ' correct Answers');
