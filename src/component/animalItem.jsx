import React from 'react';

function AnimalItem({state,checkValue}) {
    return (
        <>
            {
                state.map(res => (
                    <div key={res.id} className="animal-item" onClick={() => checkValue(res.id)}>
                        <img src={require(`../assets/images/${res.thumbImg}`)}/>
                        <h3>{res.name}</h3>
                    </div>
                ))
            }
        </>

    );
}

export default AnimalItem;