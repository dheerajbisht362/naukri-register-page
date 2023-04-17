import RegisterNavbar from "../Components/Register/navbar"
import RegisterBody from "../Components/Register/registerBody"
import Footer from "../Components/Register/footer"
import RightContainer from "../Components/Register/right-cont"


export default function RegisterPage(){
    return <div>
            <RegisterNavbar/>
            <RegisterBody />
        <RightContainer/>
        <Footer />
        </div>
}