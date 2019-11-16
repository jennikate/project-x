import React from 'react'

const Drink = ({ drink }) => {
  return (
    <div className="columns is-vcentered is-multiline flip-card">
      {drink.map((drink, i) => {
        return (
          <div className="column is-one-quarter flip-card-inner" key={i}>
            <div className='flip-card-front'>
              <img src={drink.strDrinkThumb} />
              <p id={drink.idDrink}>{drink.strDrink}</p>
            </div>
            <div className='flip-card-back'>
              <p className='drink-instructions'>{drink.strInstructions}</p>
              <p className='drink-classifications'>{drink.strCategory}, {drink.strAlcoholic}</p>
              <p>Find recipe on <a target='_blank' rel='noopener noreferrer' href={`https://lmgtfy.com/?q=${drink.strDrink}`}>this search.</a></p>
            </div>
          </div>
        )
      })}
    </div>

  )
}

export default Drink

// I don't think I need the map here, also the design and layout is the same as home so can I combine them?
// URL routing will be different