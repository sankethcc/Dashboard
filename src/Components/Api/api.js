import axios from "axios";

export const BASE_URL = "http://localhost:5000/"


export const getIntensity= async ()=>{
    return await axios.get(`${BASE_URL}/get_intensity`)
    .then((response)=>{
        return response.data; //return the response
    })
    .catch((error)=>{
        console.log(error) // handle errors
    })
}
export const getRelevanceLikelihood= async ()=>{
    return await axios.get(`${BASE_URL}/get_relevance_likelihood`)
    .then((response)=>{
        return response.data; //return the response
    })
    .catch((error)=>{
        console.log(error) // handle errors
    })
}
export const getPestleData= async ()=>{
    return await axios.get(`${BASE_URL}/pestle_chart`)
    .then((response)=>{
        return response.data; //return the response
    })
    .catch((error)=>{
        console.log(error) // handle errors
    })
}
export const getRegionData= async ()=>{
    return await axios.get(`${BASE_URL}/region_chart`)
    .then((response)=>{
        return response.data; //return the response
    })
    .catch((error)=>{
        console.log(error) // handle errors
    })
}
