import React from 'react'

const Drink = ({ drink }) => {
  return (
    <div className='columns'>
      <div className='img-photo column is-one-third'>
        <img src={drink.strDrinkThumb} className='image' />
      </div>
      <div className='column is-two-thirds'>
        <h2 className='subtitle is-2' id={drink.idDrink}>{drink.strDrink}</h2>
        <p className='drink-classifications'><em>{drink.strCategory}, {drink.strAlcoholic}</em></p>
        <div className='recipe'>
          <p className='drink-instructions'>{drink.strInstructions}</p>
          <p>Find recipe on <a target='_blank' rel='noopener noreferrer' href={`https://google.com/?q=${drink.strDrink} cocktail`}>this search.</a></p>
        </div>
      </div>
    </div>

  )
}

export default Drink

// I don't think I need the map here, also the design and layout is the same as home so can I combine them?
// URL routing will be different