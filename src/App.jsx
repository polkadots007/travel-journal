import React from 'react'
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data.js';
import './App.css'

function App() {
 

  return (
    <div className="App">
      <Navbar />
      <section className='card-list'>
        { data.length && 
          data.map(cardInfo => 
          <Card key={cardInfo.id} 
          cardInfo={cardInfo} 
          />
          )
        }
      </section>
    </div>
  )
}

export default App
