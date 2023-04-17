import RegisterForm from "./registerForm";
import RightContainer from "./right-cont"

export default function RegisterBody(){
    return <div className="flex bg-lightbluebg2 px-20 gap-8">
        <RightContainer />
        <RegisterForm/>
    </div>
}