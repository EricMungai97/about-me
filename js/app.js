'use strict';

console.log('hey world heyyyy!');

let guestName = prompt('What is your name?');

alert(`Welcome to my site ${guestName}! Kindly answer yes or no to the following questions.`);

let firstQuestionguess = prompt('Am I born and raised in the US?').toUpperCase();

if( firstQuestionguess === 'Y' || firstQuestionguess === 'YES'){
  alert('Sorry you are wrong');
}else if(firstQuestionguess === 'N' || firstQuestionguess === 'NO'){
  // console.log('That is correct.I was born and raised in Nairobi Kenya.');
  alert('That is correct.I was born and raised in Nairobi Kenya.');

}

let secondQuestionguess = prompt('Do I have a bachelors?').toLowerCase();

if (secondQuestionguess === 'y' || secondQuestionguess ==='yes'){
  // console.log('Yay!That is true. I have a bachelors in Commerce.');
  alert('Yay!That is true. I have a bachelors in Commerce.');
}else if(secondQuestionguess === 'n' || secondQuestionguess === 'no'){
  alert('Sorry that is incorrect.');
}

let thirdquestionguess = prompt('Do I play video games?').toUpperCase();

if(thirdquestionguess === 'Y' || thirdquestionguess === 'YES'){
  // console.log('That is correct. Video games are my favorite!');
  alert('That is correct. Video games are my favorite!');
}else if(thirdquestionguess === 'N' || thirdquestionguess === 'NO'){
  alert('Sorry you are wrong.');
}

let fourthQuestionguess = prompt('Do I like to travel?').toLowerCase();

if(fourthQuestionguess === 'y' || fourthQuestionguess === 'yes' ){
  // console.log('You are correct.I could travel the whole world if I could.');
  alert('You are correct.I could travel the whole world if I could.');
}else if(fourthQuestionguess === 'n' || fourthQuestionguess === 'no'){
  alert('Sorry that is incorrect');
}

let fifthQuestionguess = prompt('Do I plan to retire in the US?').toUpperCase();

if(fifthQuestionguess === 'Y' || fifthQuestionguess === 'YES'){
  alert('Sorry that is incorrect');
}else if(fifthQuestionguess === 'N' || fifthQuestionguess === 'NO'){
  // console.log('You are correct. I wanna retire back home in Kenya!');
  alert('You are correct. I wanna retire back home in Kenya!');
}

alert(`Thank you for playing ${guestName}.`);
