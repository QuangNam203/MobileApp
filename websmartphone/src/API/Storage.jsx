const setRememberMe = (isRememberME)=>{
    localStorage.setItem('isRememberME',isRememberME);
}

const isRememberMe = ()=>{
    return localStorage.getItem('isRememberME');
}

const setItem = (key,value)=>{
    if(isRememberMe()){
        localStorage.setItem(key,value);
    }
    else{
        sessionStorage.setItem(key,value);
    }
}

const getItem = (key)=>{
    if(isRememberMe()){
        localStorage.getItem(key);
    }
    else{
        sessionStorage.getItem(key);
    }
}

const setToken = (token)=>{
    localStorage.setItem('token',token);
}

const getToken = ()=>{
    return localStorage.getItem('token')
}

const setUserInfo = (username,email,name,role)=>{
    localStorage.setItem('username',username);
    localStorage.setItem('email',email);
    localStorage.setItem('name',name);
    localStorage.setItem('role',role);
}

const getUsername = ()=>{
    return localStorage.getItem('username');
}

const getUserInfo = ()=>{
    return {
        username: localStorage.getItem('username'),
        email:localStorage.getItem('email'),
        name: localStorage.getItem('name'),
        role: localStorage.getItem('role'),
    };
}

const storage = {setToken,setUserInfo,getToken,getUserInfo,isRememberMe,setRememberMe,getUsername};
export default storage;