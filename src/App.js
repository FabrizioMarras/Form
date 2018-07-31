import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to Fabrizio Marras Website!</h1>
        </header>
        <p className="App-intro">
        <form>
          <ul>
            <li>
              <label for="text-box">Text Input Field:</label>
              <input id="text-box" type="text" value="Insert text here"/>
              
            </li>
            <li>
              <label for="text-area">Textarea Field</label>
              <textarea id="text-area" type="textarea" value="Write some text here."/>
              
            </li>
            <li>
              <input id="radio-01" type="radio" value="Radio button A"/>
              <label for="radio-01">Radio Button A</label>
            </li>
            <li>
              <input id="radio-02" type="radio" value="Radio button B"/>
              <label for="radio-02">Radio Button B</label>
            </li>
            <li>
              <input id="checkbox-01" type="checkbox" value="Checkbox A"/>
              <label for="checkbox-01">Checkbox A</label>
            </li>
            <li>
              <input id="checkbox-02" type="checkbox" value="Checkbox B"/>
              <label for="checkbox-02">Checkbox B</label>
            </li>
            <li>
              <input id="submit-btn" type="submit" value="Submit"/>
            </li>
          </ul>
        </form>
        </p>
      </div>
    );
  }
}

export default App;
