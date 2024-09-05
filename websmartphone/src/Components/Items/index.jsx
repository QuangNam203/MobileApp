import { useNavigate , NavLink } from "react-router-dom";
import '../../Css/Items/Items.css'
import { useEffect } from "react";
import ProductAPI from "../../API/components/productAPI";
import { connect } from "react-redux";
import { setListProducts } from "../../Redux/reducers/productSlice";
import { selectProducts } from "../../Redux/selectors/productSelector";

function Items(props){

    const history = useNavigate();
    const setProduct = props.setListProducts;

    useEffect(()=>{
        const getAllProduct = async ()=>{
            const result = await ProductAPI.getAll(1,20,'id','desc');
            setProduct(result.content);
        }
        getAllProduct();
    },[])

    const ListProduct = props.product.map(
        (item,index)=>(
            <NavLink to={`/followring/${item.id}`}>
                    <div className='item' key={index}>
                        <img src='/images/IP15.jpg'></img>
                        <div className='nameItem'>
                            <span>{`${item.name} ${item.memory}GB`} | Chính hãng VN/A</span>
                        </div>
                        <div className='Overview'>
                            <span>6.7 inches</span>
                            <span>{`${item.ram}`} GB</span>
                            <span>{`${item.memory}`} GB</span>
                        </div>
                        <div className='price'>
                            <span>{`${item.price}`} <sup>đ</sup> </span>
                            <del>10.000.000<sup>đ</sup></del>
                        </div>
                        <div className='note'>
                            <p>
                            Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng...
                            </p>
                        </div>
                        <div className='cmt'>
                            <div className='op'>
                                {/* <span className='buy'>Mua</span>
                                <div className='iconBuy'>
                                    <ion-icon name="cart-sharp"></ion-icon>
                                    <ion-icon name="airplane-sharp"></ion-icon>
                                </div> */}
                            </div>
                            <span className='favourite'>
                                Yêu thích
                                {/* <ion-icon name="heart-outline"></ion-icon> */}
                                <div className='heart'></div>
                            </span>
                        </div>
                    </div>
                </NavLink>
        )
    )

    return(
        <>
            <div className='wrapperItem'>
                {ListProduct}
            </div>
        </>
    )
}

const mapStateToProps = state =>{
    return{
        product: selectProducts(state)
    }
}

export default connect(mapStateToProps,{setListProducts})(Items);