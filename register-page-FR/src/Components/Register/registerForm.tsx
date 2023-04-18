import Input from "./input";
import {useState} from "react";
import Work from "./work";
import Footer from "../footer";

export default function RegisterForm(){
    const initialState = {
        name : "",
        email : "", 
        password : "",
        mobile : "",
        workExerience : "",
        resume: "",
        enableWhatsAppCommunication : true
    }

    const errorState = {
        name : "",
        email : "", 
        password : "",
        mobile : "",
        resume: "",
    }

    const [formData, setFormData] = useState(initialState);
    const [error , setError] = useState(errorState);


    const handleChange = (e) => {
        e.preventDefault();
        const formId = e.target.id;

        setFormData({...formData, [formId]: e.target.value})

    }

    return <div className="bg-whitebg p-4 px-16 rounded-2xl my-8">
        <div className="text-3xl font-extrabold">Find a job & grow your career</div>
        <form>
            <Input title="Full Name" type="text" placeholder="What is your name?" onChange={handleChange} value={formData.name} id="name" error={error.name} />
            <Input title="Email Id" type="text" placeholder="Tell us your Email ID" onChange={handleChange} value={formData.email} id="name" error={error.email} />
            <Input title="Password" type="password" placeholder="Create a password for your account" onChange={handleChange} value={formData.password} id="name" error={error.password} />
            <Input title="Mobile Number" type="text" placeholder="Mobile Number" onChange={handleChange} value={formData.mobile} id="name" error={error.mobile} />
        </form>
        <Work/>
    </div>
}