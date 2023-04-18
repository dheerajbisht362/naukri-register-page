import LoginForm from "./loginForm";
import Register from "./register";


export default function LoginBody() {
    return <div className="login-main">
        <Register />
        <LoginForm />
    </div>
}