import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../../Css/Layouts/Header/Header.css';


function Header(){
    return(
        <header>
        <Container>
            <Row> 
                <Col className='box'>
                    <input type='text' placeholder='Search...'></input>
                    <a href='#'>
                        <ion-icon name="search-outline"></ion-icon>
                    </a>
                </Col>
            </Row>
        </Container>
      
        </header>
    )
}

export default Header;