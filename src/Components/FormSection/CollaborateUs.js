import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaLinkedin, FaInstagram, FaTwitter, FaUser, FaEnvelope, FaPhone, FaBuilding, FaPager, FaPaperPlane, FaNewspaper } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../../images/CollabImg.jpg';
import Loader from '../Loader/loader.js';
import './form.css';

const CollaborateUsForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    organization: '',
    message: '',
    twitter: '',
    linkedin: '',
    instagram: '',
  });



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://am-website-w70g.onrender.com/api/collaborate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success('Collaboration request sent successfully', {
          position: "bottom-center",
          style: {
            width: "400px",
            background: "black",
            color: "white",
          },
        });

        setFormData({
          name: '',
          email: '',
          contactNumber: '',
          organization: '',
          message: '',
          twitter: '',
          linkedin: '',
          instagram: '',
        });

        setTimeout(() => {
          window.location.href = '/';
        }, 3000);

      } else {
        console.error('Collaboration request failed');
        toast.error('Request failed, Retry!', {
          position: "bottom-center",
          style: {
            width: "400px",
            background: "black",
            color: "white",
          },
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Request failed, Retry!', {
        position: "bottom-center",
        style: {
          width: "400px",
          background: "black",
          color: "white",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className='heading'>Collaborate Us</h1>
      <div className="form-div">
        <div className="form-container">

          <form onSubmit={handleSubmit}>

            <div className="form-element">
              <FaUser className='FormIcons' />
              <label htmlFor="name"><i className="fa-solid fa-user"></i></label>
              <input type="text" placeholder="Name" id="name" name="name" value={formData.name} onChange={handleInputChange} required /><br />
            </div>

            <div className="form-element">
              <FaEnvelope className='FormIcons' />
              <label htmlFor="email"><i className="fa-solid fa-envelope"></i></label>
              <input type="email" placeholder="Email" id="email" name="email" value={formData.email} onChange={handleInputChange} required /><br />
            </div>

            {/* <div className="form-element">
              <FaEnvelope className='FormIcons' />
              <label htmlFor="email"><i className="fa-solid fa-envelope"></i></label>
              <input type="email" placeholder="Alternate Email" id="altEmail" name="altEmail" value={formData.altEmail} onChange={handleInputChange} /><br /> */}
            {/* </div> */}

            <div className="form-element">
              <FaPhone className='FormIcons' />
              <label htmlFor="phone_no"><i className="fa-solid fa-phone"></i></label>
              <input type="number" placeholder="Phone No." id="phone_no" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} min="1"
                max="9999999999" required /><br />
            </div>

            <div className="form-element">
              <FaBuilding className='FormIcons' />
              <label htmlFor="Company/Organisation"><i className="fa-solid fa-building"></i></label>
              <input type="text" placeholder="Company/Organisation" id="Company/Organisation" name="company" value={formData.company} onChange={handleInputChange} required /><br />
            </div>

            <div className="form-element">
              <FaNewspaper className='FormIcons' />
              <label htmlFor="textarea"><i className="fa-solid fa-memo"></i></label>
              <textarea placeholder="Collaboration related query" id="textarea" name="message" rows="4" cols="50" value={formData.message} onChange={handleInputChange}></textarea><br />
            </div>

            <div className="form-element">
              <FontAwesomeIcon icon="fa-brands fa-x-twitter " className='FormIcons' />
              <label htmlFor="twitter_id"><i className="fa-brands fa-x-twitter"></i></label>
              <input type="text" placeholder="Twitter" id="twitter_id" name="twitter" value={formData.twitter} onChange={handleInputChange} /><br />
            </div>

            <div className="form-element">
              <FaInstagram className='FormIcons' />
              <label htmlFor="instagram_id"><i className="fa-brands fa-instagram"></i></label>
              <input type="text" placeholder="Instagram" id="instagram_id" name="instagram" value={formData.instagram} onChange={handleInputChange} /><br />
            </div>

            <div className="form-element">
              <FaLinkedin className='FormIcons' />
              <label htmlFor="linkedin_id"><i className="fa-brands fa-linkedin"></i></label>
              <input type="text" placeholder="LinkedIn" id="linkedin_id" name="linkedin" value={formData.linkedin} onChange={handleInputChange} /><br />
            </div>

            <div className="loading-overlay" style={{ display: loading ? 'flex' : 'none' }}>
              <Loader />
              <p>Loading...</p>
            </div>

            <input type="submit" value={loading ? 'Submitting...' : 'Submit'} disabled={loading} />


          </form>


        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default CollaborateUsForm;
