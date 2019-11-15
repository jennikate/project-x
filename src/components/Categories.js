import React from 'react'

const Categories = ({ categories, getDrinkList }) => {
  console.log(categories)
  return (
    <div className="columns is-vcentered is-multiline">
      {categories.map((drink, i) => {
        return (
          <div className="column is-one-quarter" key={i}>
            <a id={drink.strCategory} onClick={getDrinkList}>{drink.strCategory}</a>
          </div>
        )
      })}
    </div>

  )
}

export default Categories



