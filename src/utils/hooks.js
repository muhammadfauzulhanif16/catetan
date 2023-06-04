import { useState } from 'react'

export const useForm = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue)

  const onValueChangeHandler = (event) => {
    setValue(event.target.value)
  }

  return [value, onValueChangeHandler]
}
