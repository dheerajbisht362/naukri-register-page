import "../styles.css";
import greenBoy from '../../assets/green-boy.svg'
import { AiFillCheckCircle } from 'react-icons/ai';


export default function RightContainer(){
    return <div className="main-container w-10 basis-1/4 max-h-72">
        <div className="boy-picture">
            <img alt="boy" src={greenBoy}/>
            <h2>On registering, you can</h2>
            <div className="about-box">
                <div>
                    <span><AiFillCheckCircle style={{ color :'#18c1a3', fontSize:'18px'}}/></span>
                    <p>Build your profile and let recruiters find you</p>
                </div>
                <div>
                    <span><AiFillCheckCircle style={{ color :'#18c1a3', fontSize:'18px'}}/></span>
                    <p>Get job postings delivered right to your email</p>
                </div>
                <div>
                    <span><AiFillCheckCircle style={{ color :'#18c1a3', fontSize:'18px'}}/></span>
                    <p>Find a job and grow your career</p>
                </div>
            </div>
        </div>
        {/* <div>

        </div> */}
    </div>
}