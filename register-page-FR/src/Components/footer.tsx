import "./styles.css";

export default function Footer(){
    return <div>
        <div className="footer-container">
            <ul>
                <li>About us</li>
                <li>Contact us</li>
                <li>FAQs</li>
                <li>Terms and Conditions</li>
                <li>Report a Problem</li>
                <li style={{ borderRight:'0px'}}>Privacy Policy</li>
            </ul>
            <p>All rights reserved © 2023 Info Edge India Ltd.</p>
        </div>
    </div>
}