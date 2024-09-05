import axios from "axios";
import storage from "./Storage";
import {jwtDecode} from 'jwt-decode';

const axiosClient = axios.create({
    baseURL:    `http://localhost:8080/api/v1`,
    timeout : 5000,
    responseType: 'json'
})

// const isTokenExpired = (token) => {
//     if (!token) {
//       return true;
//     }
  
//     try {
//       const decodedToken = jwtDecode(token);
//       const currentTime = Date.now() / 1000;
  
//       return decodedToken.exp < currentTime;
//     } catch (error) {
//       console.error('Error decoding token:', error);
//       return true;
//     }
//   };


axiosClient.interceptors.request.use(async (config)=>{
    const token = storage.getToken();
    // if(isTokenExpired(token)){
    //     console.log('Token is expired');
    //   // Handle token expiration: refresh token, redirect to login, etc.
    //   // Example: Redirect to login page
    //   // window.location.href = '/login';
    //   return Promise.reject('Token is expired');
    // }
    if(token !== null && token !== undefined){
        config.headers.Authorization = token;
    }
    return config;
})

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        // only get data
        return response.data;
    }

    return response;
}, (error) => {
    if(error.response){
        throw error.response;
    }
    else if(error.request){
        throw error.request;
    }
    else
    {
        throw error;
    }
});

export default axiosClient;