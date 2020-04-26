import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import Container from '../components/container'
import ProductCard from '../components/product-card.jsx'

const ProductList = styled.ul`
  display: grid;
  grid-gap: 1.5rem 1rem;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const ProductListItem = styled.li`
  display: block;
`

const NotFoundPage = () => (
  <Layout>
    <Container>
      <div>Каталог > Стройматериалы > Дерево</div>
      <h1>Категория</h1>
      <ProductList>
        {Array.from(Array(16), () => (
          <ProductListItem>
            <ProductCard />
          </ProductListItem>
        ))}
      </ProductList>
    </Container>
  </Layout>
)

export default NotFoundPage
