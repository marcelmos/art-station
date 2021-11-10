import { BrowserRouter as Router, Link } from 'react-router-dom';
import DropdownBtn from '../../items/DropdownBtn/DropdownBtn';
import './Navigation.css';

function Navigation(){

    const profileDropdown = {
        element: <img className="nav-user__image" src="https://via.placeholder.com/50" alt="logo" />,
        primaryLink: "/user-profile",
        list: [
            { link: '/user-profile', name: 'Profile panel' },
            { link: '/gallery', name: 'Gallery' },
            { link: '/inbox', name: 'Inbox' },
            { link: '/settings', name: 'User settings' },
            { link: '/authorization', name: 'Log In' }
        ]
    };

    return(
        <nav className="navigation">
            <div className="nav-flex">
                <Link to="/">
                    <div className="nav-logo">
                            <img src="https://via.placeholder.com/50" alt="logo" />
                            GlassPaw
                    </div>
                </Link>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li><Link to="">Discover</Link></li>
                        <li><Link to="/authorization">News</Link></li>
                    </ul>
                </div>
                <div className="nav-user">
                    <ul>
                        <li><Link to="">Upload</Link></li>
                        <li><Link to="">Settings</Link></li>
                        <li><DropdownBtn btnData={profileDropdown} /></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;