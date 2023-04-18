import "../styles.css"
import { SlBriefcase } from 'react-icons/sl';
import { GiSchoolBag } from 'react-icons/gi';
import { IconName, BsWhatsapp } from "react-icons/bs";
import { useState } from "react";
export default function Work() {

    const [resumebtn, setResumebtn] = useState(false)

    const handleResume = () => {
        setResumebtn(true)
    }
    return <div className="py-4">
        <div>
            <div className="text-sm font-medium">Work Status</div>
            <div className="work-status">
                <div>
                    <span>
                        <SlBriefcase className="si-icon" />
                    </span>
                    <div className="content-div">
                        <h3>
                            I'm Experienced
                        </h3>
                        <p>
                            I have work experience (excluding internships)
                        </p>
                    </div>
                </div>
                <div>
                    <span>
                        <GiSchoolBag className="si-icon" />
                    </span>
                    <div className="content-div">
                        <h3>
                            I'm a Fresher
                        </h3>
                        <p>
                            I  am a student/ Haven't worked after graduation
                        </p>
                    </div>
                </div>
            </div>
            <p>Resume</p>
            {resumebtn ? <input type="file" name="documents" id="" placeholder="Upload Resume" /> : ""}
            <div className="resume-container">
                <div className="resume-container2">
                    {resumebtn ? "" : <button onClick={handleResume}>Upload Resume</button>}
                </div>
                <div className="pdf-validate">
                    <p>DOC, DOCx, PDF, RTF | Max: 2 MB</p>
                </div>
            </div>
            <div className="checkbox" >
                <input className="input-check" type="checkbox" name="" id="" />
                <div className="whatsapp-updates">
                    <p>Send me important updates on </p>
                    <span className="whatsapp-icon" ><BsWhatsapp style={{ backgroundColor: "rgb(37 211 102)" }} /></span>
                    <p> WhatsApp</p>
                </div>
            </div>
            <div className="policy-container">
                <div className="policy-para">
                    <p>By clicking Register, you agree to the  <span className="policy"> Terms and Conditions</span> & <span className="policy">Privacy Policy </span>  of Naukri.com</p>
                </div>
                <div>
                    <button className="register-btn" type="submit" >Register Now</button>
                </div>
            </div>
        </div>
    </div>
}