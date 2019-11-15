import React from 'react'
import ReactDOM from 'react-dom'

//
import Hero from './components/Hero'
import Nav from './components/Nav'

//called through setMain
import Home from './components/Home'
import Categories from './components/Categories'
import Drinks from './components/Drinks'

//styling
import 'bulma/css/bulma.css'
import './style.scss'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      mainView: 'Home',
      drinkType: '',
      drink: '',
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
  }

  fetchCategoryAPI() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then(resp => resp.json())
      .then(resp => this.setState({ categories: resp }))
  }

  
  setNavChoice(e) {
    e.preventDefault()
    this.setState({
      mainView: e.target.id
    })
  }

  getDrinkList(e) {
    e.preventDefault()
    this.setState({
      drinkType: (e.target.id).split(' ').join('_'),
      mainView: 'Drinks'
    })
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${(e.target.id).split(' ').join('_')}`)
      .then(resp => resp.json())
      .then(resp => this.setState({ drinksByCategory: resp }))
  }

  switchMain(param) {
    switch (param) {
      case 'Home': return <Home />;
      case 'Category':
        return <Categories
          getDrinkList={(e) => this.getDrinkList(e)}
          categories={this.state.categories.drinks}

        />;
      case 'Drinks':
        return <Drinks
          categories={this.state.drinksByCategory.drinks}
        />
    }
  }

  render() {

    return (
      <div>
        <Hero />
        <Nav
          setNavChoice={(e) => this.setNavChoice(e)}
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


