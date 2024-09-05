import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import '../../Css/Layouts/Followring/Followring.css'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import RightFollowring from './right.followring';
import LeftFollowring from './left.followring';
import ProductAPI from '../../API/components/productAPI';


function Followring(props){
    
    const [product,setProduct] = useState({});
    let param = useParams('id');

    useEffect(()=>{
        const getProductByID = async (param)=>{
            const result = await ProductAPI.getProductById(param.id);
            setProduct(result);
        }
        getProductByID(param);
    },[])

    return(
        <Container maxWidth="lg">
                <Box sx={{ width:'100%', height:'1200px',borderBottom:'1px solid rgba(0, 0, 0, 0.205);'}}>
                    <Grid className='gridContainer' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12}>
                            <h3>{`${product.name} ${product.ram}GB | ${product.memory}GB`}</h3>
                        </Grid>
                        {/* left following */}
                        <LeftFollowring/ >
                        {/* right following */}
                        <RightFollowring productId={param.id}/>
                    </Grid>
                </Box>
                <Box sx={{ width:'100%'}}>
                    <Stack spacing={1}>
                        <context className='ctPhone'>
                            <label>Sản Phầm Tương Tự</label>                 
                        </context>
                        <div className='product-list-swiper'>
                            <div className='swuper-list'>
                                <div className='item'>
                                <img src='/images/IP15.jpg'></img>
                                <div className='nameItem'>
                                    <span>iPhone 15 Pro Max 256GB | Chính hãng VN/A</span>
                                </div>
                                <div className='Overview'>
                                    <span>6.7 inches</span>
                                    <span>8 GB</span>
                                    <span>256 GB</span>
                                </div>
                                <div className='price'>
                                    <span>10.000.000 <sup>đ</sup> </span>
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
                                <div className='item'>
                                <img src='/images/IP15.jpg'></img>
                                <div className='nameItem'>
                                    <span>iPhone 15 Pro Max 256GB | Chính hãng VN/A</span>
                                </div>
                                <div className='Overview'>
                                    <span>6.7 inches</span>
                                    <span>8 GB</span>
                                    <span>256 GB</span>
                                </div>
                                <div className='price'>
                                    <span>10.000.000 <sup>đ</sup> </span>
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
                                <div className='item'>
                                <img src='/images/IP15.jpg'></img>
                                <div className='nameItem'>
                                    <span>iPhone 15 Pro Max 256GB | Chính hãng VN/A</span>
                                </div>
                                <div className='Overview'>
                                    <span>6.7 inches</span>
                                    <span>8 GB</span>
                                    <span>256 GB</span>
                                </div>
                                <div className='price'>
                                    <span>10.000.000 <sup>đ</sup> </span>
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
                                <div className='item'>
                                <img src='/images/IP15.jpg'></img>
                                <div className='nameItem'>
                                    <span>iPhone 15 Pro Max 256GB | Chính hãng VN/A</span>
                                </div>
                                <div className='Overview'>
                                    <span>6.7 inches</span>
                                    <span>8 GB</span>
                                    <span>256 GB</span>
                                </div>
                                <div className='price'>
                                    <span>10.000.000 <sup>đ</sup> </span>
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
                            </div>
                            {/* <div className='buttons'>
                                <button id='prev' onClick={()=>handleSlider('prev')}> {"<"}</button>
                                <button id='next' onClick={()=>handleSlider('next')}> {">"}</button>
                            </div> */}
                        </div>
                    </Stack>
                    
                </Box>
                
        </Container>
    )
}

export default Followring;