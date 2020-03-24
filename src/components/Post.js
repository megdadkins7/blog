import React from 'react';
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const StyledPost = styled.div``;

function Post() {
  const { title } = useParams()

  return (
    <StyledPost>
      <div>Hello from Post</div>
    </StyledPost>
  )
}

export default Post