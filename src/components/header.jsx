import React from 'react';
import styled from 'styled-components'
import Container from '../components/container.jsx'
import Link from '../components/link.jsx'

const Root = styled.header`
  display: block;
`

const Category = styled(Link)`
  display: inline-block;
  margin-right: .5rem;
`

const Header = () => (
  <Root>
    <Container>
      <Category to="/">Главная</Category>
      <Category to="/category">Каталог</Category>
      <Category to="/article">Статья</Category>
    </Container>
  </Root>
)

export default Header
