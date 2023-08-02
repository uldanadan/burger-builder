import React, { useEffect, useRef, useState } from "react";
import Modal from '../components/UI/Modal/Modal'
const WithErrorHandler = (WrappedComponent, axiosHandler) => {
    
    return function WithErrorHandler(props) {
        const [error, setError] = useState('')
        const ic = useRef(null)
        
        if (!ic.current) {
            ic.current = axiosHandler.interceptors.response.use(res => {
                return res
            }, err => {
                setError(err.message)
                throw err
            })
        }

        useEffect(() => {
            return () => axiosHandler.interceptors.response.eject(ic.current)
        }, [])
       

        const errorDismissed = () => {
            setError('')
        }

        return (
        <>
            <Modal 
                show={!!error} 
                closed={errorDismissed}
            >
                {error}
            </Modal>
            <WrappedComponent {...props}/>
        </>
        )
    }
}


export default WithErrorHandler