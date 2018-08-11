import React, { Component } from 'react'

class CheckboxGroupField extends Component {

    
    //OLD code used when the form was in one single component:

    // constructor(props) {
    //     super(props)
    //     this.state = { 
    //       checkboxA:'',
    //       checkboxB:''
    //     };
    // // Bind the handlers in order to be sure they get the correct "this" value.
    //     this.handleChange = this.handleChange.bind(this);
        
    // };
   
    // handleChange(event) {
    //   this.setState({
    //     [event.target.name]: event.target.value //need adjustment for the checkbox.
    //   });
    // };

    render() {
        return (
        
        
            <div className="check-box">
              <input  id="checkbox" 
                      type="checkbox" 
                      name={this.props.nameProp} 
                      value={this.props.labelProp}
                      onChange={this.props.updateStateProp}/>
              <label className="button-text" 
              htmlFor="checkbox">{this.props.labelProp}</label>
            </div>
            
        

        )
    }
}

export default CheckboxGroupField