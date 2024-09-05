import { Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useEffect,useState } from 'react';
import SelectComponent from '../../Components/Select/Select';
import Items from '../../Components/Items';
import { useParams } from 'react-router-dom';
import Accessory from '../../Components/Items/accessory';
import Modals from '../../Components/Modal/Modal';
function LeftFollowring(){

    const [show, setShow] = useState(false);
    let {id} = useParams();
    
    let active = 0;
    let point = 190;
    const handleSlider = (key)=>{
        let items = document.querySelectorAll('.wrapperImage .list .item');
        let lenghtItems = items.length -1;
        let infeat = document.querySelectorAll('.feature .infeat')

        if(key === 'next'){
            if(active + 1 > lenghtItems){
                active = 0;
            }else{
                active = active + 1;
            }
            reloadSlider(items,active);
            reloadinFeature(infeat);
        }

        if(key === 'prev'){
            if(active - 1 < 0){
                active = lenghtItems;
            }else{
                active = active - 1;
            }
            reloadSlider(items,active);
            reloadinFeature(infeat);
        }
    }
    const reloadSlider = (items,active)=>{
        let lastActiveItem = document.querySelector('.wrapperImage .list .item.active');
        lastActiveItem.classList.remove('active');
        items[active].classList.add('active');
    }
    const reloadinFeature = (infeat)=>{
        let lastActiveFeat = document.querySelector('.feature .infeat.active');
        lastActiveFeat.classList.remove('active');
        infeat[active].classList.add('active');
    }

    const handleAcces = (key)=>{
        let element = document.querySelectorAll('.list-item-acces .list-item .item-acces');
        for(let i = 0; i < 6 ; i++){
            element[i].style.left = -190 + 'px';
        }
        console.log(element);
    }



    return(
        <>
            <Grid item xs={7} className='gridLeft'>
                <Stack className='gridStack' spacing={3}>
                    <div className='wrapperImage'>
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
                            onClick={()=>handleSlider('prev')}
                            className='prev'>{"<"}</button>
                            <button 
                            onClick={()=>handleSlider('next')}
                            className='next'>{">"}</button>
                        </div>
                    </div>
                    <div className='feature'>
                        <div className='feattab'>
                        
                        </div>
                        <div className='infeat active'>
                        <img src='/images/p1.jpg'></img>
                        </div>
                        <div className='infeat'>
                        <img src='/images/bg.jpg'></img>
                        </div>
                        <div className='infeat'>
                        <img src='/images/rp.jpg'></img>
                        </div>
                    </div>
                    <div className='contact-c'>
                    <Grid className='gridContainer' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6} className='gridLeft'>
                            <div className='contact-l'>
                                <h3 style={{color:'black'}}>Thông Tin Sản Phẩm</h3>
                                <div className='contact-l-ct'>
                                    <ion-icon name="phone-portrait-outline"></ion-icon>
                                    <p>
                                    Máy mới 100% , chính hãng Apple Việt Nam.
                                    CellphoneS hiện là đại lý bán lẻ uỷ quyền iPhone chính hãng VN/A của Apple Việt Nam
                                    </p>
                                </div>
                                <div className='contact-l-ct'>
                                    <ion-icon name="cube-outline"></ion-icon>
                                    <p>
                                    Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Lightning - Type C
                                    </p>
                                </div>
                                <div className='contact-l-ct'>
                                    <ion-icon name="time-outline"></ion-icon>
                                    <p>
                                    1 ĐỔI 1 trong 30 ngày nếu có lỗi phần cứng nhà sản xuất. Bảo hành 12 tháng tại trung tâm bảo hành chính hãng Apple:
                                    </p>
                                </div>
                                <div className='contact-l-ct'>
                                    <ion-icon name="cash-outline"></ion-icon>
                                    <p>
                                    Giá sản phẩm đã bao gồm VAT
                                    </p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6} className='gridRight'>
                            <div className='contact-r'>
                            <Stack>
                                <Grid className='gridContainer' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={6}>
                                        <button className='btn-l' onClick={()=> setShow(!show)}>Hà Nội</button>  
                                    </Grid>
                                    <Grid item xs={6}>
                                        <SelectComponent/>
                                    </Grid>
                                    {show && <Modals/>}
                                </Grid>
                                <div className='hotAddress'>
                                    <div className='list'>
                                        <div className='title-add'>
                                            <span>
                                            0123456789 - <ins><a href='#'>133 Thái Hà, P. Trung Liệt, Q, Đống Đa , Ha noi</a></ins>
                                            </span> 
                                        </div> 
                                    </div>    
                                </div>
                            </Stack>
                            </div>
                        </Grid>
                        
                    </Grid>
                        
                        
                    </div>
                    <div className='accessory'>
                        <Stack spacing={2}>
                            <div className='option-accessory'>
                                <div className='product-item-acces'>
                                    Mua kèm giá gốc
                                </div>
                                <div className='product-item-acces'>
                                    Phụ kiện mua cùng
                                </div>
                            </div>
                            <div className='list-item-acces'>
                                <div className='list-item'>
                                    <Accessory/>
                                </div>
                                <div className='buttons'>
                                    <button onClick={()=>handleAcces("prev")}
                                    className='prev'>{"<"}</button>
                                    <button className='next'>{">"}</button>
                                </div>
                            </div>
                        </Stack>
                    </div>
                </Stack>
            </Grid>
        </>
    )
}

export default LeftFollowring;