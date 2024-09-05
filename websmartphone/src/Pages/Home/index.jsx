import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import '../../Css/Home/Home.css'
import Image from 'react-bootstrap/Image';
import { useEffect ,useRef} from 'react';
import Items from '../../Components/Items';
import Slider from '../../Components/Slider';
import Grid from '@mui/material/Grid';
function Home(){
    return(
        <>
            <Container maxWidth="xl">
                <Box className='boxSilder'>
                        <div className='leftContent'>
                            <Slider/>
                        </div>
                        <div className='rightContent'>
                            <Stack spacing={3}>
                                <div className='adv-product'>
                                    <img src='/images/bg.jpg'></img>
                                </div>
                                <div className='adv-product'>
                                    <img src='/images/bg.jpg'></img>
                                </div>
                                <div className='adv-product'>
                                    <img src='/images/bg.jpg'></img>
                                </div>
                            </Stack>
                        </div>
                </Box>
                <Box sx={{ width:'90%', margin:'auto' }}>
                    <Stack>
                        <context className='ctPhone'>
                            <label>Điện Thoại Nổi Bật Nhất</label>                 
                        </context>
                        <Items/>
                    </Stack>
                </Box>
            </Container>
        </>
    ) 
}

export default Home;