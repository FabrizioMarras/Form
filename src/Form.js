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
        form: []       
      }
      this.handleSubmit = this.handleSubmit.bind(this);
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
                
                  <TextInputField  />

                  <TextareaField />
                
                
              </div>
              <div className="flex-item button">
                <div className="button-flex">
                  
                  <RadioButtonGroupField />

                  <CheckboxGroupField />
               
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