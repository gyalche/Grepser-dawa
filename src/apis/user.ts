import { API } from "../axios"

export const getUsers=async()=>{
    try {
        let res=await API.get('/users');
        return res.data;
    } catch (error:any) {
        console.log(error.message)
    }
}