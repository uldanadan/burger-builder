import React, {useEffect, useState} from 'react'
import {apiBurger} from "../../api/apiBurger";
import Spinner from "../../components/UI/Spinner/Spinner";
import OrderItem from "../../components/Order/OrderItem/OrderItem";
import WithErrorHandler from '../../hoc/WithErrorHandler';
import { burgerInstance } from '../../api/instances';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../store/orders.slice';


const Orders = () => {
    const dispatch = useDispatch()
    const {orders, loading} = useSelector(state => state.orders, shallowEqual)
    
    useEffect(() => {
        dispatch(getOrders())
    }, [])
    return (
        <>
            {loading 
                ? <Spinner /> 
                : 
                <div>
                    {/* {Object.keys(orders)?.map((key, i) => {
                        return <OrderItem 
                                    key={key}
                                    ingredients={orders[key].ingredients}
                                    price={orders[key].price}
                                />
                    })} */}

                    {Object.keys(orders)?.map((key, i) => {
                        return  <ErrorBoundary 
                                    key={key}
                                    errorComp={<></>}
                                >
                                    <OrderItem 
                                        ingredients={orders[key].ingredients}
                                        price={orders[key].price}
                                    />
                                </ErrorBoundary>
                    })}
                </div>
            }
        </>
    )
}

export default WithErrorHandler(Orders, burgerInstance)