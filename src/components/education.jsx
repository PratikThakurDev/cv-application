import "../styles/education.css";

function Education({ educationList, setFormData }) {
  const handleChange = (index, field, value) => {
    const updatedList = [...educationList];
    updatedList[index][field] = value;
    setFormData(prev => ({ ...prev, education: updatedList }));
  };

  const addEducation = () => {
    const newEducation = {
      college: "",
      degree: "",
      startYear: "",
      endYear: "",
      gpa: "",
      courseWork: ""
    };
    setFormData(prev => ({
      ...prev,
      education: [...educationList, newEducation]
    }));
  };

  const removeEducation = (index) => {
    const updatedList = educationList.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, education: updatedList }));
  };

  return (
    <div className="education-section">
      {educationList.map((edu, index) => (
        <div key={index} className="education-entry">
          <div className="collegeName">
            <label>College Name</label>
            <input
              type="text"
              value={edu.college}
              onChange={(e) => handleChange(index, "college", e.target.value)}
              required
            />
          </div>

          <div className="degreeName">
            <label>Degree</label>
            <input
              type="text"
              value={edu.degree}
              onChange={(e) => handleChange(index, "degree", e.target.value)}
              required
            />
          </div>

          <div className="yearsAndGpa">
            <div className="startYear">
              <label>Start Year</label>
              <input
                type="number"
                min="1900"
                max="2100"
                value={edu.startYear}
                onChange={(e) => handleChange(index, "startYear", e.target.value)}
                required
              />
            </div>
            <div className="endYear">
              <label>End Year</label>
              <input
                type="number"
                min="1900"
                max="2100"
                value={edu.endYear}
                onChange={(e) => handleChange(index, "endYear", e.target.value)}
                required
              />
            </div>
            <div className="gpa">
              <label>GPA</label>
              <input
                type="number"
                min="1"
                max="10"
                step="0.01"
                value={edu.gpa}
                onChange={(e) => handleChange(index, "gpa", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="courseWork">
            <label>Describe the Course</label>
            <textarea
              rows={5}
              value={edu.courseWork}
              onChange={(e) => handleChange(index, "courseWork", e.target.value)}
              required
            />
          </div>

          {educationList.length > 1 && (
            <button
              type="button"
              className="remove-btn"
              onClick={() => removeEducation(index)}
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <button type="button" className="add-btn" onClick={addEducation}>
        + Add Another Degree
      </button>
    </div>
  );
}

export default Education;
