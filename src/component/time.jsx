import React, {useEffect, useState} from 'react';

function Time({setGames, setTime, myTime, gamesCount}) {

    const [state, setState] = useState(myTime)


    useEffect(() => {

        let interval = setInterval(() => {

            setState((res) => {
                if (res === 0) {

                    clearInterval(interval)
                    return 0
                }
                return res - 1
            })
            console.log('hi')

        }, 1000)
        return ()=>{
            clearInterval(interval)
            setState(myTime)
        }
    }, [gamesCount])
    useEffect(() => {
        if (state === 0) {
            setGames(false)
            setTime(0)
        }
    }, [state])

    return (
        <div className="timer">⏰ 00:{state.toString().padStart(2, 0)}</div>
    );
}

export default Time;