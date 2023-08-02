import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from '../../components/UI/Button/Button'
import Modal from "../../components/UI/Modal/Modal";
import {updateIngredient} from '../../store/ingredients.slice'

const Ingredients = () => {
    const ingredients = useSelector(state => state.ingredients.ingredients)
    const [showUpdateModal, setShowUpdateModal] = useState(false)
    const [currentIngredient, setCurrentIngredient] = useState({})

    const [currentKey, setCurrentKey] = useState('')
    const dispatch = useDispatch()

    const closeModal = () => {
        setShowUpdateModal(false)
        console.log(currentIngredient)
    }
    const openModal = (ingredient, key) => {
        setCurrentIngredient(ingredient)
        setCurrentKey(key)
        setShowUpdateModal(true)
    }
    const inputHandler = (e) => {
        setCurrentIngredient(prevState => {
            if (e.target.name in prevState) {
                return {...prevState, [e.target.name]: e.target.value}
            } 
            return {...prevState, style: {...prevState.style, [e.target.name]: e.target.value}}
        })
    }

    const createForm = (obj, arr = []) => {
        Object.keys(obj).forEach((key) => {
            if (typeof obj[key] === 'object') {
                createForm(obj[key], arr)
            } else {
                arr.push(<div key={key}><input name={key} value={obj[key]} onChange={inputHandler} /></div>)
            }
        })
        return arr
    }

    const submitUpdate = (e) => {
        e.preventDefault()
        dispatch(updateIngredient({id: currentKey, ingredient: currentIngredient}))
        setShowUpdateModal(false)
    }

    return (
        <div>
            <Modal
                show={showUpdateModal}
                closed={closeModal}
            >
                <form onSubmit={submitUpdate}>
                    {createForm(currentIngredient)}
                    <Button
                        btnType={'Success'}
                    >Accept</Button>
                </form>
            </Modal>
            {Object.keys(ingredients).map((key) => {
                return <div key={key}
                    style={{border: '1px solid black', margin: '20px', padding: '20px'}}
                >
                        <p>Name: {ingredients[key].name}</p>
                        <p>Price {ingredients[key].price}</p>
                        
                        <br/>
                        <Button
                            clicked={() => openModal(ingredients[key], key)}
                            btnType={'Success'}
                        >
                            Update
                        </Button>
                    </div>
            })}
        </div>
    )
}

export default Ingredients