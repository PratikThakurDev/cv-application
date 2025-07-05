import { StrictMode,useState } from 'react';
import { createRoot } from 'react-dom/client';
import PersonalDetails from './components/personalDetails';
import Education from './components/education';
import WorkExperience from './components/workExperience';
import './styles/index.css';

function App() {
  const [activeSection, setActiveSection] = useState("personal");
  return(
  <StrictMode>
    
    <div className='gradient-wrapper'>
            
            <main className="form-content">
                <nav>
                    <div className={`nav-item ${activeSection === 'personal' ? 'active' : ''}`}
                        onClick={() => setActiveSection('personal')}>Personal Details </div>
                    <div className='dash'>——</div>
                    <div className={`nav-item ${activeSection === 'education' ? 'active' : ''}`}
                        onClick={() => setActiveSection('education')}>Education</div>
                    <div className='dash'>——</div>
                    <div className={`nav-item ${activeSection === 'work' ? 'active' : ''}`}
                        onClick={() => setActiveSection('work')}>Work Experience</div>
                </nav>
                <form action="">
                    {activeSection === "personal" && <PersonalDetails />}
                    {activeSection === "education" && <Education />}
                    {activeSection === "work" && <WorkExperience/>}
                  
                  <div className="buttons">
                    <button type='submit' className='submit'>Submit</button>
                    <button className="cancel" type='button'>Cancel</button>
                  </div>
                    
                </form>
            </main>
    </div>
  </StrictMode>);

}

createRoot(document.getElementById('root')).render(<App />);