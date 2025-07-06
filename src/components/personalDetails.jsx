import '../styles/personalDetails.css';

function PersonalDetails({ formData, setFormData }) {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="fullname">
        <div className="firstname">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            className="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="lastname">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="email">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="emailInput"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="phone">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          name="phone"
          className="phoneInput"
          pattern="[0-9]{10}"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="address">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          className="addressInput"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>

      <div className="about">
        <label htmlFor="about">Describe yourself</label>
        <textarea
          rows="5"
          name="about"
          value={formData.about}
          onChange={handleChange}
          required
        />
      </div>
    </>
  );
}

export default PersonalDetails;
