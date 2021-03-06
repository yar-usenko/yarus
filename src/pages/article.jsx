import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import Container from '../components/container'
import Breadcrumbs from '../components/breadcrumbs.jsx'
import Heading from '../components/heading.jsx'

const Article = styled.article`
  max-width: 75ch;
`;

const ArticlePage = () => (
  <Layout>
    <Container>
      <Breadcrumbs
        links={[{
          to: '/',
          content: 'Главная'
        }]}
      />
      <Heading>Интернет-магазин – для вашего комфорта</Heading>
      <Article>
        <ul>
          <li>Интернет-магазин продает товар, который есть в наличии в гипермаркетах сети Новая Линия</li>
          <li>Мы доставим товар в любой населенный пункт Украины службами доставки, или вы можете забрать его самостоятельно, из магазина</li>
          <li>Заказ на сайте можно оформить круглосуточно. При формировании заказа выберите удобный для вас способ доставки – Новой Почтой, курьером, или самовывозом из магазина, а также тип оплаты.</li>
          <li>График работы интернет-магазина 8:00 – 21:00, без выходных</li>
        </ul>
        <h2>С чего начать?</h2>
        <ul>
          <li>Перед формированием заказа выберите ближайший к вам гипермаркет. Цены на товар всегда актуальны, соответствуют выбранному магазину, указаны в гривнах, с НДС.</li>
          <li>Пользуйтесь каталогом, поиском, фильтрами, это удобно.</li>
        </ul>
        <h2>Чтобы оформить заказ:</h2>
        <ul>
          <li>Нажмите кнопку «В корзину» на странице товара.</li>
          <li>Проверьте наличие в корзине.</li>
          <li>Укажите адрес, куда будет доставлен заказ, или магазин, откуда удобно забрать самовывозом.</li>
          <li>Укажите удобный способ оплаты и подтвердите заказ.</li>
        </ul>
        <h2>Заказ создан, что дальше?</h2>
        <ul>
          <li>На указанную вами электронную почту будет продублировано письмо со списком товаров.</li>
          <li>Если возникнут вопросы, с вами свяжется консультант и согласует детали.</li>
          <li>После проверки заказа мы сообщим вам о дате доставки.</li>
        </ul>
      </Article>
    </Container>
  </Layout>
)

export default ArticlePage;
