// Purpose: Display highscores from local storage
document.addEventListener('DOMContentLoaded', function () {
    displayHighscores();
});

function displayHighscores() {
    const highscoresContainer = document.getElementById('highscores');

    // Retrieve highscores from local storage
    const highscores = JSON.parse(localStorage.getItem('highscores')) || [];

    // Clear previous highscores
    highscoresContainer.innerHTML = '';

    if (highscores.length === 0) {
        const noScoresMessage = document.createElement('p');
        noScoresMessage.textContent = 'No highscores yet.';
        highscoresContainer.appendChild(noScoresMessage);
    } else {
        // Display highscores
        highscores.forEach(function (highscore) {
            const liElement = document.createElement('li');
            liElement.textContent = `${highscore.initials}: ${highscore.score}`;
            highscoresContainer.appendChild(liElement);
        });
    }
}