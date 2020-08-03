import React from 'react';
import html from './../../img/html.png';

function CardCourse() {
  return (
    <div className="card-course ">
      <span className="vertical"></span>
      <img src={html} alt="html-logo" />
      <h5 className="course-name">HTML</h5>
    </div>
  );
}

export default CardCourse;
