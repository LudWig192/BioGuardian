import React from 'react';
import '../Style/TabelaCliente.css';

const InsuranceComponent = () => {
  return (
    <div className="tabelacliente">
      <div className="insurance-form-tabelacliente"> 
        <div className="title-tabelacliente">Home Insurance</div> 
        <div className="description-tabelacliente">Protect your home and save on comprehensive insurance</div> 
        <form className="form-tabelacliente">
          <input type="text" placeholder="Your Name" className="input-tabelacliente" />
          <input type="email" placeholder="Email" className="input-tabelacliente" />
          <select className="select-tabelacliente">
            <option className="option-tabelacliente">Choose a Plan</option>
            <option className="option-tabelacliente">Plan A</option>
            <option className="option-tabelacliente">Plan B</option>
            <option className="option-tabelacliente">Plan C</option>
          </select>
          <button type="submit" className="button-tabelacliente">Start Saving Today</button>
        </form>
        <div className="review-tabelacliente"> 
          <span className="stars-tabelacliente">⭐⭐⭐⭐⭐</span>
          <div className="reviews-tabelacliente">945 Reviews</div>
        </div>
      </div>
      <div className="testimonial-tabelacliente"> 
        <img src="path/to/user-image.jpg" alt="User" className="user-image-tabelacliente" />
        <div className="name-tabelacliente">Maria Hamlin</div>
        <div className="role-tabelacliente">General Insurance Advisor, CNA Canada</div>
        <div className="review-stars-tabelacliente">⭐⭐⭐⭐⭐</div> {/* Estrelas acima do comentário */} 
        <blockquote className="comment-tabelacliente">
          Very helpful fully explaining the different plans. Cash value is accessed via policy loans, which accrue interest and reduce cash value on our valuable items.
        </blockquote>
        <div className="navigation-tabelacliente"> 
          <span className="active-tabelacliente"></span> 
          <span className="dot-tabelacliente"></span>
        </div>
      </div>
    </div>
  );
};

export default InsuranceComponent;
