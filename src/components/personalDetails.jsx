
import '../styles/personalDetails.css';

function PersonalDetails() {


    return (
        
        <>
            <div className="fullname">
                <div className="firstname">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className ="firstName" required/>
                </div>    
                <div className="lastname">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="lastName" required/>
                </div>
            </div>
            
            <div className="email">
                <label htmlFor="email">Email</label>
                <input type="email" className="emailInput" required/>
            </div>
            <div className="phone">
                <label htmlFor="phone">Phone</label>
                <input type="tel" className="phoneInput" pattern = '[0-9]{10}'required/>
            </div>
            <div className="address">
                <label htmlFor="address">Address</label>
                <input type="text" className='addressInput' required/>
            </div>
            <div class="about">
                <label for="about">Describe yourself</label>
                <textarea rows="5" required ></textarea>
            </div>

        </>
    )
}

export default PersonalDetails;