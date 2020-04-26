import React from 'react'
import styled from 'styled-components'
import BaseLink from '../components/link.jsx'

const Root = styled.div``;

const List = styled.div`
  display: block;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 85%;
  line-height: 1.5rem;
`;

const Item = styled.div`
  display: inline-block;

  &:not(:last-child)::after {
    content: '/';
    font-size: 85%;
    margin-left: 1ch;
    margin-right: 1ch;
  }
`;

const Link = styled(BaseLink)`
  display: inline-block;
`;

const Breadcrumbs = ({ links, children, ...props }) => (
  <Root {...props}>
    <List>
      {links.map(({ content, ...linkProps }) => (
        <Item>
          <Link {...linkProps}>{content}</Link>
        </Item>
      ))}
    </List>
  </Root>
)

export default Breadcrumbs;
