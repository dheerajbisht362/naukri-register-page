import Input from "./input";
import {useState} from "react"

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

    return <div>
        <div className="text-lg">Find a job & grow your career</div>
        <form>
            <Input title="Full Name" type="text" placeholder="What is your name?" onChange={handleChange} value={formData.name} id="name" error={error.name} />
        </form>
    </div>
}