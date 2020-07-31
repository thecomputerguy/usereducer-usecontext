import React from 'react';
import Store from './store/basicstore/BasicStore'
import UsernameDisplayer from './components/usernamedisplayer/UsernameDisplayer'
import SetUsername from './containers/setusername/SetUsername'
import UsernameUpdater from './containers/usernameupdater/UsernameUpdater'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Store>
          <p>Basic react app to test useReducer and useContext hooks</p>
          <UsernameUpdater />
          <UsernameDisplayer></UsernameDisplayer>
          <SetUsername />
        </Store>
      </header>
    </div>
  );
}

export default App;
