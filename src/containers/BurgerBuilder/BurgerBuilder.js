import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BuildControls from '../../components/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import { addIngredient, removeIngredient } from '../../store/ingredients.slice';

const BurgerBuilder = () => {
  const dispatch = useDispatch()


  const navigate = useNavigate()
  const ingredients = useSelector(state => state.ingredients.basket)
  const totalPrice = useSelector(state => state.ingredients.totalPrice)

  const [purchasable, setPurchasable] = useState(false)
  const [purchasing, setPurchasing] = useState(false)

 

  const addIngredientHandler = (type) => {
    dispatch(addIngredient(type))
  }

  const removeIngredientHandler = (type) => {
    dispatch(removeIngredient(type))
  }

  const disabledInfo = {...ingredients}

  for (const key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0
  }

  const updatePurchaseState = () => {
    const sum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((sum, el) => sum + el, 0)

      setPurchasable(sum > 0)
  }

  useEffect(() => {
    updatePurchaseState()
  }, [ingredients])

  const purchaseHandler = () => {
    setPurchasing(true)
  }
  const purchaseCancelHandler = () => {
    setPurchasing(false)
  }

  const purchaseContinueHandler = () => {
    navigate({pathname: '/checkout'})
  }

  return (
    <>
      <Modal
        show={purchasing}
        closed={purchaseCancelHandler}
      >
        <OrderSummary 
            price={totalPrice} 
            purchaseCancelled={purchaseCancelHandler}
            purchaseContinued={purchaseContinueHandler}
        />
      </Modal>
      <Burger />
      <BuildControls 
        price={totalPrice}
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        disabledInfo={disabledInfo}
        purchasable={purchasable}
        ordered={purchaseHandler}
      />
    </>
  )
}

export default BurgerBuilder;
