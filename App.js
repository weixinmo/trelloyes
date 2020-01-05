import React from 'react';
import STORE from './store.js';
import List from './List.js';

function App() {
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className = 'App-list'>
        {STORE.lists.map(array_items => 
          <List 
            key = {array_items.id}
            header = {array_items.header}
            cards = {array_items.cardIds.map(card => 
              STORE.allCards[card]  
            )}
          />
        )}
      </div> 
    </main>
  );
}

export default App;