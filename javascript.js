let playing = false;
let score;
let action;
let timeremaining;
let correctAnswer;

//Click start or reset
document.getElementById('startReset').onclick = function () {
    //if we are playing
    if (playing == true) {
        location.reload(); //reload page
    } else { // if we are not playing
        // change mode to playing
        playing = true;
        //set score to 0
        score = 0;
        document.getElementById('scoreValue').innerHTML = score;
        //show countdown box
        show('timeRemain');
        timeremaining = 15;
        document.getElementById('timeRemainValue').innerHTML = timeremaining;
        //hide game over box
        hide('gameOver');
        //change button to reset
        document.getElementById('startReset').innerHTML = 'Reset Game';
        //start count down
        startCountDown();
        //generate a new Q&A
        generateQA();
    }
}

// Click answer box
for (i = 1; i < 5; i++) {
    document.getElementById('box' + i).onclick = function () {
        //check if we are playing
        if (playing == true) {
            //yes
            if (this.innerHTML == correctAnswer) {
                //correct answer

                //increase score by 1
                score++;
                document.getElementById('scoreValue').innerHTML = score;
                //hide the wrong box and show correct box
                hide('wrong');
                show('correct');
                setTimeout(function () {
                    hide('correct');
                }, 1000);

                //Generate new Q&A
                generateQA();
            } else {
                //wrong answer
                hide('correct');
                show('wrong');
                setTimeout(function () {
                    hide('wrong');
                }, 1000);
            }
        }
    }
}



//Start counter
function startCountDown() {
    action = setInterval(function () {
        timeremaining -= 1;
        document.getElementById('timeRemainValue').innerHTML = timeremaining;
        if (timeremaining == 0) {
            stopCountDown();
            show('gameOver')
            document.getElementById('gameOver').innerHTML = "<p>Game Over!</p><p>Your score is " + score + " </p>";
            hide('timeRemain');
            hide('correct');
            hide('wrong');
            playing = false;
            document.getElementById('startReset').innerHTML = "Start Game";
        }
    }, 1000);
}

//Stop counter
function stopCountDown() {
    clearInterval(action);
}
//Show and hide an element
function hide(Id) {
    document.getElementById(Id).style.display = "none";
}
function show(Id) {
    document.getElementById(Id).style.display = "block";
}
//Generate question and multiple answers
function generateQA() {
    let x = 1 + Math.round(9 * Math.random());
    let y = 1 + Math.round(9 * Math.random());
    correctAnswer = x * y;
    document.getElementById('question').innerHTML = x + "x" + y;
    let correctPosition = 1 + Math.round(3 * Math.random());
    document.getElementById("box" + correctPosition).innerHTML = correctAnswer; //Fill 1 box with correct answer
    //fill other boxes with wrong answers

    let answers = [correctAnswer];

    for (i = 1; i < 5; i++) {
        if (i !== correctPosition) {
            let wrongAnwer;
            do {
                wrongAnwer = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random())); // a wrong answer
            } while (answers.indexOf(wrongAnwer) > -1)
            document.getElementById("box" + i).innerHTML = wrongAnwer;
            answers.push(wrongAnwer);
        }
    }
}








//if click start or reset
    //if playing
        //reload the page
    //if not playing
        //show countdown box
        //reduce time 1 sec in loops
            //time left?
                //yes -> continue
                //no -> gameover
        //change button to reset
        //generate new Q&A

//if click on answer box
    //if playing
        //correct?
            //yes ->
                //increase score
                //show correct box 1s
                //generate new Q&A
            //no ->
                //show try again box 1s

