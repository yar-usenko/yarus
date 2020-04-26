import React from 'react'
import styled from 'styled-components'

const Spec = styled.dl`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
`;

const Key = styled.dt`
  position: relative;
  flex: 1 0 50%;
  margin: 0;
  padding: 0 .5rem 0 0;

  color: #666;

  &::before {
    content: "";
    display: block;
    left: 0;
    bottom: .2em;
    position: absolute;
    width: 100%;
    border-bottom: 1px dotted #d6dbe0;
  }
`

const KeyContent = styled.span`
  position: relative;
  padding-right: .5rem;
  background: #fff;
`

Spec.Key = ({ children, ...props }) => (
  <Key {...props}>
    <KeyContent>
      {children}
    </KeyContent>
  </Key>
)

Spec.Value = styled.dd`
  flex: 1 0 50%;
  margin: 0;
  padding: 0 0 0 .5rem;
`;

export default Spec;
