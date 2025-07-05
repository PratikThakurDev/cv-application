import '../styles/education.css';

function Education() {
    

    return(
        <>
           <div className="collegeName">
            <label htmlFor="college">College Name</label>
            <input type="text" className='collegeInput' required/>
           </div>
           <div className="degreeName">
            <label htmlFor="degree">Degree</label>
            <input type="text" className="degreeInput" required/>
           </div>
           <div className="yearsAndGpa">
            <div className="startYear">
                <label htmlFor="startYear">Starting Year</label>
                <input type="number" className="startYearInput" min='1900' max='2100' required/>
            </div>
            <div className="endYear">
                <label htmlFor="emdYear">End Year</label>
                <input type="number" className="endYearInput" min='1900' max='2100' required/>
            </div>
            <div className="gpa">
                <label htmlFor="gpa">GPA</label>
                <input type="number" className="gpaInput" min = '1' max  = '10'required />
            </div>
            </div>
        </>
    )
}

export default Education;