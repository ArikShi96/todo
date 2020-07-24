import React from 'react';
import { Provider } from 'react-redux'
import Demo from './pages/demoReduxInHooks'
import './App.css';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Demo></Demo>
    </Provider>
  );
}

export default App;
