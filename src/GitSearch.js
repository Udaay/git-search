import React from 'react';
import Entry from './Entry'
import Details from './Details';

export default class GitSearch extends React.Component {
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
      html_url:'',
      avatar_url:'',
    };
    this.fetched = false;
    this.showDetails = false;
  }

  extractData (response) {
    this.showDetails = true;
      let { login, name, location, followers, public_repos, message, html_url, avatar_url} = response;
      console.log(response);
      this.fetched = message ? false : true;
      this.notFound = !this.fetched;
      this.setState({username: login,
      name,
      location,
      followers,
      public_repos,
      html_url,
      avatar_url,
      });
  }

  handleEntry = (username) => {
    let url = `https://api.github.com/users/${username}`;
    fetch(url).then(res => res.json()).then(data => this.extractData(data));
    // let request = new XMLHttpRequest();
    // request.open('GET',url)
    // request.responseType = 'json';
    // request.send();
    // request.onload = () => {
    //   this.showDetails = true;
    //   let { login, name, location, followers, public_repos, message, html_url, avatar_url} = request.response;
    //   console.log(request.response);
    //   this.fetched = message ? false : true;
    //   this.notFound = !this.fetched;
    //   this.setState({username: login,
    //   name,
    //   location,
    //   followers,
    //   public_repos,
    //   html_url,
    //   avatar_url,
    //   });
    // }
  }

  render() {
    return(
      <React.Fragment>
        <Entry handleEntry={this.handleEntry} />
       { this.showDetails && this.fetched && <Details user={this.state}/>}
       { this.showDetails &&  (this.fetched || <p > Oops user Not found </p>)} 
      </React.Fragment>
    );
  }

}


