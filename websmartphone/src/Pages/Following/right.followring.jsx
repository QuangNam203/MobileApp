import { Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import { element, number } from 'prop-types';
import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import storage from '../../API/Storage';
import UserApi from '../../API/components/User/UserAPI';
import OrderAPI from '../../API/components/order/OrderAPI';

function rightFollowring(props){
    let activeM = 0;
    let activeP = 0;
    const handleMemory = (key)=>{
        let items = document.querySelectorAll('.product-memory .memory');
        activeM = key
        MemoryPrev(items,activeM);
    }
    const MemoryPrev = (items,active)=>{
        let lastActiveItem = document.querySelector('.product-memory .memory.active');
        let lastActiveIcon = document.querySelector('.product-memory .memory.active .check-m.active');
        let ActiveIcon = items[active].querySelector('.check-m');
        lastActiveItem.classList.remove('active');
        lastActiveIcon.classList.remove('active');
        items[active].classList.add('active');
        ActiveIcon.classList.add('active');
    }
    const handleStyle = (key)=>{
        let items = document.querySelectorAll('.product-style .list .item');
        activeM = key
        StylePrev(items,activeM);
    }
    const StylePrev = (items,active)=>{
        let lastActiveItem = document.querySelector('.product-style .list .item.active');
        let lastActiveIcon = document.querySelector('.product-style .list .item.active .check-p.active');
        let ActiveIcon = items[active].querySelector('.check-p');
        lastActiveItem.classList.remove('active');
        lastActiveIcon.classList.remove('active');
        items[active].classList.add('active');
        ActiveIcon.classList.add('active');
    }

    const HandleBuy = async (productId)=>{
        const user = await UserApi.getUserByName(storage.getUsername());
        const result = await OrderAPI.createProduct(parseInt(productId),user.id);
        console.log('result:', result.data);
        window.location.href = '/';
    }


    return(
        <>
            <Grid item xs={5} className='gridRight'>
                <Stack spacing={2}>
                    <div className='product-memory'>
                        <button className='memory' onClick={()=>handleMemory(0)}>
                            <span>512GB</span>
                            <p>23.000.000 <sup>đ</sup></p>
                            <div className='check-m'>
                            <ion-icon style={{color:'white'}} name="checkmark-outline"></ion-icon>
                            </div>
                        </button>
                        <button className='memory active' onClick={()=>handleMemory(1)}>
                            <span>256GB</span>
                            <p>16.000.000 <sup>đ</sup></p>
                            <div className='check-m active'>
                                <ion-icon style={{color:'white'}} name="checkmark-outline"></ion-icon>
                            </div>
                        </button>
                        <button className='memory' onClick={()=>handleMemory(2)}>
                            <span>128GB</span>
                            <p>13.000.000 <sup>đ</sup></p>
                            <div className='check-m'>
                            <ion-icon style={{color:'white'}} name="checkmark-outline"></ion-icon>
                            </div>
                        </button>
                    </div>
                    <div className='product-style'>
                        <p>Chọn màu để xem giá và chi nhánh có hàng</p>
                        <div className='list'>
                            <button className='item active' onClick={()=>handleStyle(0)}>
                                <span>tina xanh</span>
                                <p>35.000.000 <sup>đ</sup></p>
                                <div className='check-p active'>
                                <ion-icon style={{color:'white'}} name="checkmark-outline"></ion-icon>
                                </div>
                            </button>
                            <button className='item' onClick={()=>handleStyle(1)}>
                                <span>tina xanh</span>
                                <p>35.000.000 <sup>đ</sup></p>
                                <div className='check-p'>
                                <ion-icon style={{color:'white'}} name="checkmark-outline"></ion-icon>
                                </div>
                            </button>
                            <button className='item' onClick={()=>handleStyle(2)}>
                                <span>tina xanh</span>
                                <p>35.000.000 <sup>đ</sup></p>
                                <div className='check-p'>
                                <ion-icon style={{color:'white'}} name="checkmark-outline"></ion-icon>
                                </div>
                            </button>
                            <button className='item' onClick={()=>handleStyle(3)}>
                                <span>tina xanh</span>
                                <p>35.000.000 <sup>đ</sup></p>
                                <div className='check-p'>
                                <ion-icon style={{color:'white'}} name="checkmark-outline"></ion-icon>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='transform-type'>
                        <Stack spacing={2}>
                            <div className='wrap-type'>
                                <div className='type active'>
                                    <img src='/images/old.png'></img>
                                    <div className='text'>
                                        <h2>33.000.000 <sup>đ</sup></h2>
                                        <p>Khi Thu Cũ Đổi Mới</p>
                                    </div>
                                </div>
                                <div className='type'>
                                    <div className='text'>
                                        <h2>35.000.000 <sup>đ</sup></h2>
                                        <del>40.000.000<sup>đ</sup></del>
                                    </div>
                                </div>
                            </div>
                            <div className='kit-voucher'>
                                <p>Tiết kiệm thêm đến <span>228.000đ</span> cho Smember</p>
                                <u><a>kiểm tra giá cuối cùng của bạn</a></u>  
                            </div>
                            <div className='voucher'>
                                <div className='v-1'>
                                <ion-icon name="gift-outline"></ion-icon>
                                <h3>Khuyễn Mãi</h3>
                                </div>
                                <div className='v-2'>
                                    <span>1</span>
                                    <a>Giảm ngay 500k khi thanh toán qua VNPAY</a>
                                </div>
                            </div>
                        </Stack>
                        <Stack spacing={2} style={{marginTop:"10px"}}>
                            <div className='buy'>
                            <Grid className='gridContainer' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={10}>
                                    {/* ---------------hanle Buy-------------------- */}
                                    <button className='pay' onClick={()=>HandleBuy(props.productId)}>Mua Ngay</button>
                                    </Grid>
                                <Grid item xs={2}>
                                    <div className='addCart'>
                                    <ion-icon name="cart-outline"></ion-icon>
                                    <p>Thêm vào giỏ</p>
                                    </div>
                                </Grid>
                            </Grid>
                            </div>
                            <div className='installment'>
                                <Grid className='gridContainer' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={6}>
                                        <button>
                                            TRẢ GÓP 0% <br/>
                                            trả trước từ 10.500.000 <sup>đ</sup>
                                        </button>
                                        </Grid>
                                    <Grid item xs={6}>
                                    <button>
                                            TRẢ GÓP 0% QUA THẺ <br/>
                                            {"(Không phí chuyển đổi 3 - 6 tháng)"}
                                        </button>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className='reold'>
                                <button>
                                    Thu Cũ Đổi Mới <br/>
                                    Chỉ từ 10.300.000 <sup>đ</sup>
                                </button>
                            </div>
                        </Stack>
                    </div>
                    <div className='promotion'>
                        <div className='categy'>
                            <label> ƯU ĐÃI THÊM</label>
                            <div className='list'>
                                <ul>
                                    <li>
                                        <ion-icon name="checkmark-circle-outline"></ion-icon>
                                        <a href='#'>Xem chính sách ưu đãi dành cho thành viên Smember</a>
                                    </li>
                                    <li>
                                        <ion-icon name="checkmark-circle-outline"></ion-icon>
                                        <a href='#'>Giảm đến 600K khi mở thẻ tín dụng VIB</a></li>
                                    <li>
                                        <ion-icon name="checkmark-circle-outline"></ion-icon>
                                        <a href='#'>Giảm 500K khi thanh toán qua thẻ OCB</a></li>
                                    <li>
                                        <ion-icon name="checkmark-circle-outline"></ion-icon>
                                        <a href='#'>Giảm đến 700.000đ khi thanh toán qua Kredivo</a></li>
                                    <li>
                                        <ion-icon name="checkmark-circle-outline"></ion-icon>
                                        <a href='#'>Giảm 400.000đ khi thanh toán bằng thẻ tín dụng Home Credit</a></li>
                                    <li>
                                        <ion-icon name="checkmark-circle-outline"></ion-icon>
                                        <a href='#'>Liên hệ B2B để được tư vấn giá tốt nhất cho khách hàng doanh nghiệp khi mua số lượng nhiều</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='warranty'>
                            <ion-icon name="receipt-outline"></ion-icon>
                            <div className='note'>
                                <h3>
                                Bảo vệ sản phẩm toàn diện với dịch vụ bảo hành mở rộng
                                <a href='#'>Xem chi tiết</a>
                                </h3> <br />
                                <p>
                                (Khách hàng đăng ký thông tin để được hỗ trợ tư vấn và thanh toán tại cửa hàng nhanh nhất, số tiền phải thanh toán chưa bao gồm giá trị của gói bảo hành mở rộng)
                                </p>
                            </div>
                        </div>
                    </div>
                </Stack>
            </Grid>
        </>
    )
}

export default rightFollowring;