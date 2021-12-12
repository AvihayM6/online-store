import DeleteIcon from '@mui/icons-material/Delete'
import ImageIcon from '@mui/icons-material/Image'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  deleteProduct,
  selectFilteredProducts, selectSelectedProductId,
  setSelectedProductId
} from '../../store/Products'

export const ProductsList = () => {
  const dispatch = useAppDispatch()
  const products = useAppSelector(selectFilteredProducts)
  const selectedProductId = useAppSelector(selectSelectedProductId)

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {products.map((product) => (
        <ListItem
          key={product.id}
          secondaryAction={
            <IconButton onClick={() => dispatch(deleteProduct(product.id))}>
              <DeleteIcon />
            </IconButton>
          }
          onClick={() => dispatch(setSelectedProductId(product.id))}
          selected={selectedProductId === product.id}
        >
          <ListItemButton>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={product.name}
              secondary={product.description}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}
