import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewIngredient } from "../../store/ingredients.slice";


const AddIngredient = () => {
    const [inputValues, setInputValues] = useState({
        name: '',
        price: ''
    })
    const [style, setStyle] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const inputHandler = (e) => {
        setInputValues(prevState => {
            return {...prevState, [e.target.name]: e.target.value}
        })
    }
    const inputStyleHandler = (e) => {
        setStyle(prevState => {
            return {...prevState, [e.target.name]: e.target.value}
        })
    }
    const submit = (e) => {
        e.preventDefault()
        const styleObj = {}
        Object.keys(style).forEach((key) => {
            if (style[key].trim() !== '') {
                styleObj[key] = style[key]
            }
        })
        dispatch(addNewIngredient({
            name: inputValues.name,
            price: inputValues.price,
            style: styleObj
        }))
        navigate('/')
    }
    return (
        <div>
            <form onSubmit={submit}>
                <input type={'text'} onChange={inputHandler} name={'name'} placeholder={'Name'} required/>
                <input type={'number'} onChange={inputHandler} name={'price'} placeholder={'Price'} required/>
                <div>
                    <input type={'text'} onChange={inputStyleHandler} name={'width'} placeholder={'Width'}/>
                    <input type={'text'} onChange={inputStyleHandler} name={'height'} placeholder={'Height'}/>
                    <input type={'text'} onChange={inputStyleHandler} name={'background'} placeholder={'Background'}/>
                    <input type={'text'} onChange={inputStyleHandler} name={'margin'} placeholder={'Margin'}/>
                    <input type={'text'} onChange={inputStyleHandler} name={'borderRadius'} placeholder={'Border-radius'}/>
                </div>
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddIngredient