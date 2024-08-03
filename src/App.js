import {Switch, Route} from 'react-router-dom'

import './App.css'

import Home from './components/Home'

import NotFound from './components/NotFound'

import TeamMatches from './components/TeamMatches'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/team-matches/:id" component={TeamMatches} />
    <Route exact path ="/not-found"component={NotFound} />
  </Switch>
)

export default App
