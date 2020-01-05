import React from 'react';

function Card(props) {
    // 这时候的props其实是title + content 组成的一个object
    // console.log(props)
    return (
        <div className = "Card"> 
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default Card;