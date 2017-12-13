$(document).ready(function () {
    console.log('We are connected to js')

    // set variable for the sum of all scores up to current leve
    let newScore = 0
    // set variables for each trivia box level
    // const score100 = 100
    // const score200 = 200
    // const score300 = 300
    // const score400 = 400
    // const score500 = 500
    // set variable for clicking on a level 100 box, level 200 box, etc
    //  HOLD ON THIS FOR NOW

    // TRIVIA QUESTIONS
    let questions = [
    {
        boxId: 'box1-c1',
        question: 'The name of the reindeer belonging to Kristoff in the Disney story Frozen. Who is ...',
        answer1: 'Sven',
        points: 100,
        }
    ]
//   THIS ONE HERE IS MASTER THAT IS WORKING -- DO NOT TOUCH BELOW!!
    $('#gameboard').on('click', '#box1-c1', function () {
        let answer = prompt('The animated character who plays a reindeer in the Disney story Frozen. COMPLETE ANSWER: Who is: ')
        if ((answer === 'Sven' || answer === 'sven' || answer === 'SVEN') && (answer !== '')) {
            alert("That's correct!")
            newScore += 100
            console.log(newScore)
        }
        else {
            alert("Sorry, that's incorrect")
            newScore -= 100
        }
        // make box no longer clickable
        $('#box1-c1').replaceWith("<div class='used-box'>played</div>")
        // update score
        $('#current-score').html(newScore)
    });
//  DO NOT CHANGE ABOVE!!

    // $('.box').on('click', function () {
    //     let question = $(this.).attr('data-box')
    //     let answer = prompt(question)
    //     if ((answer === $(this).attr('answer1') || $(this).attr('answer2') || $(this).attr('answer3')) && (answer !== '')) {
    //         alert("That's correct!")
    //         newScore += 200
    //     }
    //     else {
    //         alert("Sorry, that's incorrect")
    //         newScore -= 200
    //     }
    //     $(this.box).replaceWith("<div class='used-box'>played</div>")
    //     $('#current-score').html(newScore)
    // });

    $('#gameboard').on('click', '#box3-c1', function () {
        let answer = (prompt("The animal's name that leads Santa's sleigh. >> Who is ... ").toUpperCase())
            if ((answer === 'RUDOLPH') && (answer !== '')) {
            alert("YOU'RE AMAZING GIRL")
            newScore += 300
        }
        else {
            alert("Sorry, that's incorrect")
            newScore -= 300
        }
        $('#box3-c1').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#box4-c1', function () {
        let answer = prompt('The animated character who plays a reindeer in the Disney story Frozen. COMPLETE ANSWER: Who is: ')
        if ((answer === 'Sven' || answer === 'sven' || answer === 'SVEN') && (answer !== '')) {
            alert("That's correct!")
            newScore += 400
        }
        else {
            alert("Sorry, that's incorrect")
            newScore -= 400
        }
        $('#box4-c1').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#box5-c1', function () {
        let answer = prompt('The animated character who plays a reindeer in the Disney story Frozen. COMPLETE ANSWER: Who is: ')
        if ((answer === 'Sven' || answer === 'sven' || answer === 'SVEN') && (answer !== '')) {
            alert("That's correct!")
            newScore += 500
        }
        else {
            alert("Sorry, that's incorrect")
            newScore -= 500
        }
        $('#box5-c1').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    })

});