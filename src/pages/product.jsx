import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import Container from '../components/container'
import Breadcrumbs from '../components/breadcrumbs.jsx'
import Heading from '../components/heading.jsx'
import Spec from '../components/spec.jsx'

const Section = styled.section`
  max-width: 75ch;
`;

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
      <Section>
        <h2>Описание</h2>
        <p>Плиты ДСП применяют для утепления стен, потолков и полов перед окончательной отделкой.</p>
        <p>Преимуществом плит ДСП является:</p>
        <ul>
          <li>высокая прочность</li>
          <li>жесткость</li>
          <li>однородность</li>
          <li>легкость в обработке</li>
          <li>способность прочно удерживать гвозди и шурупы</li>
        </ul>
      </Section>
      <Section>
        <h2>Характеристики</h2>
        <Spec>
          <Spec.Key>Бренд</Spec.Key>
          <Spec.Value>SwissPan</Spec.Value>

          <Spec.Key>Толщина плиты, мм</Spec.Key>
          <Spec.Value>16</Spec.Value>

          <Spec.Key>Площадь плиты, кв.м</Spec.Key>
          <Spec.Value>4.4652</Spec.Value>

          <Spec.Key>Ширина плиты, мм</Spec.Key>
          <Spec.Value>1830</Spec.Value>

          <Spec.Key>Длина плиты, мм</Spec.Key>
          <Spec.Value>2440</Spec.Value>

          <Spec.Key>Поверхность плиты</Spec.Key>
          <Spec.Value>шлифованная</Spec.Value>

          <Spec.Key>Тип плиты</Spec.Key>
          <Spec.Value>ДСП</Spec.Value>

          <Spec.Key>Страна-производитель</Spec.Key>
          <Spec.Value>Украина</Spec.Value>
        </Spec>
      </Section>
    </Container>
  </Layout>
)

export default ProductPage;
