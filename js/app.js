'use strict';

console.log('hey world heyyyy!');

let guestName = prompt('What is your name?');

let score = 0;

alert(`Welcome to my site ${guestName}! Kindly answer yes or no to the following questions.`);



function born(){
  let firstQuestionguess = prompt('Am I born and raised in the US?').toUpperCase();

  if (firstQuestionguess === 'Y' || firstQuestionguess === 'YES'){
    alert('Sorry you are wrong');
  } else if (firstQuestionguess === 'N' || firstQuestionguess === 'NO'){
  // console.log('That is correct.I was born and raised in Nairobi Kenya.');
    alert('That is correct.I was born and raised in Nairobi Kenya.');
    score++;

  }
}
born();

function bachelors(){
  let secondQuestionguess = prompt('Do I have a bachelors?').toLowerCase();

  if (secondQuestionguess === 'y' || secondQuestionguess ==='yes'){
  // console.log('Yay!That is true. I have a bachelors in Commerce.');
    alert('Yay!That is true. I have a bachelors in Commerce.');
    score++;
  }else if(secondQuestionguess === 'n' || secondQuestionguess === 'no'){
    alert('Sorry that is incorrect.');
  }
}

bachelors();

function videogames(){
  let thirdquestionguess = prompt('Do I play video games?').toUpperCase();

  if(thirdquestionguess === 'Y' || thirdquestionguess === 'YES'){
  // console.log('That is correct. Video games are my favorite!');
    alert('That is correct. Video games are my favorite!');
    score++;
  }else if(thirdquestionguess === 'N' || thirdquestionguess === 'NO'){
    alert('Sorry you are wrong.');
  }
}

videogames();
// console.log('score', score);


function travel(){
  let fourthQuestionguess = prompt('Do I like to travel?').toLowerCase();

  if(fourthQuestionguess === 'y' || fourthQuestionguess === 'yes' ){
  // console.log('You are correct.I could travel the whole world if I could.');
    alert('You are correct.I could travel the whole world if I could.');
    score++;
  }else if(fourthQuestionguess === 'n' || fourthQuestionguess === 'no'){
    alert('Sorry that is incorrect');
  }
}

travel();


function retire(){
  let fifthQuestionguess = prompt('Do I plan to retire in the US?').toUpperCase();

  if(fifthQuestionguess === 'Y' || fifthQuestionguess === 'YES'){
    alert('Sorry that is incorrect');
  }else if(fifthQuestionguess === 'N' || fifthQuestionguess === 'NO'){
  // console.log('You are correct. I wanna retire back home in Kenya!');
    alert('You are correct. I wanna retire back home in Kenya!');
    score++;
  }
}

retire();

function guessinggame(){
  let numGuesses;

  for (numGuesses = 0; numGuesses < 4; numGuesses++ ){
    let sixthQuestionguess = +prompt('What is the number of my top destinations?');
    if(sixthQuestionguess > 10 ){
      alert('too high!');
    }else if(sixthQuestionguess < 10){
      alert('too low!');
    }else if(sixthQuestionguess === 10){
      alert('Yay!That is correct.');
      score++;
      break;
    }else{
      alert('Please type in a number');
    }
  }
}

guessinggame();

// if(numGuesses >= 4){
//   alert('All attempts have been exhausted!Correct number is 10');
// }
// }



// function(){
//   let Top10Destinations = ['the great pyramid of giza', 'eiffel tower', 'Machu Pichu', 'Grand Canyon', 'Hawai', 'Chichen Itza', 'Cape of Good Hope', 'Denali National Park', 'Maasai Mara', 'Switzerland'];

// let Guesscount = 0;
// let bool = false;
// while (Guesscount < 6 && bool === false) {

//   let seventhQuestionguess = prompt('What is one of my Top 10 Destinations?');

//   Guesscount++;
//   for (let i = 0; i < Top10Destinations.length; i++) {
//     console.log(seventhQuestionguess, Top10Destinations[i]);
//     if (seventhQuestionguess === Top10Destinations[i]) {
//       alert(`You are correct! These are my top 10 destinations : ${Top10Destinations}!`);
//       score++;
//       bool = true;
//       break;
//     }
//   }
//   if (bool === false) {
//     alert(`Sorry that is incorrect.These are my top 10 destinations : ${Top10Destinations}!`);
//   }
// }
// }
// alert(`Thank you for playing ${guestName}.You scored ${score} points.`);

