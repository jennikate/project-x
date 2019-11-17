import React from 'react'
import ReactDOM from 'react-dom'

//structure pages
import Hero from './components/Hero'
import Nav from './components/Nav'
import Footer from './components/Footer'

//called through setMain
import Home from './components/Home'
import Categories from './components/Categories'
import Ingredients from './components/Ingredients'
import Glass from './components/Glass'
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
      searchCocktails: '',
      categories: { drinks: [] },
      ingredients: { drinks: [] },
      glass: { drinks: [] },
      drinksByCategory: { drinks: [ { } ] },
      drinkByName: { drinks: [ { } ] },
      drinkByRandom: { drinks: [ { } ] },
      searchResults: {  drinks: [ { } ] },
      mobileMenuOpen: false
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
      .then(resp => this.setState({ drinkByRandom: resp }))
  }

  //handle search bar
  updateInput(e) {
    this.setState({
      searchCocktails: e.target.value
    })
  }

  //handle mobile nav
  //on burger click, change between burger and x based on state of open or closed (open will also show menu by default)
  //on menu item click, change menu state to closed (this is done by unchecking nav-toggle-state, which should change burger state to closed as well)
  handleMobileMenuClick(e) {
    //if is currently false, set to true else vice versa
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen ? true : false
    })
  }



  //FETCH API DATA -- different fetch URLs based on what user clicks
  setNavChoice(e) {
    e.preventDefault()
    this.setState({
      mainView: e.target.dataset.group
    })
    switch (e.target.dataset.group) {
      case 'Home': {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/${e.target.dataset.url}`)
          .then(resp => resp.json())
          .then(resp => this.setState({ drinkByRandom: resp }))
      }; break
      case 'Category': {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/${e.target.dataset.url}`)
          .then(resp => resp.json())
          .then(resp => this.setState({ categories: resp }))
      }; break
      case 'Ingredients': {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/${e.target.dataset.url}`)
          .then(resp => resp.json())
          .then(resp => this.setState({ ingredients: resp }))
      }; break
      case 'Glass': {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/${e.target.dataset.url}`)
          .then(resp => resp.json())
          .then(resp => this.setState({ glass: resp }))
      }; break
      case 'Drinks': {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/${e.target.dataset.url}${(e.target.dataset.id).split(' ').join('_')}`)
          .then(resp => resp.json())
          .then(resp => this.setState({ drinksByCategory: resp }))
      }; break
      case 'Search': {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/${e.target.dataset.url}${this.state.searchCocktails}`)
          .then(resp => resp.json())
          .then(resp => this.setState({ searchResults: resp }))
      }; break
      case 'Drink': {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/${e.target.dataset.url}${e.target.dataset.id}`)
          .then(resp => resp.json())
          .then(resp => this.setState({ drinkByName: resp }))
      }
    }
  }

  //switches out the page info -- aim to replace this with router for URL handling
  //search and category click both return Drinks page, just with different results
  switchMain(param) {
    switch (param) {
      case 'Home': return <Home
        drink={this.state.drinkByRandom.drinks[0]} />
      case 'Category':
        return <Categories
          setNavChoice={(e) => this.setNavChoice(e)}
          categories={this.state.categories.drinks}
        />
      case 'Ingredients':
        return <Ingredients
          setNavChoice={(e) => this.setNavChoice(e)}
          ingredients={this.state.ingredients.drinks}
        />
      case 'Glass':
        return <Glass
          setNavChoice={(e) => this.setNavChoice(e)}
          glass={this.state.glass.drinks}
        />
      case 'Drinks':
        return <Drinks
          setNavChoice={(e) => this.setNavChoice(e)}
          drinks={this.state.drinksByCategory.drinks}
        />
      case 'Search':
        return <Drinks
          setNavChoice={(e) => this.setNavChoice(e)}
          drinks={this.state.searchResults.drinks}
        />
      case 'Drink':
        return <Drink
          drink={this.state.drinkByName.drinks[0]}
        />
    }
  }

  //render core components of page, main is called from latest view type
  render() {
    return (
      <div>
        <header className='hero is-medium'>

          <Hero />
        </header>

        <Nav
          setNavChoice={(e) => this.setNavChoice(e)}
          updateInput={(e) => this.updateInput(e)}
          runSearch={(e) => this.runSearch(e)}
          handleMobileMenuClick={(e) => this.handleMobileMenuClick(e)}
          mainView={this.state.mainView}
        />
        <main>
          <section className='section'>
            {this.switchMain(this.state.mainView)}
          </section>
        </main>
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

