$(document).ready(function() {
    console.log('We are connected to js')

    let lastScore = []
    // set variables for each trivia box level
    const score100 = 100
    const score200 = 200
    const score300 = 300
    const score400 = 400
    const score500 = 500

    $('#gameboard').on('click', '.box', function() {
        let answer = prompt('The animated character who plays a reindeer in the Disney story Frozen. Who is: ')
        if (answer === 'Sven' || 'sven' || 'SVEN') {
            alert("That's correct!")
            let newScore = (lastScore + score100)
            console.log(newScore)
            // Figure out how to return score to the screen
            //  based on changing variable of newScore
            document.getElementById('current-score').innerHTML = newScore;
        }
    })
});