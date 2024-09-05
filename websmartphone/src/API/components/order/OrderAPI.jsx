import Api from '../../API'

const url = 'order';

const createProduct = (productId,userId)=>{
    const parameters = {
        productId: productId,
        userId: userId
    }
    return Api.post(`${url}/orderForm`,parameters)
}
const OrderAPI = {createProduct}
export default OrderAPI;
