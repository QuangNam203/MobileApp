import storage from "../../API/Storage"
import Login from "../../Pages/Login/Login";
import React from "react";
import DefaultLayout from '../Layout/DefaultLayout/index';

function withAuthen(authenticatedComponent){
    class HOC extends React.Component{
        isAuthenticated = ()=>{
            return storage.getToken !== null && storage !== undefined;
        }
        render(){
            return !this.isAuthenticated() ? <Login /> : <authenticatedComponent/>
        }
    }

    return HOC
}

export default withAuthen;