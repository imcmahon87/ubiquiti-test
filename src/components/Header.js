import './Header.css';
import logoDefault from '../assets/images/logo-ubiquiti-default.svg';

const Header = () => {
    return (
        <div id="header">
            <div id="header">
                <span>
                    <img src={logoDefault} alt="Ubiquiti Logo" />
                    <span id="headerTitle">Devices</span>
                </span>
                <span id="headerDeveloper">Ian McMahon</span>
            </div>
        </div>
    );
};

export default Header;