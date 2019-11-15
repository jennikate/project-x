import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      categories: {
        drinks: []
      }
    }
  }

  componentDidMount() {
    this.fetchAPI()
  }

  fetchAPI() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then(resp => resp.json())
      .then(resp => this.setState({ categories: resp }))
  }



  render() {

    console.log((this.state.categories.drinks[0]))
    return (
      <div>
        {this.state.categories.drinks.map((drink, i) => {
          return (
            <div key={i}>{drink.strCategory}</div>
          )
        })}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
