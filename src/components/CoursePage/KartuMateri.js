import React from 'react';

function KartuMateri({ tittle }) {
  return (
    <div className="kartu">
      <div style={{ backgroundColor: 'white' }}></div>
      <h4>{tittle}</h4>
    </div>
  );
}

export default KartuMateri;
