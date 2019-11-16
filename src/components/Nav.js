import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = ({ setNavChoice, mainView }) => {

  return (
    <div className="hero-head" >
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              {/* <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"> */}
            </a>
            <span className="navbar-burger burger" data-target="navbarMenuHeroA">
              <span></span> {/* needs to be empty to display the burger */}
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" className="navbar-menu">
            <div className="navbar-end">
              <span className="navbar-item">
                <a className={mainView === 'Home' ? 'is-active' : ''} id='Home' onClick={setNavChoice}>Random Cocktail</a>
              </span>
              <span className='navbar-item'>
                <a className={mainView === 'Category' ? 'is-active' : ''} id='Category' onClick={setNavChoice}>by Category</a>
              </span>
              <span className="navbar-item">
                <p className="control has-icons-right has-icons-right">
                  <input className="input is-small" type="search" placeholder="Search cocktails" />
                  <span className="icon is-small is-right">
                    <FontAwesomeIcon icon="search" />
                  </span>
                </p>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav


