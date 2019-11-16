import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//aCoffee, faBeer, faCocktail, faGlassMartini, faGlassMartiniAlt, faGlassWhiskey, faWineGlass, faWineGlassAlt

const Ingredients = ({ ingredients, setNavChoice }) => {
  return (
    <div className="columns  is-vcentered is-multiline">
      {ingredients.map((drink, i) => {
        return (
          <div key={i} className="column is-one-quarter has-icons-left category" id={drink.strIngredient1} data-group='Drinks' data-url='filter.php?i=' onClick={setNavChoice}>
            <span className="icon is-left">
              <FontAwesomeIcon icon="wine-glass" />
            </span>
            <a>{drink.strIngredient1}</a>
          </div>
        )
      })}
    </div>

  )
}

export default Ingredients
