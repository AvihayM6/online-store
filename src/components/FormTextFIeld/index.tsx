import { Controller, useFormContext } from 'react-hook-form'
import TextField from '@mui/material/TextField'

type FormTextFieldProps = { name: string; defaultValue?: string; label: string , type?: string}
export const FormTextField = ({
  name,
  type,
  label,
  defaultValue = '',
}: FormTextFieldProps) => {
  const { control } = useFormContext()
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => <TextField {...field} type={type} label={label} />}
    />
  )
}
