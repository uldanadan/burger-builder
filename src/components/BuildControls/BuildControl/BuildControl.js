import React from 'react';
import './BuildControl.css';

const BuildControl = props => {
  return (
    <div className='BuildControl'>
      <div className='Label'>{props.type}</div>
      <button disabled={props.disabledInfo} className='Less' onClick={props.removed}>Less</button>
      <button className='More' onClick={props.added}>More</button>
    </div>
  )
}

export default BuildControl
