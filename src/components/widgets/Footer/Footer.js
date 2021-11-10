import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Footer.css';

function Footer(){

    const date = new Date();

    const profileDropdown = {
        element: <img className="nav-user__image" src="https://via.placeholder.com/50" alt="logo" />,
        primaryLink: "/user-profile",
        list: [
            { link: '/user-profile', name: 'Profile panel' },
            { link: '/gallery', name: 'Gallery' },
            { link: '', name: 'Messages' },
            { link: '', name: 'Profile settings' },
            { link: '/authorization', name: 'Log In' }
        ]
    };

    return(
        <footer className="footer-bar">
            <div className="row">
                <div className="col-20">
                    <Link to="/">
                        <div className="nav-logo">
                                <img src="https://via.placeholder.com/50" alt="logo" />
                                GlassPaw
                        </div>
                    </Link>
                </div>
                <div className="col-40">
                    <ul className="">
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                    </ul>
                </div>
                <div className="col-40"></div>
            </div>
            <div className="row date-row">
                <div className="col center">
                    © { date.getFullYear() }
                </div>
            </div>
        </footer>
    );
}

export default Footer;