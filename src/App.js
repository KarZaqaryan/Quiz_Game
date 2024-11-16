import './App.css';
import {useEffect, useState} from "react";
import {animals} from "./animalsObject";
import AnimalItem from "./component/animalItem";
import CurrentAnimal from "./component/currentAnimal";
import Time from "./component/time";
import Gameover from "./component/gameover";

function App() {
    const timeValue = 6
    const [state, setState] = useState([])
    const [current,setCurrent] = useState(null);
    const [score,setScore] = useState(0);
    const [time,setTime] = useState(timeValue);
    const [games,setGames] = useState(true);
    const [gamesCount,setgamesCount] = useState(1);
    useEffect(() => {
        setState(animals.sort(() => Math.random() - 0.5))
    },[games])

    function checkValue(id){
       if(id === current.id){
           console.log('true')
           setScore(score + 10)
       }
    }
    function restartGames(){
        setTime(6)
        setScore(()=> "0")
        setCurrent(()=>null)
        setGames(true)
        setgamesCount(gamesCount+1)
    }
  return (
      <>
          <div className="App">
              <div className="game-container">
                  <div className="game-board">

                      <AnimalItem state={state} checkValue={checkValue}/>


                  </div>
                  <div className="side-panel">
                      <Time games={games} setGames={setGames} gamesCount={gamesCount} setTime={setTime} data={state} myTime={time}/>
                            <CurrentAnimal gamesCount={gamesCount} current={current} setCurrent={setCurrent} score={score}/>
                      <div className="score">Score: {score}</div>
                  </div>
              </div>
              {!games&&<Gameover score={score}  restartGames={restartGames} />}
          </div>
      </>
  );
}

export default App;
