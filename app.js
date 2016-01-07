			var userName = prompt('What\'s your name friend ?');
      console.log(' The user\'s name is ' + userName);
			alert(' Okay ' + userName + ', I hope you are here to learn about me. If not... forget it let\'s begin !');

			var firstTry= 0


			var questionOne = prompt("Do I want to go into the game industry ? \
				  Yes, or No ");
					if (questionOne.toUpperCase() === 'Y' || questionOne.toUpperCase() === 'YES') {
					alert("Right !My end goal is to go into game development!");


					 firstTry+= 1


				} else {
					alert( "nope")
				}


				var questionTwo = prompt("Do i have any siblings ? Yes or No");
				if (questionTwo.toUpperCase() === "Y" || questionTwo.toUpperCase() === "yes") {
				alert("Right, three brothers.");

				firstTry += 1

			} else {
				alert("nope!")
			}

			var questionThree =  prompt(" Yes or No ? (yes is the answer)");
				if (questionThree.toUpperCase() === "Y" || questionThree.toUpperCase() === "Yes") {
				alert("Right, it would be hard to mess that one up");

				firstTry += 1

			} else {
				alert("Come on man...")
			}

					var questionFour = prompt(" What is your favorite number between 1 and 10 ? ");
						if (questionFour == 7) {
						alert("Right!");
						firstTry +=1
					} else if(questionFour <=  7) {
							alert('Nope, too low');
					 	} else {
							alert("Nope, too high");
						}
				alert("I know you are happy you know more about me \n see ya later !");


				alert(firstTry + ' correct Answers ' );
