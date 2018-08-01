import React, { Component } from 'react'
import './Form.css';
import './Style_me_please.css';

class Form extends Component {
  constructor(props) {
      super(props)
      this.state = { 
        // Definign the state is necessary only to have the log(this.state) in this order.
        name:'',
        message:'',
        radio:'',
        // checkbox: i think we can try to have it as an array of checkbox values = each checkbox labels. For now this is how i put it:
        checkboxA:'',
        checkboxB:''
      };
  // Bind the handlers in order to be sure they get the correct "this" value.
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  };
 
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value //need adjustment for the checkbox.
    });
  };

  handleSubmit(event) {
    console.log('A form was submitted', this.state);
    event.preventDefault();

  };

    render() {
      return (
        <div className="form">
        <h1 className="form-title">Form Title</h1>
        <form onSubmit={this.handleSubmit}>
          {/* error in the console when try to nest <li> elements. 
          A series of divs are used instead - suggestion: look up React documentation 
          and solve this issues with nested <li> */}
          <div className="form-content">
            <div className="form-flex">
              <div className="flex-item text">
                <div>
                  <label  className="label-text" 
                          htmlFor="input-text">
                    Name
                  </label>
                  <input  className="input-text" 
                          id="input-text" 
                          name="name" 
                          placeholder="Your Name" 
                          onChange={this.handleChange}>
                  </input>
                </div>
                <div>
                  <label  className="label-text" htmlFor="text-area">Message</label>
                  <textarea className="input-text" 
                            id="text-area" 
                            name="message"
                            placeholder="Your Message"
                            onChange={this.handleChange}>
                  </textarea >
                </div>
              </div>
              <div className="flex-item button">
                <div className="button-flex">
                <div className="button-item">
                  <div className="radio-box">
                    <input  id="radio-01" 
                            type="radio" 
                            name="radio" 
                            value="RadioA"
                            onChange={this.handleChange}
                            />
                    <label className="button-text" htmlFor="radio-01">Radio A</label>
                  </div>
                  <div className="radio-box">
                    <input  id="radio-02" 
                            type="radio" 
                            name="radio"
                            value="RadioB" 
                            onChange={this.handleChange}
                            />
                    <label className="button-text" 
                    htmlFor="radio-02">Radio B</label>
                  </div>
                </div>
                <div className="button-item">
                  <div className="check-box">
                    <input  id="checkbox-01" 
                            type="checkbox" 
                            name="checkboxA" 
                            value="checkboxA" 
                            onChange={this.handleChange}/>
                    <label className="button-text" 
                    htmlFor="checkbox-01">Checkbox A</label>
                  </div>
                  <div className="check-box">
                    <input  id="checkbox-02" 
                            type="checkbox" 
                            name="checkboxB" 
                            value="checkboxB"
                            onChange={this.handleChange}/>
                    <label className="button-text" htmlFor="checkbox-02">Checkbox B</label>
                  </div>
                </div>
              </div>
              </div> 
            </div>
            <div className="submit">
            {/* Clicking the submit button is going to send the form data to the console: 'onClick' will start the function submit". */}
              <input id="submit" 
              type="submit" 
              value="submit"/>
            </div>
          </div>
        </form>
        </div>
      )
    };
  };

export default Form