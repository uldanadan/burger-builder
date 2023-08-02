import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'
import { useSelector } from 'react-redux';

const BuildControls = props => {
  const ingredients = useSelector(state => state.ingredients.basket)
  return (
    <div className='BuildControls'>
      <p>Current Price: <strong>{props.price} KZT</strong></p>
      {Object.keys(ingredients).map(ingType => {
        return <BuildControl 
          key={ingType} 
          type={ingType} 
          added={() => props.ingredientAdded(ingType)}
          removed={() => props.ingredientRemoved(ingType)}
          disabledInfo={props.disabledInfo[ingType]}
        />
      })}
      <button 
          onClick={props.ordered}
          className='OrderButton'
          disabled={!props.purchasable}
      >ORDER NOW
      </button>
    </div>
  )
}

export default BuildControls;
