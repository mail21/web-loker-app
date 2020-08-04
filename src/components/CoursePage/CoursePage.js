import React from 'react';
import html from './../../img/html.png';
import './CoursePage.css';
import KartuMateri from './KartuMateri';
import CourseSearchBox from './CourseSearchBar';

function CoursePage() {
  React.useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <main className="main--courses">
      <section>
        <div className="sidebar">
          <h2>Categories</h2>
          <div className="item">
            <img src={html} alt="asd" width="60" />
            <h5>HTML</h5>
          </div>
          <div className="item">
            <img src={html} alt="asd" width="60" />
            <h5>HTML</h5>
          </div>
          <div className="item">
            <img src={html} alt="asd" width="60" />
            <h5>HTML</h5>
          </div>
          <div className="item">
            <img src={html} alt="asd" width="60" />
            <h5>HTML</h5>
          </div>
        </div>
        <article>
          <CourseSearchBox />
          <div className="course-materi">
            <KartuMateri tittle="Basic" />
            <KartuMateri tittle="Intermediete" />
            <KartuMateri tittle="Advance" />
            <KartuMateri tittle="Advance 2" />
            <KartuMateri tittle="Advance 3" />
          </div>
        </article>
      </section>
    </main>
  );
}

export default CoursePage;
