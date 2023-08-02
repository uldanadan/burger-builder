import React from 'react';
import './Ingredient.css';

const Ingredient = ({type, style}) => {
  switch (type) {
    case 'bread-bottom':
      return <div className='BreadBottom' />
    case 'bread-top':
      return (
        <div className='BreadTop'>
          <div className='Seeds1' />
          <div className='Seeds2' />
        </div>
      )
    default:
      return <div className={type} style={style} />
  }
}

export default Ingredient;
