import React, { Component } from 'react'

class RadioButtonGroupField extends Component {

    //OLD code used when the form was in one single component:

    // constructor(props) {
    //     super(props)
    //     this.state = { 
         
    //       radio:''
          
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
       
            <div className="radio-box">
            <input  id="radio-01" 
                    type="radio" 
                    name={this.props.radioTitleProp}
                    value={this.props.labelProp}
                    onChange={this.props.updateStateProp}
                    />
            <label className="button-text" htmlFor="radio-01">{this.props.labelProp}</label>
          </div>
      
        )
    }
}

export default RadioButtonGroupField