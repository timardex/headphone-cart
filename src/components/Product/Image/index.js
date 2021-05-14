import React from 'react';
import './style.scss';

const Image = (props) => {
  const { color } = props;
  return (
    <section>
      <img src={require(`../../../assets/images/ath-msr7-${color}.jpg`).default} alt={`Headphone ${color}`}/>
    </section>
  );
}

export default Image;