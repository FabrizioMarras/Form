import React, { Component } from 'react'

class RadioButtonGroupField extends Component {

    constructor(props) {
        super(props)
        this.state = { 
         
          radio:''
          
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
        )
    }
}

export default RadioButtonGroupField