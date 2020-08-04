import React from 'react';
import search from './../../img/search.png';

function CourseSearchBar() {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Search " />
      <img src={search} alt="" width="40" />
    </div>
  );
}

export default CourseSearchBar;
