import React from 'react'

export default function Details(props) {
  const { username, name, location, followers, public_repos, html_url,avatar_url } = props.user;
  return(
    <React.Fragment>
    <div className='circle' > <img src={avatar_url} alt='Display Avatar'/> </div>
    <div className='details' >
     <a href = {html_url} target= 'blank' > <h3> {username} </h3></a> 
      <p>Real name <br/> <span>{name}</span> </p>
      <p> Location <br/> <span> {location} </span> </p>
      <p> Followers <br/> <span> { followers}</span> </p>
      <p> Number Public Repo <br/> <span> {public_repos} </span> </p>
    </div>
    </React.Fragment>
  )
}