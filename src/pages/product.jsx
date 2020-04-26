import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import Container from '../components/container'
import Breadcrumbs from '../components/breadcrumbs.jsx'
import Heading from '../components/heading.jsx'

const ProductPage = () => (
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
      <Heading>ДСП шлифованное SwissPan 2440x1830x16 СВ</Heading>
    </Container>
  </Layout>
)

export default ProductPage;
