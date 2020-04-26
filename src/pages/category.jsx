import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import Container from '../components/container'

const ProductList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const ProductListItem = styled.li`
  display: block;
  flex: 1 0 12rem;
  min-width: 8rem;
  max-width: 12rem;
`

const NotFoundPage = () => (
  <Layout>
    <Container>
      <div>Категория > Категория</div>
      <h1>Категория</h1>
      <ProductList>
        {Array.from(Array(16), () => (
          <ProductListItem>
            product
          </ProductListItem>
        ))}
      </ProductList>
    </Container>
  </Layout>
)

export default NotFoundPage
