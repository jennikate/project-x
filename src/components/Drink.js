import React from 'react'

const Drink = ({ drink }) => {
  console.log(drink)
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
              <p>Find recipe on <a target='_blank' href={`https://lmgtfy.com/?q=${drink.strDrink}`}>this search.</a></p>
            </div>
          </div>
        )
      })}
    </div>

  )
}

export default Drink
