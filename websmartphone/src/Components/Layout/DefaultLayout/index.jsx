import Header from "./Header";
import Sidebar from "./SideBar/index";
import '../../../Css/Layouts/main/style.css'
import Footer from "./Footer";

function DefaultLayout({children}){
    return (
        <>
            <Header />
            <main className = 'main'>
                <Sidebar/>
                <content className = 'content'>
                    {children}
                </content>
            </main>
            <Footer/>
        </>
    )
}

export default DefaultLayout;