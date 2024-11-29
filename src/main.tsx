import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from 'src/app/App'

import {NextUIProvider} from '@nextui-org/react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from 'src/features/auth'

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
     <StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NextUIProvider>
  </StrictMode>,
  </AuthProvider>
)
