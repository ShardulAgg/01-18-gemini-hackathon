import { useState, ChangeEvent, FormEvent } from 'react'
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Image,
  Text,
  useToast,
  ChakraProvider,
} from '@chakra-ui/react'

function App() {
  const [url, setUrl] = useState('')
  const [images, setImages] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  const toast = useToast()

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setImages(files)

    // Create preview URLs
    const newPreviews = files.map(file => URL.createObjectURL(file))
    setPreviews(prev => {
      // Clean up old preview URLs
      prev.forEach(url => URL.revokeObjectURL(url))
      return newPreviews
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    const formData = new FormData()
    formData.append('url', url)
    images.forEach((image, index) => {
      formData.append(`image_${index}`, image)
    })

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        toast({
          title: 'Success',
          description: 'Files uploaded successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      } else {
        throw new Error('Upload failed')
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to upload files',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  return (
    <ChakraProvider>
      <Container maxW="container.md" py={10}>
        <VStack spacing={6} as="form" onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>URL</FormLabel>
            <Input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter URL"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Images</FormLabel>
            <Input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              sx={{
                '::file-selector-button': {
                  height: 10,
                  padding: '0 20px',
                  background: 'gray.100',
                  border: 'none',
                  borderRadius: 'md',
                  mr: 2,
                },
              }}
            />
          </FormControl>

          {previews.length > 0 && (
            <Box w="full">
              <Text mb={2}>Selected Images:</Text>
              <VStack spacing={4}>
                {previews.map((preview, index) => (
                  <Image
                    key={index}
                    src={preview}
                    alt={`Preview ${index + 1}`}
                    maxH="200px"
                    objectFit="contain"
                  />
                ))}
              </VStack>
            </Box>
          )}

          <Button
            type="submit"
            colorScheme="blue"
            size="lg"
            width="full"
            isDisabled={!url || images.length === 0}
          >
            Submit
          </Button>
        </VStack>
      </Container>
    </ChakraProvider>
  )
}

export default App
