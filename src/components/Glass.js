import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//aCoffee, faBeer, faCocktail, faGlassMartini, faGlassMartiniAlt, faGlassWhiskey, faWineGlass, faWineGlassAlt

const Glass = ({ glass, setNavChoice }) => {
  return (
    <div className="columns  is-vcentered is-multiline">
      {glass.map((drink, i) => {
        return (
          <div key={i} className="column is-one-quarter has-icons-left category" id={drink.strGlass} data-group='Drinks' data-url='filter.php?g=' onClick={setNavChoice}>
            <span className="icon is-left">
              <FontAwesomeIcon icon="glass-martini-alt" />
            </span>
            <a>{drink.strGlass}</a>
          </div>
        )
      })}
    </div>

  )
}

export default Glass
