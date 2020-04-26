import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import Container from '../components/container'
import ProductCard from '../components/product-card.jsx'
import Breadcrumbs from '../components/breadcrumbs.jsx'
import Heading from '../components/heading.jsx'

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

const CategoryPage = () => (
  <Layout>
    <Container>
      <Breadcrumbs
        links={[{
          to: '/category',
          content: 'Каталог'
        }, {
          to: '/category',
          content: 'Стройматериалы'
        }, {
          to: '/category',
          content: 'Дерево'
        }]}
      />
      <Heading>ДСП шлифованное</Heading>
      <ProductList>
        {Array.from(Array(21), () => (
          <ProductListItem>
            <ProductCard />
          </ProductListItem>
        ))}
      </ProductList>
    </Container>
  </Layout>
)

export default CategoryPage
