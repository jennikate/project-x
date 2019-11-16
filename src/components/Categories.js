import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//aCoffee, faBeer, faCocktail, faGlassMartini, faGlassMartiniAlt, faGlassWhiskey, faWineGlass, faWineGlassAlt

const Categories = ({ categories, setNavChoice }) => {
  return (
    <div className="columns  is-vcentered is-multiline">
      {categories.map((drink, i) => {
        return (
          <div key={i} className="column is-one-quarter has-icons-left category" id={drink.strCategory} data-group='Drinks' data-url='filter.php?c=' onClick={setNavChoice}>
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
