import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import localStorage from './localStorage';



it('renders without crashing', () => {
  

  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  })
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  
  ReactDOM.unmountComponentAtNode(div);
});


const localStorageMock = (function() {
  let store = {}
  return {
    getItem: function(key) {
      return store[key] || null
    },
    setItem: function(key, value) {
      store[key] = value.toString()
    },
    removeItem: function(key) {
      delete store[key]
    },
    clear: function() {
      store = {}
    },
  }
})()




