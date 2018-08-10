import React, { Component } from 'react'
import TextInputField from './TextInputField';
import TextareaField from './TextareaField';
import RadioButtonGroupField from './RadioButtonGroupField';
import CheckboxGroupField from './CheckboxGroupField';
import SubmitButton from './SubmitButton';
import './Form.css';
import './Style_me_please.css';

class Form extends Component {
  constructor(props) {
      super(props)
      this.state = { 
        // form: ''       
      }
      this.updateState = this.updateState.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  };
 
updateState(e) {

    this.setState ({
      [e.target.name]: e.target.value
    })
  
}

  handleSubmit(event) {
    var form = this.state
    console.log('A form was submitted', form);
    event.preventDefault();

  };

    render() {
      return (
        <div className="form">
        <h1 className="form-title">Form Title</h1>
        <form onSubmit={this.handleSubmit}>
         
          <div className="form-content">
            <div className="form-flex">
              <div className="flex-item text">
                
                  <TextInputField   labelProp = {"Name"}
                                    // myFormProp = {this.state.name} 
                                    updateStateProp = {this.updateState}/>

                  <TextareaField  labelProp = {"Message"}
                                  // myFormProp = {this.state.message} 
                                  updateStateProp = {this.updateState}/>
                
                
              </div>
              <div className="flex-item button">
                <div className="button-flex">
                {/* Title for the Radio Button Section: */}
                  
                  <div className="button-item">
                    <RadioButtonGroupField  labelProp={"Radio A"} 
                                            radioTitleProp={"Radio Title"}
                                            // myFormProp = {this.state.radio} 
                                            updateStateProp = {this.updateState}/>
                    <RadioButtonGroupField  labelProp={"Radio B"} 
                                            // myFormProp = {this.state.radio} 
                                            updateStateProp = {this.updateState}/>
                  </div>
                  <div className="button-item">
                    <CheckboxGroupField   labelProp={"Checkbox A"} 
                                          // myFormProp = {this.state.checkbox} 
                                          updateStateProp = {this.updateState}/>
                    <CheckboxGroupField   labelProp={"Checkbox B"}
                                          // myFormProp = {this.state.checkbox} 
                                          updateStateProp = {this.updateState}/>
               </div>
              </div>
              </div> 
            </div>
            
                  <SubmitButton />

          </div>
        </form>
        </div>
      )
    };
  };

export default Form