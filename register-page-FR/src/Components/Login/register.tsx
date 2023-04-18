import "../styles.css"
import { IoMdCheckmark } from "react-icons/io";
import register from "../../assets/register.png"
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    return <div className="register">
        <div className="heading">New to Naukari?</div>
        <div className="list">
            <div><IoMdCheckmark color="#4a90e2" /></div>
            <div className="point">One click apply using naukri profile.</div>
        </div>
        <div className="list">
            <div><IoMdCheckmark color="#4a90e2" /></div>
            <div className="point">Get relevant job recommendations.</div>
        </div>
        <div className="list">
            <div><IoMdCheckmark color="#4a90e2" /></div>
            <div className="point">Showcase profile to top companies and consultants.</div>
        </div>
        <div className="list">
            <div><IoMdCheckmark color="#4a90e2" /></div>
            <div className="point">Know application status on applied jobs.</div>
        </div>

        <div className="register-btn">
            <button onClick={()=>navigate("/register")}>Register for Free</button>
        </div>

        <div className="banner">
            <img src={register} alt="register" width={200} />
        </div>
    </div>
}