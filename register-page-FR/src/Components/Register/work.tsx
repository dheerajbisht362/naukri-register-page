import "../styles.css"
import {SlBriefcase} from 'react-icons/sl';
import {GiSchoolBag} from 'react-icons/gi'
export default function Work(){
    return <div className="work-container">
        <div className="inner-container">
        <p>Work Status</p>
        <div className="work-status">
            <div>
                <span>
                    <SlBriefcase className="si-icon"/>
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
                    <GiSchoolBag className="si-icon"/>
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
        <div className="resume-container">
            <div className="resume-container2">
                <button>Upload Resume</button>
            </div>
        </div>
        </div>
    </div>
}