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
        let answer = (prompt("He lives in a pineapple under the sea.").toUpperCase())
        if ((answer === 'WHO IS SPONGE BOB SQUARE PANTS?') && (answer !== '')) {
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
        let answer = (prompt("He only wears a cape and underwear.").toUpperCase())
            if ((answer === 'WHO IS CAPTAIN UNDERPANTS?') && (answer !== '')) {
            alert("Way to go! You got it right!")
            newScore += 200
        }
        else {
            alert("Oh, that's not it, but keep trying!")
            newScore -= 200
        }
        $('#1').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#2', function () {
        let answer = (prompt("_____ the Explorer wears orange shorts with her purple backpack.").toUpperCase())
        if ((answer === 'WHO IS DORA?') && (answer !== '')) {
        alert("That's correct! You're on a roll!")
        newScore += 300
    }
    else {
        alert("Hmm, that's not it, but try another!")
            newScore -= 300
        }
        $('#2').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#3', function () {
        let answer = (prompt("This monkey doesn't wear pants, but the man in the yellow hat does.").toUpperCase())
        if ((answer === 'WHO IS CURIOUS GEORGE?') && (answer !== '')) {
        alert("Way to go! You are correct!")
        newScore += 400
    }
    else {
        alert("Oh, that's not it, but keep trying!")
            newScore -= 400
        }
        $('#3').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#4', function () {
        let answer = (prompt("This rodent has red pants and big yellow shoes.").toUpperCase())
        if ((answer === 'WHO IS MICKEY MOUSE?') && (answer !== '')) {
            alert("That's correct!")
            newScore += 500
            console.log(newScore)
        }
        else {
            alert('Not quite, but good try!')
            newScore -= 500
        }
        // make box no longer clickable
        $('#4').replaceWith("<div class='used-box'>played</div>")
        // update score
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#5', function () {
        let answer = (prompt("Don't even talk to mom until she's had her first cup of ______ in the morning.").toUpperCase())
            if ((answer === 'WHAT IS COFFEE?') && (answer !== '')) {
            alert("Way to go! You got it right!")
            newScore += 100
        }
        else {
            alert("Oh, that's not it, but keep trying!")
            newScore -= 100
        }
        $('#5').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#6', function () {
        let answer = (prompt("Parents are always posting ____ to Instagram or Facebook of the silly things I do.").toUpperCase())
        if ((answer === 'WHAT ARE PHOTOS?' || answer === 'WHAT ARE PICTURES?' && (answer !== '')) {
        alert("That's correct! Way to go superstar!")
        newScore += 200
    }
    else {
        alert("Hmm, that's not it, but try another!")
            newScore -= 200
        }
        $('#6').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#7', function () {
        let answer = (prompt("T").toUpperCase())
        if ((answer === 'WHO IS SVEN?') && (answer !== '')) {
        alert("Way to go! You are correct!")
        newScore += 300
    }
    else {
        alert("Oh, that's not it, but keep trying!")
            newScore -= 300
        }
        $('#7').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#8', function () {
        let answer = (prompt("T").toUpperCase())
        if ((answer === 'WHO IS RUDOLPH?') && (answer !== '')) {
            alert("That's correct!")
            newScore += 400
            console.log(newScore)
        }
        else {
            alert('Not quite, but good try!')
            newScore -= 400
        }
        // make box no longer clickable
        $('#8').replaceWith("<div class='used-box'>played</div>")
        // update score
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#9', function () {
        let answer = (prompt("T").toUpperCase())
            if ((answer === 'WHO IS MICKEY?') && (answer !== '')) {
            alert("Way to go! You got it right!")
            newScore += 500
        }
        else {
            alert("Oh, that's not it, but keep trying!")
            newScore -= 500
        }
        $('#9').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#10', function () {
        let answer = (prompt("This sign").toUpperCase())
        if ((answer === 'WHO IS SVEN?') && (answer !== '')) {
        alert("That's correct! You're on a roll!")
        newScore += 100
    }
    else {
        alert("Hmm, that's not it, but try another!")
            newScore -= 100
        }
        $('#10').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#11', function () {
        let answer = (prompt("The name of the reindeer belonging to Kristoff in the Disney story Frozen.").toUpperCase())
        if ((answer === 'WHO IS SVEN?') && (answer !== '')) {
        alert("Way to go! You are correct!")
        newScore += 200
    }
    else {
        alert("Oh, that's not it, but keep trying!")
            newScore -= 200
        }
        $('#11').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#12', function () {
        let answer = (prompt("He's usually seen guiding Santa's sleigh.").toUpperCase())
        if ((answer === 'WHO IS RUDOLPH?') && (answer !== '')) {
            alert("That's correct!")
            newScore += 300
            console.log(newScore)
        }
        else {
            alert('Not quite, but good try!')
            newScore -= 300
        }
        // make box no longer clickable
        $('#12').replaceWith("<div class='used-box'>played</div>")
        // update score
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#13', function () {
        let answer = (prompt("He's a mouse with big ears and bright yellow shoes.").toUpperCase())
            if ((answer === 'WHO IS MICKEY?') && (answer !== '')) {
            alert("Way to go! You got it right!")
            newScore += 400
        }
        else {
            alert("Oh, that's not it, but keep trying!")
            newScore -= 400
        }
        $('#13').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#14', function () {
        let answer = (prompt("The name of the reindeer belonging to Kristoff in the Disney story Frozen.").toUpperCase())
        if ((answer === 'WHO IS SVEN?') && (answer !== '')) {
        alert("That's correct! You're on a roll!")
        newScore += 500
    }
    else {
        alert("Hmm, that's not it, but try another!")
            newScore -= 500
        }
        $('#14').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#15', function () {
        let answer = (prompt("The name of the reindeer belonging to Kristoff in the Disney story Frozen.").toUpperCase())
        if ((answer === 'WHO IS SVEN?') && (answer !== '')) {
        alert("Way to go! You are correct!")
        newScore += 100
    }
    else {
        alert("Oh, that's not it, but keep trying!")
            newScore -= 100
        }
        $('#15').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#16', function () {
        let answer = (prompt("He's usually seen guiding Santa's sleigh.").toUpperCase())
        if ((answer === 'WHO IS RUDOLPH?') && (answer !== '')) {
            alert("That's correct!")
            newScore += 200
            console.log(newScore)
        }
        else {
            alert('Not quite, but good try!')
            newScore -= 200
        }
        // make box no longer clickable
        $('#16').replaceWith("<div class='used-box'>played</div>")
        // update score
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#17', function () {
        let answer = (prompt("He's a mouse with big ears and bright yellow shoes.").toUpperCase())
            if ((answer === 'WHO IS MICKEY?') && (answer !== '')) {
            alert("Way to go! You got it right!")
            newScore += 300
        }
        else {
            alert("Oh, that's not it, but keep trying!")
            newScore -= 300
        }
        $('#17').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#18', function () {
        let answer = (prompt("The name of the reindeer belonging to Kristoff in the Disney story Frozen.").toUpperCase())
        if ((answer === 'WHO IS SVEN?') && (answer !== '')) {
        alert("That's correct! You're on a roll!")
        newScore += 400
    }
    else {
        alert("Hmm, that's not it, but try another!")
            newScore -= 400
        }
        $('#19').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#18', function () {
        let answer = (prompt("The name of the reindeer belonging to Kristoff in the Disney story Frozen.").toUpperCase())
        if ((answer === 'WHO IS SVEN?') && (answer !== '')) {
        alert("That's correct! You're on a roll!")
        newScore += 400
    }
    else {
        alert("Hmm, that's not it, but try another!")
            newScore -= 400
        }
        $('#19').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

});