import Home from "../Pages/Home";
import Followring from "../Pages/Following";
import Product from "../Pages/Product";
import Login from "../Pages/Login/Login";

const publicRouters = [
    { path: '/',param:null, component : Home},
    { path: '/Followring', param:'id', component : Followring},
    { path: '/Followring', param:null, component : Followring},
    { path: '/Product', param:null, component : Product},
    { path: '/Login', param: null , component : Login , layout : null},
    { path: '/Product', param:'name' , component : Product},
]

const privateRouters = [
    
]

export {publicRouters , privateRouters}