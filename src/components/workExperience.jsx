import '../styles/workExperience.css';

function WorkExperience () {


    return (
        <>
            <div className="companyName">
                <label htmlFor="companyName">Company Name</label>
                <input type="text" className="companyNameInput" required/>
            </div>
            <div className="role">
                <label htmlFor="role">Role</label>
                <input type="text" className="roleInput" required/>
            </div>
            <div className="describe">
                <label htmlFor="describe">Describe your work </label>
                <textarea rows="5" required ></textarea>
            </div>
            <div className="years">
                <div className="startYear">
                <label htmlFor="startYear">Starting Year</label>
                <input type="number" className="startYearInput" min='1900' max='2100' required/>
            </div>
            <div className="endYear">
                <label htmlFor="emdYear">End Year</label>
                <input type="number" className="endYearInput" min='1900' max='2100' required/>
            </div>
            </div>
        </>
    )
}

export default WorkExperience;