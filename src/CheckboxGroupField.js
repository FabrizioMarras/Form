import React, { Component } from 'react'

class CheckboxGroupField extends Component {

    constructor(props) {
        super(props)
        this.state = { 
          
          checkboxA:'',
          checkboxB:''
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

        )
    }
}

export default CheckboxGroupField