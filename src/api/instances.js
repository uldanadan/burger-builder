import axios from "axios";
import {burgerApiUrl} from "./apiUrl";


export const burgerInstance = axios.create({
    baseURL: burgerApiUrl
})

// burgerInstance.interceptors.request.use(req => {
//     console.log('REQUEST: ', req)
//     return req
// })

// burgerInstance.interceptors.response.use(res => {
//     console.log('RESPONSE: ', res)
//     return res
// }, err => {
//     console.log('RESPONSE ERROR: ', err)
// })