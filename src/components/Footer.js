import React from 'react'

const Footer = ({ text }) => {
  return (
    <footer className='footer'>
      <p>The page currently uses a development API from <a href='https://www.thecocktaildb.com/api.php'>TheCocktailDb</a> and only returns a limited number of ingredients.</p>
    </footer>

  )
}

export default Footer