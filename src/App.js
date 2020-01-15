import React from 'react';
import Entry from './Entry'
import './App.css';
import Details from './Details';

export default class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      username: '',
      name:'',
      pic:'',
      location:'',
      followers: '',
      public_repos:'',
      html_url:''
    };
    this.fetched = true;
  }

  handleEntry = (username) => {
    let url = `https://api.github.com/users/${username}`
    let request = new XMLHttpRequest();
    request.open('GET',url)
    request.responseType = 'json';
    request.send();
    request.onload = () => {
      let { login, name, location, followers, public_repos, message, html_url} = request.response;
      this.fetched = message ? false : true;
      this.setState({username: login,
      name,
      location,
      followers,
      public_repos,
      html_url
      });
    }
  }

  render() {
    return(
      <React.Fragment>
        <Entry handleEntry={this.handleEntry} />
       { this.fetched && <Details user={this.state} />}
       { this.fetched || <p className='details' > Oops user Not found </p>} 
      </React.Fragment>
    );
  }

}


