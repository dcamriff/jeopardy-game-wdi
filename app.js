$(document).ready(function() {
    console.log('We are connected to js')

    let lastScore = []
    const score100 = 100
    $('#gameboard').on('click', '.box', function() {
        let answer = prompt('The animated character who plays a reindeer in the Disney story Frozen. Who is: ')
        if (answer === 'Sven' || 'sven' || 'SVEN') {
            alert("That's correct!")
            let newScore = lastScore + score100
            console.log(newScore)
            $('.current-score').append('newScore')
        }
    })
});