import React from 'react'
import AboutUs from './pages/AboutUs'
import GlobalStyle from './components/GlobaStyle'
import Nav from './components/Nav'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'
import MovieDetail from './pages/MovieDetail'
//reouter
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <Route path="/" exact>
      <AboutUs />
      </Route>
      <Route path="/work" exact>
      <OurWork />
      </Route>
      <Route path='/work/:id'>
        <MovieDetail />
      </Route>
      <Route path="/contact">
      <ContactUs />
      </Route>
    </div>
  );
}

export default App;