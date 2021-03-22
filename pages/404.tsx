import React from 'react'
import styled from 'styled-components'

const NotFound = () => {
  return (
    <Container>
      <Main>
        <NotFoundStyled>Page not found</NotFoundStyled>
      </Main>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  height: 100vh;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`

const NotFoundStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 7rem;
  height: 100%;
  color: var(--dark-grey);
  transform: translateY(-5%);
`

export default NotFound
