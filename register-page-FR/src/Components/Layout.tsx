import Header from "./header"
import Footer from "./footer"
import { useLocation } from 'react-router-dom';
import HeaderLogin from "./headerLogin";
const Layout = ({ children }) => {
    const location = useLocation();
    const routeName = location.pathname;
    return <>
        {routeName === "/register" ? <Header /> : <HeaderLogin />}
        <main>{children}</main>
        {routeName === "/register" && <Footer />
        }    </>
}

export default Layout