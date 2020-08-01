import React from 'react';
import Store from './store/basicstore/BasicStore'
import UsernameDisplayer from './components/usernamedisplayer/UsernameDisplayer'
import UsernameComponent from './components/usernamecomponent/UsernameComponent'
import UsernameWithReduxToolkit from './containers/usernamewithreduxtoolkit/UsernameWithReduxToolkit'
import UsernameWithAuthSlice from './components/usernamewithauthslice/UsernameWithAuthSlice'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Store>
          <p>Username with auth slice</p>
          <UsernameWithAuthSlice></UsernameWithAuthSlice>
          <p>Username with redux toolkit</p>
          <UsernameWithReduxToolkit></UsernameWithReduxToolkit>
          <p>Basic react app to test useReducer and useContext hooks</p>
          {/* <UsernameUpdater /> */}
          <UsernameDisplayer></UsernameDisplayer>
          {/* <SetUsername /> */}
          <UsernameComponent/>
        </Store>
      </header>
    </div>
  );
}

export default App;
