import React from 'react'

const Main = () => {
  return (
    <div className="columns is-vcentered is-multiline">
      {this.state.drinksByCategory.drinks.map((drink, i) => {
        return (
          <div className="column is-one-quarter" key={i}>
            <a href='{drink.strCategory}'>{drink.strCategory}</a>
          </div>
        )
      })}
    </div>

  )
}

export default Main

// set hide class on 'categories' or 'ingredients' or 'glass' to hide the lists
// show the cocktails in the category chosen as flip cards