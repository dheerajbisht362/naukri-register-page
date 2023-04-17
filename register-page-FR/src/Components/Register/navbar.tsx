import naukriLogo from "../../assets/naukri_Logo.png"

export default function RegsiterNavbar(): JSX.Element{
    return <div className="bg-whitebg flex px-20 py-2 justify-between items-center">
        <img alt="logo" src={naukriLogo} />
        <div className="text-s">Already Registered? <span className="text-lightbluebg"> Login </span> here</div>
    </div>
}