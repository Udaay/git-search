import React, { Component } from 'react';

export default class Entry extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
    }
    // this.handleChange= this.handleChange.bind(this);
    // this.handleSubmit= this.handleSubmit.bind(this);
    // this.handlePress= this.handlePress.bind(this);
  }

  handleChange = (event) => {
    this.setState({input: event.target.value});
  }

  handlePress = (e) => {
    if(e.keyCode === 13) // To Handle Enter Button
    {
     this.handleSubmit();
    }
  } 

  handleSubmit = () => {
    let { input } = this.state
    if(input !== ''){
      this.props.handleEntry(this.state.input);
    }
    this.setState({input: ''})
    document.querySelector('input').value = '';
  }

  render() {
    return (
      <div className= 'bottom'>
         <input placeholder="type username..." type="text" autoFocus onChange= {this.handleChange} onKeyDown = {this.handlePress} />
         <br></br>
         <button onClick={this.handleSubmit} > Search GitHub user   </button>
      </div>
    );
  }
} 
