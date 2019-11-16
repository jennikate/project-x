import React from 'react'

const Drinks = ({ drinks, getDrink }) => {
  return (
    <div className="columns is-vcentered is-multiline">
      {drinks.map((drink, i) => {
        return (
          <div onClick={getDrink} data-id={drink.idDrink} className="column is-one-quarter img-photo drink-list" key={i}>
            <a className='columns' data-id={drink.idDrink}>
              <img className='column' data-id={drink.idDrink} src={drink.strDrinkThumb} />
              <span className='column' data-id={drink.idDrink}>{drink.strDrink}</span>
            </a>

          </div>
        )
      })}
    </div>

  )
}

export default Drinks
