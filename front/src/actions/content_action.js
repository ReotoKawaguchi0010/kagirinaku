import {sendApi} from "../utils/utils";


export const contentAction = async (action, dispatch) => {
    try{
        let sendData = {}
        if(Boolean(action.sendData)) sendData = action.sendData
        sendData.type = action.type
        let method = action.method
        const res = await sendApi(`/app`, sendData, method)
        action.data = res.data
        dispatch(action)
    }catch (e) {
        console.log(e)
    }
}