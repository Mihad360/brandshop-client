import Footer from "../home/footer/Footer";
import Navbar from "../home/header/Navbar";
import {Outlet} from 'react-router-dom'

const Layout = () => {
    return (
        <div className="font">
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;