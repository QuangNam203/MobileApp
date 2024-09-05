import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Stack } from 'react-bootstrap';
import '../../Css/Layouts/Product/Product.css'
import { useEffect } from 'react';
import Items from '../../Components/Items';
import { NavLink, useParams } from 'react-router-dom';
import ProductAPI from '../../API/components/productAPI';
import { selectProducts } from '../../Redux/selectors/productSelector';
import { connect } from 'react-redux';
import { setListProducts } from '../../Redux/reducers/productSlice';
function Product(props){
    const param = useParams('name');
    const setProduct = props.setListProducts;

    useEffect(()=>{
        const getAllproductType = async (param)=>{
            const result = await ProductAPI.getAllProductType(param.name,'id','asc');
            console.log(result);
            setProduct(result.content)
        }
        getAllproductType(param)
    },[setProduct])

    const handleSort = (key)=>{
        switch(key){
            case 'asc': const ASC = async ()=>{
                const result = await ProductAPI.getAllProductType(param.name,'id','asc');
            }
            ASC();
            case 'desc': const DESC = async ()=>{
                const result = await ProductAPI.getAllProductType(param.name,'id','asc');
            }

        }    
    }

    const ListProduct = props.product.map((item,index)=>(
        <NavLink to={`/followring/${item.id}`} key={index}>
            <div className='Item'>
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
    ))

    return(
        <>
            <Container maxWidth="xl">
                <Box sx={{ width:'90%', margin:'auto' }}>
                    <Stack spacing={2}>
                        <Grid className='gridContainer' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
                            <Grid item xs={6}>
                                <div className='Adver'>
                                    <div className='list'>
                                        <div className='item active'>
                                        <img src='/images/p1.jpg'></img>
                                        </div>
                                        <div className='item'>
                                        <img src='/images/bg.jpg'></img>
                                        </div>
                                        <div className='item'>
                                        <img src='/images/rp.jpg'></img>
                                        </div>    
                                    </div>
                                    <div className='buttons'>
                                        <button 
                                        className='prev'>{"<"}</button>
                                        <button 
                                        className='next'>{">"}</button>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                            <div className='Adver st2'>
                                    <div className='list'>
                                        <div className='item active'>
                                        <img src='/images/p1.jpg'></img>
                                        </div>
                                        <div className='item'>
                                        <img src='/images/bg.jpg'></img>
                                        </div>
                                        <div className='item'>
                                        <img src='/images/rp.jpg'></img>
                                        </div>    
                                    </div>
                                    <div className='buttons'>
                                        <button 
                                        className='prev'>{"<"}</button>
                                        <button 
                                        className='next'>{">"}</button>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                        <div className='Product-T'>
                            <ul>
                                <li>
                                    IPHONE 15 SERIES
                                </li>
                                <li>
                                    IPHONE 14 SERIES
                                </li>
                                <li>
                                    IPHONE 13 SERIES
                                </li>
                                <li>
                                    IPHONE 12 SERIES
                                </li>
                                <li>
                                    IPHONE 11 SERIES
                                </li>
                            </ul>
                        </div>
                        <div className='filter'>
                            <label>
                                Chọn theo Tiêu Chí
                            </label>
                            <div className='filter-L'>
                                <button className='ot-filter'>
                                    <ion-icon name="funnel-outline"></ion-icon>
                                    Bộ lọc
                                </button>
                                <button className='ot-filter'>
                                    <ion-icon name="rocket-outline"></ion-icon>
                                    Sẵn sàng
                                </button>
                                <button className='ot-filter'>
                                    <ion-icon name="cash-outline"></ion-icon>
                                    Giá
                                </button>
                                <button className='ot-filter'>
                                    Bộ nhớ trong
                                    <ion-icon name="caret-down-outline"></ion-icon>
                                    <div className='list-filter-child'>
                                        <ul>
                                            <li>
                                                <button className='btn-filter'>
                                                    trên 512GB
                                                </button>
                                            </li>
                                            <li>
                                                <button className='btn-filter'>
                                                    128GB và 256GB
                                                </button>
                                            </li>
                                            <li>
                                                <button className='btn-filter'>
                                                    32GB và 64GB
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </button>
                                <button className='ot-filter'>
                                    Dung lượng Ram
                                    <ion-icon name="caret-down-outline"></ion-icon>
                                    <div className='list-filter-child'>
                                        <ul>
                                            <li>
                                                <button className='btn-filter'>
                                                    4GB - 6GB
                                                </button>
                                            </li>
                                            <li>
                                                <button className='btn-filter'>
                                                    8GB - 12GB
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className='sort'>
                            <label>
                                Sắp xếp theo
                            </label>
                            <div className='sort-L'>
                                <button className='ot-filter sort-asc'>
                                    <ion-icon name="arrow-down-outline"></ion-icon>
                                    Giá Cao - Thấp
                                </button>
                                <button className='ot-filter sort-desc'>
                                    <ion-icon name="arrow-up-outline"></ion-icon>
                                    Giá Thấp - Cao
                                </button>
                            </div>
                        </div>
                    </Stack>
                </Box>
                <Box sx={{ width:'90%', margin:'auto' }}>
                    <div className='wrappProduct'>
                        <div className='ListProduct'>
                            
                           {ListProduct}
                        </div>
                    </div>
                </Box>
            </Container>
        </>
    )
}

const mapStateToProps = (state)=>{
    return{
        product: selectProducts(state)
    }
}

export default connect(mapStateToProps,{setListProducts})(Product);