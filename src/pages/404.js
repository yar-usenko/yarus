import React from "react"
import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout>
    <h1>Страница не найдена | Ошибка 404</h1>
    <p>Скорее всего эта страница никогда не существовала, либо стала ненужной и мы её грохнули.</p>
    <p>Так бывает, не расстраивайтесь. <a href="/">На главной</a> есть ещё страницы, не хуже этой.</p>
    <p>Жаловаться сюда → <a href="mailto:usenko.jaroslav@gmail.com">usenko. jaroslav@gmail. com</a></p>
  </Layout>
)

export default NotFoundPage
