import React from 'react'
import styled from 'styled-components'
import Link from '../components/link.jsx'

const Root = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: auto;
  font-size: .85rem;
`

const Title = styled(Link)`
  display: block;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

const Thumb = styled.div`
  display: block;
  position: relative;
  padding-bottom: 100%;
`

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -50%;
  margin-top: -50%;
  max-width: 100%;
  height: auto;
  vertical-align: top;
`

const Price = styled.div`
  font-size: 1rem;
  line-height: 1.5;
`


const ProductCard = () => (
  <Root>
    <Thumb>
      <Image src="https://www.nl.ua/upload/iblock/1a9/80512002.jpg" />
    </Thumb>
    <Title to="/product">
      ДСП шлифованное SwissPan 2440x1830x16 СВ
    </Title>
    <Price>
      515 грн.
    </Price>
  </Root>
);

export default ProductCard;
