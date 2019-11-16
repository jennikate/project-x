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
import { faSearch, faCoffee, faBeer, faCocktail, faGlassMartini, faGlassMartiniAlt, faGlassWhiskey, faWineGlass, faWineGlassAlt } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faSearch, faCoffee, faBeer, faCocktail, faGlassMartini, faGlassMartiniAlt, faGlassWhiskey, faWineGlass, faWineGlassAlt)


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
          {}
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

  componentDidMount() {
    //must run here to set the homepage on load, haven't worked out how to pass correct params to setNavChoice from here to make it work
    this.getRandomDrink()
  }

  //this fetch is only used to call the random at first load, otherwise it's part of setNav
  getRandomDrink() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(resp => resp.json())
      .then(resp => this.setState({ drinkByName: resp }))
  }
  //called when user clicks on a drink category, it returns the list of drinks in that category
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
  //called when user clicks on specific drink to return details of it
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


  //sets the nav class, and fetches the relevant data set -- aim to move all fetch's in here
  setNavChoice(e) {
    // e.preventDefault()
    this.setState({
      mainView: e.target.id
    })
    switch (e.target.id) {
      case 'Home': {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/${e.target.dataset.url}`)
          .then(resp => resp.json())
          .then(resp => this.setState({ drinkByName: resp }))
      }; break
      case 'Category': {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/${e.target.dataset.url}`)
          .then(resp => resp.json())
          .then(resp => this.setState({ categories: resp }))
      }
    }

  }

  //switches out the page info -- aim to replace this with router for URL handling
  switchMain(param) {
    switch (param) {
      case 'Home': return <Home
        drink={this.state.drinkByName.drinks[0]} />;
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

  //render core components of page, main is called from latest view type
  render() {
    return (
      <div>
        <header className='hero is-medium'>
          <Nav
            setNavChoice={(e) => this.setNavChoice(e)}
            mainView={this.state.mainView}
          />
          <Hero />
        </header>
        <main>
          <section className='section'>
            {this.switchMain(this.state.mainView)}
          </section>
        </main>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)


