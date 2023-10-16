import '../../styles/OrderForm.css'

import { useState } from 'react'

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    deliveryAddress: '',
    specialInstructions: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here
    const errors = validateFormData(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Data is valid, you can proceed to store or use it
      // For example, you can make an API request to submit the data
      console.log('Form data:', formData);
    }
  };

  const validateFormData = (data) => {
    const errors = {};

    if (!data.name) {
      errors.name = 'Name is required';
    }

    if (!data.phoneNumber) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(data.phoneNumber)) {
      errors.phoneNumber = 'Phone number must be 10 digits';
    }

    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Invalid email format';
    }

    return errors;
  };

  return (
    <div className='order-form-container'>
      <h2>Order Form</h2>
      <form onSubmit={handleSubmit} className='order-form-form'>
        <label>Contact Information</label>
        <div className='contact-info'>
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Name'
          />
          {formErrors.name && <p className="error">{formErrors.name}</p>}
        </div>

        <div>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder='Phone Number'
          />
          {formErrors.phoneNumber && (
            <p className="error">{formErrors.phoneNumber}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
          />
          {formErrors.email && <p className="error">{formErrors.email}</p>}
        </div>
        </div>

        <div>
          <label>Delivery Address:</label>
          <input
            type="text"
            name="deliveryAddress"
            value={formData.deliveryAddress}
            onChange={handleChange}
            placeholder='Delivery Address'
          />
        </div>

        <div>
          <label>Special Instructions:</label>
          <textarea
            name="specialInstructions"
            value={formData.specialInstructions}
            onChange={handleChange}
            placeholder='Special Instructions'
          />
        </div>

        <button type="submit" className='order-submit'>Submit</button>
      </form>
    </div>
  );
}

export default OrderForm
