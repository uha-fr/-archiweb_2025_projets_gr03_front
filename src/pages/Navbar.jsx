
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
// import logo from '../images/Emails-amico.svg';

import uclogo from '../images/logo1.png';

const Navbar = () => {
    const location = useLocation(); 

    return (
        <div>
            <div>
            <nav>
            <div className='flex'>
          <img src={uclogo} alt="Illustration" className="uclogo" />

          <p className="uc">EcoWat</p></div>
                
                <ul>
                <li>
                    <Link to="/Home" className={location.pathname === '/Home' ? 'active-link' : ''}>
                    Home
                    </Link>
                </li>
                <li>
                    <Link to="/ContactUs" className={location.pathname === '/ContactUs' ? 'active-link' : ''}>
                    Contact Us
                    </Link>
                </li>
                <li>
                    <Link to="/AboutUss" className={location.pathname === '/AboutUss' ? 'active-link' : ''}>
                    About Us
                    </Link>
                </li>
                <li>
                    <Link to="/help" className={location.pathname === '/help' ? 'active-link' : ''}>
                    Help
                    </Link>
                </li>
                </ul>
            
            </nav>
            </div>
            <style>
         {`

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color: transparent;
        color: white;
        padding: 10px 80px; 
        flex-wrap: wrap;
    }

    .uc {
        margin-top:25px;
        font-weight: bold;
        color: #628ecb;
        margin-left:-30px;
        font-size:30px;
    }
    .uclogo {
        margin-top: 0px; 
        max-width: 70px;
        max-height: 70px;
        width: auto;
        height: auto;
        left: 0;
        right: 0;
        top: -60;
        margin-left: 0px;
        margin-right: 20px;
    }
       
    ul {
        list-style-type: none;
        display: flex;
        gap: 100px; /* Ajustez l'espace entre les éléments de la liste */
        flex-wrap: wrap;
    }

    li {
        font-size: 18px;
    }

    a {
        text-decoration: none;
        color:  #395886;
        transition: color 0.3s ease;
        font-weight:normal;
    }

    a:hover {
        color: #395886;
        
    }
    .active-link {
        border-bottom: 2px solid #395886;
        font-weight: bold;
        color: #395886;
    }

    h1{
        font-weight:bold;
        color:#628ecb;
        margin-left:-32vw;
        font-size:30px;
    }

    @media screen and (max-width: 768px) {
        font-size: 50px;
        nav {
        flex-direction: column;
        align-items: flex-start; 
        }

        .logo img {
        margin-top: 0;
        margin-left: -100px;
        }

        h1 {
        margin-left: 0;
        margin-top: 10px;
        }
    }

            `}
            </style>
        </div>
        );
};

export default Navbar;
