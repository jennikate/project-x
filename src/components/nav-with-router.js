import React from 'react'
// import Home from './Home'
// import Categories from './Categories'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom'

const Nav ({ loadResults }) {
  return (
    <div className="tabs is-medium">
      <ul>
        <p>View cocktails... </p>
        <li className='is-active'><a onClick={console.log('click')}>by Random</a></li>
      </ul>
    </div>
  )
}

export default Nav



// <Router>
//       <div>
//         <div className="tabs is-medium">
//           <ul>
//             <p>View cocktails...</p>
//             <li className='is-active'>
//               <Link to='/'>by Random</Link>
//             </li>
//             <li>
//               <Link to="/Categories">by Category</Link>
//             </li>
//             {/* <li>
//             <Link to="/ingredient">by Ingredient</Link>
//           </li>
//           <li>
//             <Link to="/glass">by Glass Type</Link>
//           </li> */}
//           </ul>
//         </div>
//         <Switch>
//           <Route exact path='/'>
//             <Home />
//           </Route>
//           <Route path="/Categories">
//             <Categories
//               categories={categories}
//             />
//           </Route>
//           {/* <Route path="/ingredient">
//             <Ingredients />
//           </Route>
//           <Route path="/glass">
//             <GlassType />
//           </Route> */}
//         </Switch>
//       </div>
//     </Router>