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
      
      }
      this.updateState = this.updateState.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  };
 
updateState(e) {
if (e.target.type !== "checkbox") {
  this.setState ({ [e.target.name]: e.target.value })
} else {
  this.setState ({ [e.target.name]: e.target.checked })
}

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
                  
                  {/* INPUT TEXT */}
                  <TextInputField   labelProp = {"Name"}
                                    updateStateProp = {this.updateState}/>
                  
                  {/* AREAFIELD */}
                  <TextareaField  labelProp = {"Message"}
                                  updateStateProp = {this.updateState}/>
                
                
              </div>
              <div className="flex-item button">
                <div className="button-flex">
                {/* Title for the Radio Button Section: */}
                  
                  <div className="button-item">

                  {/* RADIO BUTTONS */}
                    <RadioButtonGroupField  labelProp={"Radio A"} 
                                            radioTitleProp={"Radio Title"}
                                            updateStateProp = {this.updateState}/>
                    <RadioButtonGroupField  labelProp={"Radio B"} 
                                            updateStateProp = {this.updateState}/>
                  </div>
                  <div className="button-item">
                  
                  {/* CHECKBOXES */}
                    <CheckboxGroupField   labelProp={"Checkbox A"}
                                          nameProp={"Checkbox A"} 
                                          updateStateProp = {this.updateState}/>
                    <CheckboxGroupField   labelProp={"Checkbox B"}
                                          nameProp={"Checkbox B"} 
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