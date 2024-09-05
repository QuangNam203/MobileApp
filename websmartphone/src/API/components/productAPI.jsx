import API from '../API';

const url = "product";

const getAll = (page = 1, size = 20 , sortFiled = 'id', sortType = 'desc')=>{
    const parameters = {
        page:page,
        size,
        sort:`${sortFiled},${sortType}`
    }
    return API.get(`${url}`,{params:parameters});
}

const getProductById = (id) =>{
    return API.get(`${url}/productId/${id}`);
}

const getAllProductType = (name,id = 'id',filter = 'asc')=>{
    const parameters = {
        sort:`${id},${filter}`
    }
    return API.get(`${url}/productType/${name}`,{params:parameters});
}

const ProductAPI = {getAll,getProductById,getAllProductType}

export default ProductAPI