import React from 'react'; //Since "react" does not have "./ " in front of it, it is coming from a Node Module's folder.
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //Importing the App.js file. The ./ looks for the file in the same folder as index.js. We can leave out .js in App.js.
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"; //Importing Bootstrap into the file

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
