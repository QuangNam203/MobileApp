import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import '../../Css/Modals/Modals.css'
function Modals(props){
    return(
        <div className='container-modal'>
            <Box>
                <Stack>
                <div className='search-m'>
                    <input type='text' placeholder='...Search'></input>
                    <button>close</button>
                </div>
                <div className='listAddres-modal'>
                    <p>Vui lòng chọn tỉnh, thành phố để biết chính xác giá, khuyến mãi và tồn kho</p>
                    <div className='address-option'>
                        <button>ha noi</button>
                        <button>ha noi</button>
                        <button>ha noi</button>
                        <button>ha noi</button>
                        <button>ha noi</button>
                        <button>ha noi</button>
                        <button>ha noi</button>
                        <button>ha noi</button>
                        <button>ha noi</button>
                        <button>ha noi</button>
                        <button>ha noi</button>
                        <button>ha noi</button>
                        <button>ha noi</button>
                        <button>ha noi</button>
                        <button>ha noi</button>
                        <button>ha noi</button>
                        <button>ha noi</button>
                        <button>ha noi</button>
                        <button>ha noi</button>
                        <button>ha noi</button>
                        <button>ha noi</button>
                    </div>
                </div>
                </Stack>
            </Box>
        </div>
    )
}

export default Modals;