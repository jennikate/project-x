import React from 'react'

const Drink = ({ drink }) => {
  console.log(drink)
  return (
    <div className="columns is-vcentered is-multiline">
      {drink.map((drink, i) => {
        return (
          <div className="column is-one-quarter" key={i}>
            <a id={drink.idDrink}>{drink.strDrink}</a>
            <img src={drink.strDrinkThumb} />
          </div>
        )
      })}
    </div>

  )
}

export default Drink


