import Api from '../../API'

const url = 'user'

const getUserByName = (username)=>{
    return Api.get(`${url}/username/${username}`);
}

const UserApi = {getUserByName}
export default UserApi;