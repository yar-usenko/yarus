import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  min-height: 100vh;
`;

const Main = styled.div`
  flex: 1;
`;

const Layout = ({ children, ...props }) => (
  <Root>
    <GlobalStyle />
    <Header />
    <Main>
      {children}
    </Main>
    <Footer />
  </Root>
);

export default Layout;
