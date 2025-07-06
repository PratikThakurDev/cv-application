import "../styles/workExperience.css";

function WorkExperience({ workList, setFormData }) {
  const handleChange = (index, field, value) => {
    const updatedList = [...workList];
    updatedList[index][field] = value;
    setFormData(prev => ({ ...prev, workExperience: updatedList }));
  };

  const addWork = () => {
    const newWork = {
      company: "",
      role: "",
      description: "",
      startYear: "",
      endYear: ""
    };
    setFormData(prev => ({
      ...prev,
      workExperience: [...workList, newWork]
    }));
  };

  const removeWork = (index) => {
    const updatedList = workList.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, workExperience: updatedList }));
  };

  return (
    <div className="work-section">
      {workList.map((work, index) => (
        <div key={index} className="work-entry">
          <div className="companyName">
            <label>Company Name</label>
            <input
              type="text"
              value={work.company}
              onChange={(e) => handleChange(index, "company", e.target.value)}
              required
            />
          </div>

          <div className="role">
            <label>Role</label>
            <input
              type="text"
              value={work.role}
              onChange={(e) => handleChange(index, "role", e.target.value)}
              required
            />
          </div>

          <div className="describe">
            <label>Describe your work</label>
            <textarea
              rows="5"
              value={work.description}
              onChange={(e) => handleChange(index, "description", e.target.value)}
              required
            />
          </div>

          <div className="years">
            <div className="startYear">
              <label>Start Year</label>
              <input
                type="number"
                min="1900"
                max="2100"
                value={work.startYear}
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
                value={work.endYear}
                onChange={(e) => handleChange(index, "endYear", e.target.value)}
                required
              />
            </div>
          </div>

          {workList.length > 1 && (
            <button
              type="button"
              className="remove-btn"
              onClick={() => removeWork(index)}
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <button type="button" className="add-btn" onClick={addWork}>
        + Add Another Role
      </button>
    </div>
  );
}

export default WorkExperience;
