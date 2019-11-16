import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//aCoffee, faBeer, faCocktail, faGlassMartini, faGlassMartiniAlt, faGlassWhiskey, faWineGlass, faWineGlassAlt

const Categories = ({ categories, getDrinkList }) => {
  return (
    <div className="columns  is-vcentered is-multiline">
      {categories.map((drink, i) => {
        return (
          <div className="column is-one-quarter has-icons-left category" key={i}  id={drink.strCategory} onClick={getDrinkList}>
            <span className="icon is-left">
              <FontAwesomeIcon icon="cocktail" />
            </span>
            <a>{drink.strCategory}</a>
          </div>
        )
      })}
    </div>

  )
}

export default Categories



