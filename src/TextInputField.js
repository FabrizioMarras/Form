import React, { Component } from 'react'

class TextInputField extends Component {

    constructor(props) {
        super(props)
        this.state = { 
          name:''
          
        }
    // Bind the handlers in order to be sure they get the correct "this" value.
        this.handleChange = this.handleChange.bind(this)
        
    }
   
    handleChange(event) {

      this.setState({
        [event.target.name]: event.target.value 
      })
    }

    render() {
        return (
        
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

        )
    }
}

export default TextInputField