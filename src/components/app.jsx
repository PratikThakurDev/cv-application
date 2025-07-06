import { useState } from 'react';
import PersonalDetails from './personalDetails';
import Education from './education';
import WorkExperience from './workExperience';
import Resume from './resume';
import '../styles/index.css';

function App() {
  const [activeSection, setActiveSection] = useState("personal");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    about: '',
    education: [
      {
        college: '',
        degree: '',
        startYear: '',
        endYear: '',
        gpa: '',
        courseWork: '',
      }
    ],
    workExperience: [
      {
        company: '',
        role: '',
        description: '',
        startYear: '',
        endYear: ''
      }
    ]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true); // show resume
  };

  return (
    <div className="gradient-wrapper">
      {formSubmitted ? (
        <Resume formData={formData} onEdit={() => setFormSubmitted(false)} />
      ) : (
        <main className="form-content">
          <nav>
            <div className={`nav-item ${activeSection === 'personal' ? 'active' : ''}`}
              onClick={() => setActiveSection('personal')}>Personal Details</div>
            <div className='dash'>——</div>
            <div className={`nav-item ${activeSection === 'education' ? 'active' : ''}`}
              onClick={() => setActiveSection('education')}>Education</div>
            <div className='dash'>——</div>
            <div className={`nav-item ${activeSection === 'work' ? 'active' : ''}`}
              onClick={() => setActiveSection('work')}>Work Experience</div>
          </nav>

          <form onSubmit={handleSubmit}>
            {activeSection === "personal" && <PersonalDetails formData={formData} setFormData={setFormData} />}
            {activeSection === "education" && <Education formData={formData} setFormData={setFormData} />}
            {activeSection === "work" && <WorkExperience formData={formData} setFormData={setFormData} />}

            <div className="buttons">
              <button type="submit" className="submit">Submit</button>
              <button type="button" className="cancel" onClick={() => setFormData({})}>Cancel</button>
            </div>
          </form>
        </main>
      )}
    </div>
  );
}

export default App;
