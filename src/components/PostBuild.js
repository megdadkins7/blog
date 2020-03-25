import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

//data
//import { postBuilds } from '../data

const StyledPostBuild = styled.div``;

function PostBuild() {

  const { title } = useParams()

  //const build = postBuilds[title];
  
  return (
    <StyledPostBuild>
      <div>Hello from post build</div>
    </StyledPostBuild>
  )
}

export default PostBuild