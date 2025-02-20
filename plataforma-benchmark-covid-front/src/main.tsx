import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { configRouter } from './rotas/Router'
import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './api/apiConfig'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
    <QueryClientProvider client={queryClient}>  
    <RouterProvider router={configRouter} />
    </QueryClientProvider> 
    </ChakraProvider>
  </StrictMode>
)
