$(document).ready(function () {
    console.log('We are connected to js')

    // set variable for the sum of all scores up to current level
    let newScore = 0
    let boxesPlayed = 0
    console.log(boxesPlayed)

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
        }
        else {
            alert("Not quite, but good try! The correct answer is: 'WHO IS SPONGE BOB SQUARE PANTS?'")
            newScore -= 100
        }
        // make box no longer clickable
        $('#0').replaceWith("<div class='used-box'>played</div>")
        // update score
        $('#current-score').html(newScore)
        boxesPlayed += 1
        console.log(boxesPlayed)
    });

    $('#gameboard').on('click', '#1', function () {
        let answer = (prompt("He only wears a cape and underwear.").toUpperCase())
        if ((answer === 'WHO IS CAPTAIN UNDERPANTS?') && (answer !== '')) {
            alert("Way to go! You got it right!")
            newScore += 200
        }
        else {
            alert("Oh, that's not it, but keep playing! The correct answer is: 'WHO IS CAPTAIN UNDERPANTS?'")
            newScore -= 200
        }
        $('#1').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
        boxesPlayed += 1
        console.log(boxesPlayed)
    });

    $('#gameboard').on('click', '#2', function () {
        let answer = (prompt("_____ the Explorer wears orange shorts with her purple backpack.").toUpperCase())
        if ((answer === 'WHO IS DORA?') && (answer !== '')) {
            alert("That's correct! You're on a roll!")
            newScore += 300
        }
        else {
            alert("Hmm, that's not it, but try another! The correct answer is: 'WHO IS DORA?'")
            newScore -= 300
        }
        $('#2').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
        boxesPlayed += 1
        console.log(boxesPlayed)
    });

    $('#gameboard').on('click', '#3', function () {
        let answer = (prompt("This monkey doesn't wear pants, but the man in the yellow hat does.").toUpperCase())
        if ((answer === 'WHO IS CURIOUS GEORGE?') && (answer !== '')) {
            alert("Way to go! You are correct!")
            newScore += 400
        }
        else {
            alert("Oh, that's not it, but keep playing! The correct answer is: 'WHO IS CURIOUS GEORGE?'")
            newScore -= 400
        }
        $('#3').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
        boxesPlayed += 1
        console.log(boxesPlayed)
    });

    $('#gameboard').on('click', '#4', function () {
        let answer = (prompt("This rodent has red pants and big yellow shoes.").toUpperCase())
        if ((answer === 'WHO IS MICKEY MOUSE?') && (answer !== '')) {
            alert("That's correct!")
            newScore += 500
            console.log(newScore)
        }
        else {
            alert("Not quite, but good try! The correct answer is: 'WHO IS MICKEY MOUSE?'")
            newScore -= 500
        }
        // make box no longer clickable
        $('#4').replaceWith("<div class='used-box'>played</div>")
        // update score
        $('#current-score').html(newScore)
        boxesPlayed += 1
        console.log(boxesPlayed)
    });

    $('#gameboard').on('click', '#5', function () {
        let answer = (prompt("Don't even talk to mom until she's had her first cup of ______ in the morning.").toUpperCase())
        if ((answer === 'WHAT IS COFFEE?') && (answer !== '')) {
            alert("Way to go! You got it right!")
            newScore += 100
        }
        else {
            alert("Oh, that's not it, but keep trying! The correct answer is: 'WHAT IS COFFEE?'")
            newScore -= 100
        }
        $('#5').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#6', function () {
        let answer = (prompt("Looking down and ____ on your phone while driving, doesn't set a very good example.").toUpperCase())
        if ((answer === 'WHAT IS TEXTING?') && (answer !== '')) {
            alert("That's correct! Way to go superstar! ")
            newScore += 200
        }
        else {
            alert("Hmm, that's not it, but try another! The correct answer is: 'WHAT IS TEXTING?'")
            newScore -= 200
        }
        $('#6').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#7', function () {
        let answer = (prompt("Thankfully, some parents enjoy this holiday where you dress in costume, just as much as kids do.").toUpperCase())
        if ((answer === 'WHAT IS HALLOWEEN?') && (answer !== '')) {
            alert("Way to go! You are correct!")
            newScore += 300
        }
        else {
            alert("Oh, that's not it, but keep trying! The correct answer is: ''WHAT IS HALLOWEEN?'")
            newScore -= 300
        }
        $('#7').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#8', function () {
        let answer = (prompt("Parents LOVE to post pictures to ____ or Facebook of the silly things kids do.").toUpperCase())
        if ((answer === 'WHAT IS INSTAGRAM?') && (answer !== '')) {
            alert("That's correct!")
            newScore += 400
            console.log(newScore)
        }
        else {
            alert("Not quite, but good try! The correct answer is: 'WHAT IS INSTAGRAM?'")
            newScore -= 400
        }
        // make box no longer clickable
        $('#8').replaceWith("<div class='used-box'>played</div>")
        // update score
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#9', function () {
        let answer = (prompt("This embarrasing line dance, that our parents sometimes still perform at wedding receptions, was made popular in the 80s.").toUpperCase())
        if ((answer === 'WHAT IS THE ELECTRIC SLIDE?') && (answer !== '')) {
            alert("Way to go! You got it right!")
            newScore += 500
        }
        else {
            alert("Oh, that's not it, but keep playing! The correct answer is: 'WHAT IS THE ELECTRIC SLIDE?'")
            newScore -= 500
        }
        $('#9').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#10', function () {
        let answer = (prompt("A poular character on Sessame Street, he enjoys counting.").toUpperCase())
        if ((answer === 'WHO IS COUNT DRACULA?') && (answer !== '')) {
            alert("That's correct! You're on a roll!")
            newScore += 100
        }
        else {
            alert("Hmm, that's not it, but try another! The correct answer is: 'WHO IS COUNT DRACULA?'")
            newScore -= 100
        }
        $('#10').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#11', function () {
        let answer = (prompt("If you wanted to ________ 5 and 6 to equal 30, you use asterisk symbol shown here: ' * '").toUpperCase())
        if ((answer === 'WHAT IS MULTIPLY?') && (answer !== '')) {
            alert("Way to go! You are correct!")
            newScore += 200
        }
        else {
            alert("Oh, that's not it, but keep trying! The correct answer is: 'WHAT IS MULTIPLY?'")
            newScore -= 200
        }
        $('#11').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#12', function () {
        let answer = (prompt("If you had 5 apples and wanted to take away 2 of them, you would _____ them.").toUpperCase())
        if ((answer === 'WHAT IS SUBTRACT?') && (answer !== '')) {
            alert("That's correct!")
            newScore += 300
            console.log(newScore)
        }
        else {
            alert("Not quite, but good try! The correct answer is: 'WHAT IS SUBTRACT?'")
            newScore -= 300
        }
        // make box no longer clickable
        $('#12').replaceWith("<div class='used-box'>played</div>")
        // update score
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#13', function () {
        let answer = (prompt("Statistics show that learning to play this musical instrument that has black and white keys, can improve your math score.").toUpperCase())
        if ((answer === 'WHAT IS A PIANO?' || answer === 'WHAT IS THE PIANO?') && (answer !== '')) {
            alert("Way to go! You got it right!")
            newScore += 400
        }
        else {
            alert("Oh, that's not it, but keep trying! The correct answer is: 'WHAT IS A PIANO?'")
            newScore -= 400
        }
        $('#13').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#14', function () {
        let answer = (prompt("This branch of mathematics deals with shapes.").toUpperCase())
        if ((answer === 'WHAT IS GEOMETRY?') && (answer !== '')) {
            alert("That's correct! You're on a roll!")
            newScore += 500
        }
        else {
            alert("Hmm, that's not it, but try another! The correct answer is: 'WHAT IS GEOMETRY?'")
            newScore -= 500
        }
        $('#14').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#15', function () {
        let answer = (prompt("This starchy vegetable is used to make french fries.").toUpperCase())
        if ((answer === 'WHAT IS A POTATO?') && (answer !== '')) {
            alert("Way to go! You are correct!")
            newScore += 100
        }
        else {
            alert("Oh, that's not it, but keep trying! The correct answer is: 'WHAT IS A POTATO?'")
            newScore -= 100
        }
        $('#15').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#16', function () {
        let answer = (prompt("This bright red fruit that grows on a vine is often mistaken for a vegetable.").toUpperCase())
        if ((answer === 'WHAT IS A TOMATO?') && (answer !== '')) {
            alert("That's correct!")
            newScore += 200
            console.log(newScore)
        }
        else {
            alert("Not quite, but good try! The correct answer is: 'WHAT IS A TOMATO?'")
            newScore -= 200
        }
        // make box no longer clickable
        $('#16').replaceWith("<div class='used-box'>played</div>")
        // update score
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#17', function () {
        let answer = (prompt("Buggs Bunny enjoys eating this orange vegetable. They can also grow in other colors like purple.").toUpperCase())
        if ((answer === 'WHAT IS A CARROT?') && (answer !== '')) {
            alert("Way to go! You got it right!")
            newScore += 300
        }
        else {
            alert("Oh, that's not it, but keep trying! The correct answer is: 'WHAT IS A CARROT?'")
            newScore -= 300
        }
        $('#17').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#18', function () {
        let answer = (prompt("A dinosaur that ate only plants is referred to as this.").toUpperCase())
        if ((answer === 'WHAT IS AN HERBIVORE?') && (answer !== '')) {
            alert("That's correct! You're on a roll!")
            newScore += 400
        }
        else {
            alert("Hmm, that's not it, but try another! The correct answer is: 'WHAT IS AN HERBIVORE?'")
            newScore -= 400
        }
        $('#18').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    $('#gameboard').on('click', '#19', function () {
        let answer = (prompt("A person who does not eat or use animal products.").toUpperCase())
        if ((answer === 'WHAT IS A VEGAN?') && (answer !== '')) {
            alert("That's correct! You're on a roll!")
            newScore += 400
        }
        else {
            alert("Hmm, that's not it, but try another! The correct answer is: 'WHAT IS A VEGAN?'")
            newScore -= 400
        }
        $('#19').replaceWith("<div class='used-box'>played</div>")
        $('#current-score').html(newScore)
    });

    // function() {
    //     if (boxesPlayed >=20) {
    //         alert("Congratulations! You've answered all trivia questions!")
    //     }
    // }

});