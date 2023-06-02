import { useMemo, useState } from 'react'

export const useForm = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue)

  const onValueChangeHandler = (event) => {
    setValue(event.target.value)
  }

  return [value, onValueChangeHandler]
}

export const useChange = (name = '', values = []) => {
  const [value, setValue] = useState(
    localStorage.getItem(`catetan-${name}`) || values[0]
  )

  const onValueChangeHandler = () => {
    setValue((prevValue) => (prevValue === values[0] ? values[1] : values[0]))
    localStorage.setItem(
      `catetan-${name}`,
      value === values[0] ? values[1] : values[0]
    )
  }

  return useMemo(() => {
    return { value, onValueChangeHandler }
  }, [value])
}
