import React from 'react';
import '../Style/CardBeneficio.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="section">
        <h2>ABOUT US</h2>
        <p>MedClinic centers on diagnosing and treating patients of all ages, while emphasizing preventative medicine and the overall health and wellness of its patients. The clinic features state-of-the-art equipment and trained staff that will optimize the care of each patient. We understand that there are many factors that can affect health, including exercise, diet, and heredity.</p>
        <p>We are committed to providing the highest quality patient care. Our dedication to excellence, compassion, and innovation is rooted in our devotion to the art and science of healing, which supports every aspect of our mission.</p>
        <button>READ MORE</button>
      </div>
      <div className="section">
        <img src="mission-image.jpg" alt="Our Mission" />
        <h3>OUR MISSION</h3>
        <p>We aim to provide compassionate, comprehensive, community health care that exceeds our customer's expectations and needs.</p>
        <button>READ MORE</button>
      </div>
      <div className="section">
        <img src="vision-image.jpg" alt="Our Vision" />
        <h3>OUR VISION</h3>
        <p>The vision of MedClinic is to be the medical services provider that people can trust and rely on regardless of their budget.</p>
        <button>READ MORE</button>
      </div>
    </div>
  );
};

export default AboutUs;
