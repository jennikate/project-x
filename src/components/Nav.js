import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = ({ setNavChoice, mainView, updateInput, searchCocktails }) => {

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
            </a>
            <span className="navbar-burger burger" data-target="navbarMenuHeroA">
              <span></span> {/* needs to be empty to display the burger */}
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" className="navbar-menu">
            <div className='navbar-start'>
              <span className='navbar-item'>
                <h2>Viewing {mainView}</h2>
              </span>
            </div>
            <div className="navbar-end">
              <span className="navbar-item">
                <a className={mainView === 'Home' ? '' : ''} data-group='Home' data-url='random.php' onClick={setNavChoice}>Random Cocktail</a>
              </span>
              <span className='navbar-item'>
                <a className={mainView === 'Category' ? 'is-active' : ''} data-group='Category' data-url='list.php?c=list' onClick={setNavChoice}>by Category</a>
              </span>
              <span className='navbar-item'>
                <a className={mainView === 'Ingredients' ? 'is-active' : ''} data-group='Ingredients' data-url='list.php?i=list' onClick={setNavChoice}>by Ingredient</a>
              </span>
              <span className='navbar-item'>
                <a className={mainView === 'Glass' ? 'is-active' : ''} data-group='Glass' data-url='list.php?g=list' onClick={setNavChoice}>by Glass</a>
              </span>
              <span className="navbar-item">
                <form className="control has-icons-right has-icons-right">
                  <div className='field is-grouped'>
                    <input className="input is-small" type="search" placeholder="Search ingredient" onChange={updateInput} value={searchCocktails} />
                    <span className="icon is-small is-right">
                      <FontAwesomeIcon icon="search" />
                    </span>
                    <button className="button is-small is-outlined is-inverted" data-url='filter.php?i=' data-group='Search' onClick={setNavChoice}>Go</button>
                  </div>
                </form>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav


