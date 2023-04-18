import naukriLogo from '../assets/naukri_Logo.png'
import { useNavigate } from "react-router-dom";

export default function Header(): JSX.Element{
    const navigate = useNavigate()
    return <div className="bg-whitebg flex px-20 py-2 justify-between items-center">
        <img alt="logo" src={naukriLogo} />
        <div className="text-sm">Already Registered? <span className="text-lightbluebg" onClick={()=>navigate("/login")}> Login </span> here</div>
    </div>
}