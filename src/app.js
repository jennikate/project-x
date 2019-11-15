import React from 'react'
import ReactDOM from 'react-dom'

//
import Hero from './components/Hero'
import Nav from './components/Nav'

//called through setMain
import Home from './components/Home'
import Categories from './components/Categories'

//styling
import 'bulma/css/bulma.css'
import './style.scss'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      mainView: 'Home',
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
    //update with param for which drink category
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
      .then(resp => resp.json())
      .then(resp => this.setState({ drinksByCategory: resp }))
  }

  setMain(e) {
    e.preventDefault()
    this.setState({ 
      mainView: e.target.id
    })
  }

  switchMain(param) {
    switch (param) {
      case 'Home': return <Home />;
      case 'Category':
        return <Categories
          categories={this.state.categories.drinks}
        />;
    }
  }


  

  render() {
    return (
      <div>
        <Hero />
        <Nav
          setMain={(e) => this.setMain(e)}
          mainView={this.state.mainView}
        />
        <main>
          {this.switchMain(this.state.mainView)}
        </main>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)


