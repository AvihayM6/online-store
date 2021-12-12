import Button from '@mui/material/Button'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  selectSearchTerm,
  setSelectedProductId,
  updateSearchTerm,
} from '../../store/Products'
import { Flexbox } from '../Flexbox'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'

const Wrapper = styled(Flexbox)`
  padding: 10px;
  margin: 10px 0;
`
export const Topbar = () => {
  const searchTerm = useAppSelector(selectSearchTerm)
  const dispatch = useAppDispatch()
  return (
    <Wrapper alignItems="center" gap="10px">
      <Button
        variant="contained"
        onClick={() => dispatch(setSelectedProductId())}
      >
        Add
      </Button>
      <TextField
        placeholder="search product"
        value={searchTerm}
        onChange={(e) => dispatch(updateSearchTerm(e.target.value))}
      />
    </Wrapper>
  )
}
