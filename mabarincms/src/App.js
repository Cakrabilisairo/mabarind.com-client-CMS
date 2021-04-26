// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Tournaments from './pages/Tournaments'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import DetailTeamTournament from './pages/DetailTeamTournament';
import DetailMember from './pages/DetailMember';



function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
     <Router>
     <Navbar />
       <Switch>
        <Route path= '/detail-teamtournament/:idTeam/:idTournament'>
          <DetailTeamTournament />
        </Route>
        <Route path= '/detail-member/:id'>
          <DetailMember />
        </Route>
        <Route path= '/tournaments'>
        <Tournaments />
        </Route>
        <Route Path = '/'>
          <Home />
        </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
