import React from 'react'

const Drinks = ({ drinks }) => {
  console.log(drinks)
  return (
    <div className="columns is-vcentered is-multiline">
      {drinks.map((drink, i) => {
        return (
          <div className="column is-one-quarter" key={i}>
            <a id={drink.strDrink}>{drink.strDrink}</a>
            <img src={drink.strDrinkThumb} />
          </div>
        )
      })}
    </div>

  )
}

export default Drinks


