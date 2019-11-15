import React from 'react'

const Nav = ({ loadResults }) => {
  return (
    <div className="tabs is-medium">
      <ul>
        <p>View cocktails... </p>
        <li className='is-active'><a onClick={loadResults}>by Random</a></li>
        <li><a>by Category</a></li>
      </ul>
    </div>

  )
}

export default Nav