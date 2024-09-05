import { NavLink } from 'react-router-dom';
import '../../../../Css/Layouts/SideBar/style.css'

function Sidebar(){
    const arrProduct = ['IPhone','Samsung','Nokia'];

    const entiArr = arrProduct.map((value,index)=>(
        <li key={index}>
            <NavLink to={`/Product/${value}`}>{value}</NavLink>
        </li>
    ))

    return(
        <div className = "SB-box">
            <nav class="navbar">
                <ul class="nav-links">
                    <li class="nav-link">
                        <NavLink to={'/'}>
                            Home
                        </NavLink>
                    </li>
                    <li class="nav-link services">
                        <a href="#">Sản Phẩm
                            <ion-icon name="caret-down-outline"></ion-icon>
                        </a>
                        <ul class="drop-down">
                            {entiArr}
                        </ul>
                    </li>
                    <li class="nav-link">
                        <a href="#">About</a>
                    </li>
                    <li class="nav-link">
                        <a href="#">Hot</a>
                    </li>
                    <li class="nav-link">
                        <a href="#">Help</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Sidebar;