import React from 'react';

function Gameover({score,restartGames}) {
    return (
        <div className="gameOver">
            <div className="modal">
                <h2>Game Over</h2>
                <h3>Score {score}</h3>
                <button onClick={restartGames}>New  Games</button>
            </div>
        </div>
    );
}

export default Gameover;