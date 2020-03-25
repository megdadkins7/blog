import React from 'react';
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//components
import Home from './components/Home'
import PostBuild from './components/PostBuild'

//styles
import GlobalStyles from './styles/GlobalStyles'

const StyledNav = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 5px 0 5px 5px;
  width: 100%; 
  background: linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(255,255,255,0) 100%);
  .Nav {
    margin: 0 5px;
    padding-right: 10px;
    background-color: transparent;
    color: #ACACAC;
    font-weight: 500;
    font-size: 1.7rem;
  }
  .Nav:hover {
    color: #fff;
  }
`

function App() {
  return (
    <Router>
      <GlobalStyles />
      <div className='Content'>
      <StyledNav>
        <nav>
          <Link className='Nav' to='/'>Home</Link>
        </nav>
      </StyledNav>
      <Switch>
        <Route path="/post/:title" children={<PostBuild />} />
        <Route path="/" children={<Home />} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
