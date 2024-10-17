//logical NOT (1)

//let user = false;
// console.log('you must be logged in to continue)
//if(!user){

//}

//console.log(!true);
//console.log(!false);

// break and contiue

// const scores = [50, 25, 0, 30, 100, 20, 10];

//for(let i = 0; < scores.length; i++){

//if(scores[i] === 0){
//continue;

//}
//console.log('Your score', scores[i]);

//if(score [i] === 100){
//    console.log('congarts, you got the top score!');
//    break;
//}


//}

//swtitch statemnts

//const grade = '50';

//switch(grade){
//case '50':
  //  console.log('You got an A');
 //   break;
  //  case 'B':
    //    console.log('You got an B');
    //    break;
     //case 'C':
    //console.log('You got an C');
    //break;
    //case 'D':
     //   console.log('You got an D');
       // break;
       // case 'E':
       // console.log('You got an E');
        //break;
        //default:
        //console.log('Not a vaild grade');
      
//}

//variables & block scopes

const age = 30;

if(true){
    const age = 40;
    const name = 'shaun';
    console.log('inside 1st code block', age, name);

    if(true) {
const age = 50;
console.log('inside 2nd code block', age);

    }

}

console.log('outside code block', age, name, test)