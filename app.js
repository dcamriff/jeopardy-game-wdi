$(document).ready(function() {
    console.log('We are connected to js')

    // set variable for the sum of all scores up to current leve
    let newScore = 0
        // set variables for each trivia box level
    const score100 = 100
    const score200 = 200
    const score300 = 300
    const score400 = 400
    const score500 = 500
    // set variable for clicking on a level 100 box, level 200 box, etc
    //  HOLD ON THIS FOR NOW

    $('#gameboard').on('click', '#box100-c1', function() {
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
            // Figure out how to return score to the screen
            //  based on changing variable of newScore
            // $('#box100-c1').replaceWith("<div class='box'>Test</div>")
            document.getElementById('current-score').innerHTML = newScore;
        });

        $('#gameboard').on('click', '#box200-c1', function() {
            let answer = prompt('The animated character who plays a reindeer in the Disney story Frozen. COMPLETE ANSWER: Who is: ')
            if (answer === 'Sven' || 'sven' || 'SVEN') {
                alert("That's correct!")
                newScore += 200
                console.log(newScore)
                // Figure out how to return score to the screen
                //  based on changing variable of newScore
                document.getElementById('current-score').innerHTML = newScore;
            }
        })
    });