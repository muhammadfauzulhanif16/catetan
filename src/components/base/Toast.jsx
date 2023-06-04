import { useToast } from '@chakra-ui/react'

export const Toast = (title, description, status) => {
  const toast = useToast()

  return toast({
    title,
    description,
    status,
    duration: 4000,
    isClosable: true,
    position: 'top'
  })
}
