import './Header.css';
import logoDefault from '../assets/images/logo-ubiquiti-default.svg';

const Header = () => {
    return (
        <div id="header">
            <span id="headerLeft">
                <img id="headerLogo" src={logoDefault} alt="Ubiquiti Logo" />
                <span id="headerTitle">Devices</span>
            </span>
            <span id="headerDeveloper">Ian McMahon</span>
        </div>
    );
};

export default Header;