import React, { Component } from 'react'

class TextareaField extends Component {
    constructor(props) {
        super(props)
        this.state = { 

          message:''
          
        };
    // Bind the handlers in order to be sure they get the correct "this" value.
        this.handleChange = this.handleChange.bind(this);
        
    };
   
    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value //need adjustment for the checkbox.
      });
    };



    render() {
        return (
        
            <div>
            <label  className="label-text" htmlFor="text-area">Message</label>
            <textarea className="input-text" 
                      id="text-area" 
                      name="message"
                      placeholder="Your Message"
                      onChange={this.handleChange}>
            </textarea >
          </div>

        )
    }
}

export default TextareaField