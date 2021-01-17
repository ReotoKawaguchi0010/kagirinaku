import {create} from "../config/config";
import {useGet, usePost} from "../config/config";

export const getIsLogin = () => {

}

export const sendAction = (type, state, method, sendData={}) => {
    return {type: type, state: state, method: method, sendData: sendData}
}

export const sendApi = async (url, sendData, method) => {
    const jsonData = JSON.stringify(sendData)
    let res = {}
    switch (method) {
        case 'get':
            res = await useGet.get(`${url}/`, {
                params: sendData,
                withCredentials: true,
            })
            break
        case 'post':
            res = await usePost.post(`${url}/`, jsonData)
            break
        case 'put':
            res = await create.put(`${url}/`, jsonData)
            break
        case 'delete':
            res = await create.delete(`${url}/`, {
                params: jsonData
            })
            break
    }
    return res
}