import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Post from './Post'

const StyledHome = styled.div``;

function Home() {
  return (
    <StyledHome>
      <div>Hello from Home</div>
      <Link to={`/post/${post.id}`}>
        <Post />
      </Link>
    </StyledHome>
  )
}

export default Home