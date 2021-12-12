import Button from '@mui/material/Button'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { saveProduct, selectSelectedProduct } from '../../store/Products'
import { Flexbox } from '../Flexbox'
import { FormTextField } from '../FormTextFIeld'
import styled from 'styled-components'
import { Product } from '../../types/Product'

const SubmitWrapper = styled.div`
  margin: 10px 0;
`

const initialProductForm = {
  name: '',
  description: '',
  price: 0,
}

export const ProductForm = () => {
  const dispatch = useAppDispatch()
  const selectedProduct = useAppSelector(selectSelectedProduct)
  const methods = useForm({ defaultValues: initialProductForm })

  useEffect(() => {
    selectedProduct
      ? methods.reset(selectedProduct)
      : methods.reset(initialProductForm)
  }, [selectedProduct, methods])
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data: Product) => {
          dispatch(saveProduct(data))
        })}
      >
        <h1>{selectedProduct ? `Edit ${selectedProduct.name} Product` : `Create Product`}</h1>
        <Flexbox flexDirection="column" gap="20px">
          <FormTextField name="name" label="Name" />
          <FormTextField name="description" label="Description" />
          <FormTextField name="price" label="Price" type="number" />
        </Flexbox>
        <SubmitWrapper>
          <Button variant="contained" type="submit">
            Save
          </Button>
        </SubmitWrapper>
      </form>
    </FormProvider>
  )
}
