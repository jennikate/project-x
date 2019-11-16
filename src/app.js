import React from 'react'
import ReactDOM from 'react-dom'

//structure pages
import Hero from './components/Hero'
import Nav from './components/Nav'

//called through setMain
import Home from './components/Home'
import Categories from './components/Categories'
import Drinks from './components/Drinks'
import Drink from './components/Drink'

//styling
import 'bulma/css/bulma.css'
import './style.scss'

//fontawesome icons, put into a library so can be used on any component without having to import again
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faSearch, faCoffee)


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
      },
      drinkByName: {
        drinks: [
          {
          }
        ]
      }
    }
  }


  setNavChoice(e) {
    e.preventDefault()
    this.setState({
      mainView: e.target.id
    })
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then(resp => resp.json())
      .then(resp => this.setState({ categories: resp }))
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

  getDrink(e) {
    e.preventDefault()
    this.setState({
      drink: e.target.id,
      mainView: 'Drink'
    })
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${e.target.id}`)
      .then(resp => resp.json())
      .then(resp => this.setState({ drinkByName: resp }))
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
          getDrink={(e) => this.getDrink(e)}
          drinks={this.state.drinksByCategory.drinks}
        />;
      case 'Drink':
        return <Drink
          drink={this.state.drinkByName.drinks}
        />
    }
  }

  render() {

    return (
      <div>
        <header className='hero is-large'>
          <Nav
            setNavChoice={(e) => this.setNavChoice(e)}
            mainView={this.state.mainView}
          />
          <Hero />
        </header>
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


