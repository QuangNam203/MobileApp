import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../../Css/Layouts/Footer/style.css'
function Footer(){
    return(
        <footer>
            <Row>
                <Col>
                    <img src='/images/logo.png' className='logo'></img>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nihil vero est veritatis, ipsam assumenda voluptatem cumque vel, asperiores, autem obcaecati neque ut nisi tempore quia ex cupiditate architecto quae.</p>
                </Col>
                <Col>
                    <h3>Infomation</h3>
                    <p>JAVA DEVELOPER</p>
                    <p>TẠ QUANG NAM</p>
                    <p>02/02/2003</p>
                    <p className='email-id'>quangnam2ko3@gmail.com</p>
                    <h4>+84 - 0366467479</h4>
                </Col>
                <Col>
                    <h3>Links</h3>
                    <ul>
                        <li><a href='#'>Facebook</a></li>
                        <li><a href='#'>Git</a></li>
                    </ul>
                </Col>
                <Col>
                    <h3>Newletter</h3>
                    <form>
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="email" placeholder='Enter your email id' required />
                        <button type='submit'>
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                        </button>
                    </form>
                    <div className='social-icons'>
                        <ion-icon name="logo-facebook"></ion-icon>
                        <ion-icon name="logo-github"></ion-icon>
                        <ion-icon name="logo-instagram"></ion-icon>
                        <ion-icon name="logo-twitch"></ion-icon>
                    </div>
                </Col>
            </Row>
        </footer>
    )
}
export default Footer;