import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './Context/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router.jsx'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <HelmetProvider>
                <AuthProvider>
                    <RouterProvider router={router}></RouterProvider>
                    <Toaster ></Toaster>
                </AuthProvider>
            </HelmetProvider>
        </QueryClientProvider>
    </StrictMode>,
)
