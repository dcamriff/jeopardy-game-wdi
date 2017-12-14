$(document).ready(function () {
    console.log('We are connected to js')

    // set variable for the sum of all scores up to current level
    let newScore = 0
    
    // DATA MANAGEMENT - questions for gameboard boxes/tiles
    // let triviaBoxes = [
    //     {
    //     id: '0',
    //     question: 'He's usually seen guiding Santa's sleigh.',
    //     answer: 'WHO IS RUDOLPH?',
    //     points: 100,
    //     },

    //     {
    //     id: '1',
    //     question: "He's a mouse with big ears and bright yellow shoes.",
    //     answer: 'WHO IS MICKEY?',
    //     points: 200,
    //     },

    //     {
    //     id; '2',
    //     question: 'The name of the reindeer belonging to Kristoff in the Disney story Frozen.',
    //     answer: 'WHO IS SVEN?',
    //     points: 300,
    //     }
    // ]
    // ALERTS
    // const correctAlert1 = alert("That's correct! You're on a roll!")
    // const correctAlert2 = alert('Fantastic! You answered correctly!')
    // const correctAlert3 = alert("Way to go! You are correct!")
    // const incorrectAlert1 = alert('Not quite, but good try!')
    // const incorrectAlert2 = alert("Oh, that's not it, but keep trying!")
    // const incorrectAlert3 = alert("Hmm, that's not it, but try another!")

    // PSEUDOCODE IT...
// When a box is clicked
// create a variable that looks up the clicked on box's id
// take that new variable and set it equal to the array index
// find the object attributes of that index
    // $('#gameboard').on('click', function (event) {
    //     // let indexNum = parseInt.data(box)
    //     $('div').click(handler).find('#id')
    //     let question = $(this).attr('data-box')
    //     let answer = (prompt(question).toUpperCase())
    //     if ((answer === $(this).triviaBoxes[indexNum].answer) && (answer !== '')) {
    //         correctAlert1()
    //         newScore += $(this).triviaBoxes[indexNum].points
    //     }
    //     else {
    //         incorrectAlert1()
    //         newScore -= $(this).triviaBoxes[indexNum].points
    //     }
    //     $(this.box).replaceWith("<div class='used-box'>played</div>")
    //     $('#current-score').html(newScore)
    // });
// TESTING ABOVE
// 
    
//   THIS ONE HERE IS MASTER THAT IS WORKING -- DO NOT TOUCH BELOW!!
    $('#gameboard').on('click', '#0', function () {
        let answer = (prompt("He's usually seen guiding Santa's sleigh.").toUpperCase())
        if ((answer === 'WHO IS RUDOLPH?') && (answer !== '')) {
            alert("That's correct!")
            newScore += 100
            console.log(newScore)
        }
        else {
            alert('Not quite, but good try!')
            newScore -= 100
        }
        // make box no longer clickable
        $('#0').replaceWith("<div class='used-box'>played</div>")
        // update score
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#1', function () {
        let answer = (prompt("He's a mouse with big ears and bright yellow shoes.").toUpperCase())
            if ((answer === 'WHO IS MICKEY?') && (answer !== '')) {
            alert("Way to go! You got it right!")
            newScore += 300
        }
        else {
            alert("Oh, that's not it, but keep trying!")
            newScore -= 300
        }
        $('#1').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#2', function () {
        let answer = (prompt("The name of the reindeer belonging to Kristoff in the Disney story Frozen.").toUpperCase())
        if ((answer === 'WHO IS SVEN?') && (answer !== '')) {
        alert("That's correct! You're on a roll!")
        newScore += 400
    }
    else {
        alert("Sorry, that's incorrect")
            newScore -= 400
        }
        $('#2').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#3', function () {
        let answer = (prompt("The name of the reindeer belonging to Kristoff in the Disney story Frozen.").toUpperCase())
        if ((answer === 'WHO IS SVEN?') && (answer !== '')) {
        alert("Way to go! You are correct!")
        newScore += 400
    }
    else {
        alert("Oh, that's not it, but keep trying!")
            newScore -= 400
        }
        $('#3').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    })

});