import "../styles/resume.css"


function Resume({ formData, onEdit }) {
  if (!formData) return <div>Error: Missing data</div>;

  return (
    <main className="resumeContainer">
      <div className="name">{formData.firstName} {formData.lastName}</div>
      <div className="contactSection">
        <div className="phone">📞{formData.phone}</div>
        <div className="address">🏠{formData.address}</div>
        <div className="mail">✉️{formData.email}</div>
      </div>
      <div className="about">About Me</div>
      <div className="aboutSection">{formData.about}</div>

      <div className="Education">Education</div>
      <div className="educationInfo">
        {formData.education?.map((edu, i) => (
          <div key={i}>
            <div className="firstLine">
              <div className="degreeAndCollege">{edu.degree} | {edu.college}</div>
              <div className="period">{edu.startYear} - {edu.endYear}</div>
            </div>
            <div className="courseWork">{edu.courseWork}</div>
          </div>
        ))}
      </div>

      <div className="work">Work Experience</div>
      <div className="workExperience">
        {formData.workExperience?.map((job, i) => (
          <div key={i}>
            <div className="firstLine">
              <div className="companyAndPost">{job.role} | {job.company}</div>
              <div className="period">{job.startYear} - {job.endYear}</div>
            </div>
            <div className="workDesc">{job.description}</div>
          </div>
        ))}
      </div>

      <div className="buttons">
        <button className="edit-btn" onClick={onEdit}>Edit</button>
      </div>
    </main>
  );
}

export default Resume;
