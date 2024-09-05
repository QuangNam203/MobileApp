import { useEffect ,useRef} from 'react';
import '../../Css/Slider/Slider.css'

function Slider(props){

    let active = 0;
   
    useEffect(()=>activeDots())

    const activeDots = ()=>{
        let list =  document.querySelector('.content  .slider .list');
        let items = document.querySelectorAll('.content  .slider .list .item');
        let dots =  document.querySelectorAll('.content  .slider .dots li');
       
        dots.forEach((li,index)=>{
            li.addEventListener('click',function(){
                active = index;
                reloadSlider(items,active,list,dots);
            })
        })
        
    }

    

    const handleSlider = (key)=>{
        let list =  document.querySelector('.content  .slider .list');
        let items = document.querySelectorAll('.content  .slider .list .item');
        let dots =  document.querySelectorAll('.content  .slider .dots li');
        let lenghtItems = items.length -1;
        
        if(key === 'next'){
            if(active + 1 > lenghtItems){
                active = 0;
            }else{
                active = active + 1;
            }
            reloadSlider(items,active,list,dots);
        }

        if(key === 'prev'){
            if(active - 1 < 0){
                active = lenghtItems;
            }else{
                active = active - 1;
            }
            reloadSlider(items,active,list,dots);
        }
    }

    // let refreshSlider = setInterval(()=>{
    //     let next =  document.getElementById('next');
    //     next.addEventListener('click',handleSlider('next'));
    // },5000);


    const reloadSlider = (items,active,list,dots)=>{
        let checkTop = items[active].offsetTop;
        list.style.top = -checkTop + 'px';
        let lastActiveDot = document.querySelector('.content .slider .dots li.active');
        lastActiveDot.classList.remove('active');
        dots[active].classList.add('active');
        // clearInterval(refreshSlider);
        // refreshSlider = setInterval(()=>{
        //     let next =  document.getElementById('next');
        //     next.addEventListener('click',handleSlider('next'));
        // },5000);
    }

    return(
        <div className='slider'>
            <div className='list'>
                {/* slider */}
                <div className='item'>
                    <img src='/images/p1.jpg'/>
                </div>
                <div className='item'>
                    <img src='/images/bg.jpg'/>
                </div>
                <div className='item'>
                    <img src='/images/rp.jpg'/>
                </div>
                <div className='item'>
                    <img src='/images/bg.jpg'/>
                </div>
                {/* buttons */}
            </div>
            <div className='buttons'>
                    <button id='prev' onClick={()=>handleSlider('prev')}> {"<"}</button>
                    <button id='next' onClick={()=>handleSlider('next')}> {">"}</button>
                </div>
            <ul className='dots'>
                <li className='active'></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default Slider;