
export default function Accessory(){

    const arr = [
        {title:'Chuot Logitech'},
        {title:'Ban Phim Logitech'},
        {title:'Chuot Attack'},
        {title:'Tai Nghe Gaming'},
        {title:'Chuot Asus'},
        {title:'Tay Cam PS6'},
    ]

    const element = arr.map((e,index)=>(
            <div className='item-acces'>
                <img src='/images/bg.jpg'></img>
                <p>Mua {e.title}</p>
                <h3>Giam 10%</h3>
                <button className='add-ass'>Chọn Sản Phẩm</button>
            </div>)
    )
    return(
        <>
            {element}
        </>   
    )
}