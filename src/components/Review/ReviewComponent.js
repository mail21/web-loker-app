import React from 'react';
import './ReviewComponent.css';
import CardReview from './CardReview';

function ReviewComponent() {
  return (
    <section style={{ marginTop: '50px', marginBottom: '50px' }}>
      <h1 className="section-review-h1">Reviews</h1>
      <div className="section--card-list">
        <CardReview nama="Ismail" rating="5" />
        <CardReview nama="Reza" rating="4" />
        <CardReview nama="Ilham" rating="3" />
      </div>
    </section>
  );
}

export default ReviewComponent;
