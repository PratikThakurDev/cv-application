import { useState } from 'react';
import '../styles/personalDetails.css';

function PersonalDetails() {


    return (
        
        <div className='gradient-wrapper'>
            
            <main className="form-content">
                <nav>
                    <div className="personalDetails">Personal Details ——</div>
                    <div className="educationSection">Education ——</div>
                    <div className="workExperience">Work Experience</div>
                </nav>
                <form action="">
                    <div className="firstname">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className ="firstName" required/>
                    </div>    
                    <div className="lastname">
                         <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="lastName" required/>
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

                    <div className="buttons">
                        <button type='submit' className='submit'>Submit</button>
                        <button className="cancel" type='button'>Cancel</button>
                    </div>
                    
                </form>
            </main>
        </div>
    )
}

export default PersonalDetails;