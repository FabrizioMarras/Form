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
    console.log('A form was submitted', this.state);
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
                
                  <TextInputField  myFormProp = {this.state.name} 
               updateStateProp = {this.updateState}/>

                  <TextareaField myFormProp = {this.state.message} 
               updateStateProp = {this.updateState}/>
                
                
              </div>
              <div className="flex-item button">
                <div className="button-flex">
                  
                  <RadioButtonGroupField myFormProp = {this.state.radio} 
               updateStateProp = {this.updateState}/>

                  <CheckboxGroupField myFormProp = {this.state.checkbox} 
               updateStateProp = {this.updateState}/>
               
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