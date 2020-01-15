import React from 'react'

export default function Details(props) {
  const { username, name, location, followers, public_repos, html_url } = props.user;
  return(
    <div className='details' >
     <a href = {html_url} > <h3> {username} </h3></a> 
      <p>Real name <br/> <span>{name}</span> </p>
      <p> Location <br/> <span> {location} </span> </p>
      <p> Followers <br/> <span> { followers}</span> </p>
      <p> Number Public Repo <br/> <span> {public_repos} </span> </p>
    </div>
  )
}