import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { configRouter } from './rotas/Router'
import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './api/apiConfig'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <QueryClientProvider client={queryClient}>  
    <RouterProvider router={configRouter} />
    </QueryClientProvider> 
  </StrictMode>
)
