import React from 'react';
import './CoursesComponent.css';
import CardCourse from './CardCourse';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';
import blueArrow from './../../img/blueArrow.png';

function CoursesComponent() {
  return (
    <section className="section--courses" style={{ marginTop: '60px', marginBottom: '50px' }}>
      <h1 className="section--Courses--h1">Our Courses</h1>
      <Flickity>
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
      </Flickity>
      <div className="button--courses">
        <button>MORE</button>
        <img src={blueArrow} alt="asd" width="30" />
      </div>
    </section>
  );
}

export default CoursesComponent;
