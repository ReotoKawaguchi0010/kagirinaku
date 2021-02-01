

import {sendApi} from "../utils/utils";
import JSZip from "jszip";


export const contentAction = async (action, dispatch) => {
    try{
        const zip = new JSZip()
        console.log(zip)
        let sendData = Boolean(action.sendData) ? action.sendData : {}
        console.log(sendData)
        sendData.type = action.type
        let method = action.method
        const res = await sendApi(`/app`, sendData, method)
        action.data = res.data
        dispatch(action)
    }catch (e) {
        console.log(e)
    }
}