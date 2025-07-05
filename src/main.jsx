import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PersonalDetails from './components/personalDetails'
import Education from './components/education'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='gradient-wrapper'>
            
            <main className="form-content">
                <nav>
                    <div className="personalDetails">Personal Details </div>
                    <div>——</div>
                    <div className="educationSection">Education </div>
                    <div>——</div>
                    <div className="workExperience">Work Experience</div>
                </nav>
                <form action="">
                    
                  <Education/>
                  <div className="buttons">
                    <button type='submit' className='submit'>Submit</button>
                    <button className="cancel" type='button'>Cancel</button>
                  </div>
                    
                </form>
            </main>
    </div>
  </StrictMode>,
)
