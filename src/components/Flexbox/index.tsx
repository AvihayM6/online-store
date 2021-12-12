import styled from 'styled-components'

export type FlexboxProps = {
  flexGrow?: number
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-evenly'
    | 'space-between'
    | 'space-around'
  alignItems?: 'flex-start' | 'flex-end' | 'center'
  gap?: string
  wrap?: 'wrap' | 'no-wrap' | 'warp-reverse'
  flexDirection?: 'column' | 'row' | 'row-reverse' | 'column-reverse'
}

export const Flexbox = styled.div<FlexboxProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap};
  flex-wrap: ${({ wrap }) => wrap};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-grow: ${({ flexGrow }) => flexGrow};
`
