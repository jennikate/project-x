import React from 'react'

const Nav = ({ setNavChoice, mainView }) => {
  // mainView === this.id ? activeClass = 'is-active' : ''

  return (
    <div className="tabs is-medium">
      <ul>
        <p>View cocktails... </p>
        <li><a className={mainView === 'Home' ? 'is-active' : ''} id='Home' onClick={setNavChoice}>by Random</a></li>
        <li><a className={mainView === 'Category' ? 'is-active' : ''} id='Category' onClick={setNavChoice}>by Category</a></li>
      </ul>
    </div>

  )
}

export default Nav
