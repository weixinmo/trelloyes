import React from 'react';
import Card from './Card.js';

function List(props) {
    console.log(props)
    return (
        <section className = "List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className = "List-cards">
                {props.cards.map(array_items => 
                    <div className = "Card">
                        <button type="button">delete</button>
                        <Card
                            key = {array_items.id}
                            title = {array_items.title}
                            content = {array_items.content}
                        />
                    </div>
                )}          
            </div>
        </section>
    )
}

export default List;