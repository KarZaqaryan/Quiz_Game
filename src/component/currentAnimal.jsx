import React, {useEffect} from 'react';
import {animals} from "../animalsObject";

function CurrentAnimal({current,setCurrent,score,gamesCount}) {
    useEffect(() =>{
        let rand = Math.floor(Math.random() * animals.length);
        console.log(rand)
        setCurrent(animals[rand]);
    },[score,gamesCount])
    return (
        <>
            <div className="current-animal">
                {current?(<>
                            <img src={require(`../assets/images/${current.thumbImg}`)}/>
                            <h3>{current.name}</h3>
                        </>
                    )
                    : <img src={require(`../assets/images/loading.gif`)}/>
                }
            </div>
        </>
    );
}

export default CurrentAnimal;