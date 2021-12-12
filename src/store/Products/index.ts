import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
import { RootState } from '..'
import { Product } from '../../types/Product'
interface ProductsState {
  selectedProductId?: string
  search: string
  data: Product[]
}

const initialState = {
  data: [
    { id: '1', name: 'Coffee', description: 'Tasty Coffee', price: 10 },
    { id: '2', name: 'Chocolate', description: 'Tasty Chocolate', price: 30 },
    { id: '3', name: 'Sugar', description: 'Tasty Sugar', price: 15 },
  ],
  search: '',
} as ProductsState

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    deleteProduct: (state, { payload }: PayloadAction<string>) => {
      state.data = state.data.filter((product) => product.id !== payload)
    },
    setSelectedProductId: (
      state,
      { payload }: PayloadAction<string | undefined>
    ) => {
      state.selectedProductId = payload
    },
    saveProduct: (state, { payload }: PayloadAction<Product>) => {
      if (!payload.id) {
        payload.id = uuid()
        state.data.push(payload)
        return state
      }

      const productIndex = state.data.findIndex(
        (product) => product.id === payload.id
      )
      state.data[productIndex] = payload
    },
    updateSearchTerm: (state, { payload }: PayloadAction<string>) => {
      state.search = payload
    },
  },
})

export const {
  deleteProduct,
  setSelectedProductId,
  saveProduct,
  updateSearchTerm,
} = productsSlice.actions
export const productsReducer = productsSlice.reducer

export const selectProducts = (state: RootState) => state.products.data
export const selectSelectedProductId = (state: RootState) =>
  state.products.selectedProductId

export const selectSelectedProduct = createSelector(
  selectProducts,
  selectSelectedProductId,
  (products, selectedProductId) =>
    products.find((product) => product.id === selectedProductId)
)

export const selectSearchTerm = (state: RootState) => state.products.search

export const selectFilteredProducts = createSelector(
  selectProducts,
  selectSearchTerm,
  (products, searchTerm) => {
    console.log(searchTerm)
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }
)
