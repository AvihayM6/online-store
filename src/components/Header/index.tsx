import styled from 'styled-components'
const HeaderWrapper = styled.header`
  padding: 10px;
  background: blue;
  height: 50px;
  display: flex;
  align-items: center;
  color: #fff;
`

export const Header = () => <HeaderWrapper>Store</HeaderWrapper>