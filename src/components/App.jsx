import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import cards from '../data';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className='card-list'>
      {
        cards.map((card) => {
          return (<Card
            key={card.id}
            {...card} 
          />)
        })
      }
      </section> 
    </>
  );
}
export default App;