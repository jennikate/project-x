import React from 'react'

const Home = ({ drink }) => {
  console.log(drink)
  return (
    <div className="columns is-vcentered is-multiline flip-card">

      <div className="column is-one-quarter flip-card-inner">
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
    </div>

  )
}

export default Home