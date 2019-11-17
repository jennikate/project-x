import React from 'react'

const Drinks = ({ drinks, setNavChoice }) => {
  return (
    <div className="columns is-vcentered is-multiline">
      {drinks.map((drink, i) => {
        return (
          <div onClick={setNavChoice} data-id={drink.idDrink} data-url='lookup.php?i=' data-group='Drink' className="column is-one-quarter img-photo drink-list" key={i}>
            <a className='columns is-mobile' data-id={drink.idDrink} data-url='lookup.php?i='data-group='Drink' >
              <img className='column' data-id={drink.idDrink} data-url='lookup.php?i=' data-group='Drink'  src={drink.strDrinkThumb} />
              <span className='column' data-id={drink.idDrink} data-url='lookup.php?i='  data-group='Drink' >{drink.strDrink}</span>
            </a>

          </div>
        )
      })}
    </div>

  )
}

export default Drinks
