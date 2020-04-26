import React from 'react';
import styled from 'styled-components'
import Container from '../components/container.jsx'
import Link from '../components/link.jsx'

const Root = styled.header`
  display: block;
`

const Header = () => (
  <Root>
    <Container>
      <Link to="/">Главная</Link>
      <Link to="/category">Категория</Link>
    </Container>
  </Root>
)

export default Header
