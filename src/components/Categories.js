import React from 'react'

const Categories = ({ categories }) => {
  return (
    <div className="columns is-vcentered is-multiline">
      {categories.map((drink, i) => {
        return (
          <div className="column is-one-quarter" key={i}>
            <p >{drink.strCategory}</p>
          </div>
        )
      })}
    </div>

  )
}

export default Categories



