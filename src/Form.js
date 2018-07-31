import React, { Component } from 'react'
import './Form.css';

class Note extends Component {
    render() {
      return (
        <div className="form">
        <h1 className="form-title">Form Title</h1>
        <form >
          
          {/* error in the console when try to nest <li> elements. 
          A series of divs are used instead - suggestion: look up React documentation 
          and solve this issues with nested <li> */}
          <div className="form-content">
            <div className="form-flex">
              <div className="flex-item text">
                <div>
                  <label className="label-text" htmlFor="text-box">Name</label>
                  <input className="input-text" id="input-text" type="text" value="Name and Last Name" name="name" ></input>
                </div>
                <div>
                  <label className="label-text" htmlFor="text-area">Message</label>
                  <textarea className="input-text" id="text-area" type="textarea" value="Name and Last Name" name="message"></textarea >
                </div>
              </div>
              <div className="flex-item button">
                <div className="button-flex">
                <div className="button-item">
                  <div className="radio-box">
                    <input id="radio-01" type="radio" name="radio" value="Radio button A"/>
                    <label className="button-text" htmlFor="radio-01">Radio A</label>
                  </div>
                  <div className="radio-box">
                    <input id="radio-02" type="radio" name="radio" value="Radio button B"/>
                    <label className="button-text" htmlFor="radio-02">Radio B</label>
                  </div>
                </div>
                <div className="button-item">
                  <div className="check-box">
                    <input id="checkbox-01" type="checkbox" name="checkbox" value="checkbox A"/>
                    <label className="button-text" htmlFor="checkbox-01">Checkbox A</label>
                  </div>
                  <div className="check-box">
                    <input id="checkbox-02" type="checkbox" name="checkbox" value="checkbox B"/>
                    <label className="button-text" htmlFor="checkbox-02">Checkbox B</label>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="submit">
              <input id="submit" type="submit" value="submit"/>
            </div>
          </div>
        </form>
        </div>
      )
    }
  }

export default Note