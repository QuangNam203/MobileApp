import Api from '../../API'

const login = (username,password) =>{
    const parameters = {
        username : username,
        password : password
    }

    return Api.get('/login',{params: parameters})
}



const loginAPI = { login}
export default loginAPI;
