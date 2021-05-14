import React from 'react';
import './style.scss';

const Image = (props) => {
  const { imagePath } = props;
  return (
    <section>
      <img src={imagePath} alt="Headphone"/>
    </section>
  );
}

export default Image;