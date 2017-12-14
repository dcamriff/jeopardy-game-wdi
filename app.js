$(document).ready(function () {
    console.log('We are connected to js')

    // set variable for the sum of all scores up to current level
    let newScore = 0
    
    // DATA MANAGEMENT - questions for gameboard boxes/tiles
    // let triviaBoxes = [
    //     {
    //     id: '0',
    //     question: 'The name of the reindeer belonging to Kristoff in the Disney story Frozen. Who is ...',
    //     answer: 'Sven',
    //     points: 100,
    //     },

    //     {
    //     id: '1',
    //     question: '',
    //     answer: 'tbd',
    //     points: 200,
    //     },

    //     {
    //     id; '2',
    //     question: 'tbd',
    //     answer: 'tbd',
    //     points: 200,
    //     }
    // ]
    // ALERTS
    // const correctAlert1 = alert("That's correct! You're on a roll!")
    // const correctAlert2 = alert('Fantastic! You answered correctly!')
    // const correctAlert3 = alert("Way to go! You are correct!")
    // const incorrectAlert1 = alert('Not quite, but good try!')
    // const incorrectAlert2 = alert("Oh, that's not it, but keep trying!")
    // const incorrectAlert3 = alert("Hmm, that's not it, but try another!")

    
//   THIS ONE HERE IS MASTER THAT IS WORKING -- DO NOT TOUCH BELOW!!
    $('#gameboard').on('click', '#0', function () {
        let answer = (prompt('The animated character who plays a reindeer in the Disney story Frozen. COMPLETE ANSWER: Who is: ').toUpperCase())
        if ((answer === 'SVEN') && (answer !== '')) {
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

    $('#gameboard').on('click', '#2', function () {
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

    $('#gameboard').on('click', '#3', function () {
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

    $('#gameboard').on('click', '#4', function () {
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