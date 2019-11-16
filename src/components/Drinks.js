import React from 'react'

const Drinks = ({ drinks, getDrink }) => {
  return (
    <div className="columns is-vcentered is-multiline">
      {drinks.map((drink, i) => {
        return (
          <div className="column is-one-quarter img-photo drink-list" key={i}>
            <a className='columns'>
              <img className='column' src={drink.strDrinkThumb} />
              <span  id={drink.idDrink} onClick={getDrink} className='column' >{drink.strDrink}</span>
            </a>

          </div>
        )
      })}
    </div>

  )
}

export default Drinks
