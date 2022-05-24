import React from 'react';
import { useParams } from 'react-router-dom';

const GuestPageEdit = () => {
    const pageName = useParams().pageName;
    const title = pageName;

    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
}

export default GuestPageEdit