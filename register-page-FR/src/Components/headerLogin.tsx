import naukriLogo from '../assets/naukri_Logo.png'
import "./styles.css"
import { useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function HeaderLogin(): JSX.Element {
    const navigate = useNavigate();
    return <div className="header-login">
        <img alt="logo" src={naukriLogo} onClick={()=>navigate("/register")} />
        <div className='nav-header'>
            <div>Jobs</div>
            <div>Companies</div>
            <div>Services</div>
            <input type="text" placeholder='Seach jobs here' />
        </div>

        <div className='btn'>
            <button className="login-btn" onClick={()=>navigate("/login")}>Login</button>
            <button className='register-btn' onClick={()=>navigate("/register")}>Register</button>
        </div>

        <div className='employee'>
            For employee<RiArrowDropDownLine />
        </div>

    </div>
}