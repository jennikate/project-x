import React from 'react'
import ReactDOM from 'react-dom'
import Hero from './components/Hero'
import Nav from './components/Nav'

import 'bulma/css/bulma.css'
import './style.scss'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      categories: {
        drinks: []
      },
      drinksByCategory: {
        drinks: [
          {
            strDrink: 'default',
            strDrinkThumb: 'default',
            idDrink: 'default'
          }
        ]
      }
    }
  }

  componentDidMount() {
    this.fetchCategoryAPI() //actually should happen onclick of categories
    this.fetchDrinkByCategoryAPI() //actually called on category click which passes the cat type
  }

  fetchCategoryAPI() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then(resp => resp.json())
      .then(resp => this.setState({ categories: resp }))
  }

  fetchDrinkByCategoryAPI() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
      .then(resp => resp.json())
      .then(resp => this.setState({ drinksByCategory: resp }))
  }

  loadResults(e) {
    e.preventDefault()
    console.log('The link was clicked.')
    console.log(e.target.id)
  }

  render() {
    return (
      <div>
        <Hero />
        <Nav 
          loadResults={(e) => this.loadResults(e)}
        />

        




      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
