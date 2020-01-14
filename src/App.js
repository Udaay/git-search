import React from 'react';
import Entry from './Entry'
import './App.css';
import Details from './Details';

export default class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      username: 'udaay',
      name:'',
      pic:'',
      location:'',
      followers: '',
      public_repos:'',
      url:''
    };
    this.fetched = false;
  }

  handleEntry = (username) => {
    let url = `https://api.github.com/users/${username}`
    let request = new XMLHttpRequest();
    request.open('GET',url)
    request.responseType = 'json';
    request.send();
    // let r = request;
    request.onload = () => {
      console.log(request.response);
      let { name, location, followers, public_repos} = request.response;
      this.setState({username,
      name,
      location,
      followers,
      public_repos
      })
    }
    // Use setState to 
  }

  render() {
    return(
      <React.Fragment>
        <Entry handleEntry={this.handleEntry} />
        if(true){
          <Details user={this.state} />
        }
      </React.Fragment>
    );
  }

}


