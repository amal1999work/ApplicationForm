import React, { useState } from 'react'

function ApplicationForm() {

  const [formData, setFormData] = useState({
    FullName: '',
    email: '',
    phone:'',

    gender:'',
    dateOfbirth:'',
    
  });

  const handleChange = (event) => {}
  const handleSubmit = (event) => {}
  return (
    <>
    <div>ApplicationForm</div>


    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone">Username:</label>
        <input
          type="number"
          id="phone"
          name="phone"
          value={formData.phoney}
          onChange={handleChange}
        />
      </div>
     
      <button type="submit">Submit</button>
    </form>

</>

    
  )
}

export default ApplicationForm