import React from 'react';
import ProfilePic from './../../img/ProfilePic.png';
import Rating from '@material-ui/lab/Rating';

function CardReview({ nama, rating }) {
  return (
    <div className="card-review">
      <p>Pembelajarannya terstruktur dan mudah dipaham dan sangat mengasyikkan</p>
      <hr />
      <div>
        <img src={ProfilePic} alt="profile pic" width="30" />

        <div>
          <span className="card-review--nama">{nama}</span>
          <Rating name="read-only" value={rating} readOnly />
        </div>
      </div>
    </div>
  );
}

export default CardReview;
