import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PersonalDetails from './components/personalDetails'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersonalDetails />
  </StrictMode>,
)
