import React from 'react'

export default function Details(props) {
  const { username, name, location, followers, public_repos } = props.user
  return(
    <React.Fragment>
      <h3> {username} </h3>
      <p>Real name <br/> {name} </p>
      <p> Location <br/> {location} </p>
      <p> Followers <br/> {followers} </p>
      <p> Number Public Repo <br/> {public_repos} </p>
    </React.Fragment>
  )
}