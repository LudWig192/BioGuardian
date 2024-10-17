import React from 'react';
import '../Style/IconsCliente.css';
import { FaLaptopCode, FaBriefcase, FaPalette, FaHeartbeat, FaMusic, FaGraduationCap, FaChartLine, FaDollarSign } from 'react-icons/fa';

const courses = [
  { title: 'Data Science', subtitle: 'Data is Everything', icon: <FaLaptopCode />, highlighted: true },
  { title: 'Business', subtitle: 'Improve your business', icon: <FaBriefcase />, highlighted: false },
  { title: 'Art & Design', subtitle: 'Fun & Challenging', icon: <FaPalette />, highlighted: false },
  { title: 'Lifestyle', subtitle: 'New Skills, New You', icon: <FaHeartbeat />, highlighted: false },
  { title: 'Marketing', subtitle: 'Improve your business', icon: <FaChartLine />, highlighted: false },
  { title: 'Finance', subtitle: 'Fun & Challenging', icon: <FaDollarSign />, highlighted: false },
  { title: 'Health & Fitness', subtitle: 'Invest to Your Body', icon: <FaHeartbeat />, highlighted: false },
  { title: 'Music', subtitle: 'Major or Minor', icon: <FaMusic />, highlighted: false },
  { title: 'Academics', subtitle: 'High Education Level', icon: <FaGraduationCap />, highlighted: false },
];

const PopularCourses = () => {
  return (
    <div className="popular-courses iconcliente">
      <div className="iconcliente">Our Popular Courses</div> {/* Substituído h2 por uma div com className específica */}
      <div className="courses-grid iconcliente">
        {courses.map((course, index) => (
          <div key={index} className={`course-card iconcliente ${course.highlighted ? 'highlighted' : ''}`}>
            <div className="course-icon iconcliente">{course.icon}</div>
            <div className="course-info iconcliente">
              <div className="course-title iconcliente">{course.title}</div> {/* Título com className específica */}
              <div className="course-subtitle iconcliente">{course.subtitle}</div> {/* Substituído p por uma div com className */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
