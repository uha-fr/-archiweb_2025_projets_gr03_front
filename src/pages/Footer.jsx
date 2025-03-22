import React from 'react';

import uclogo from '../images/logo1.png';

const Footer = () => {
  return (

    <footer className="blue-footer">
      <div className='socials'>
        <div className='CompWiz'>
          <div className='title'>
            {/* <img src='cwlogo.png'className='logo'></img> */}
            <img src={uclogo} alt="Illustration" className="logo" />

            <p>EcoWat</p>  </div>
          <div className='reseaux'>
            <div className='reseaux'>
              <a href="https://www.instagram.com/computerwizards19?igsh=MWJyMXJmMDU2b3lzcQ==">
                <svg xmlns="http://www.w3.org/2000/svg" className="reseau" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M16.5 7.5l0 .01" />
                </svg>
              </a>

              <a href="https://www.linkedin.com/company/computerwizard-s/">
                <svg xmlns="http://www.w3.org/2000/svg" className="reseau" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                  <path d="M8 11l0 5" />
                  <path d="M8 8l0 .01" />
                  <path d="M12 16l0 -5" />
                  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                </svg>
              </a>

              <a href="https://web.facebook.com/profile.php?id=61554257034270">
                <svg xmlns="http://www.w3.org/2000/svg" className="reseau" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
              </a>
            </div>

          </div>
        </div>

        {/* <div className='UnCom'>
        <div className='title'><img src='uclogo.png'className='logo'></img><p>UniCom</p> </div> 
                <div className='reseaux'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="reseau" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M16.5 7.5l0 .01" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="reseau" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                        <path d="M8 11l0 5" />
                        <path d="M8 8l0 .01" />
                        <path d="M12 16l0 -5" />
                        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="reseau" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                    </svg>
                </div>
            </div>*/}
      </div>

      <div className='contact-us'>
        <h3>Contact us:</h3>
        <p>EcoWat@uni.com</p>
        <p>EcoWat@uni.com</p>
      </div>
      <div className='right'>
        <p>By EcoWat</p>
        <p>UHA University</p>
        <p> ©2025 EcoWat</p>
      </div>

      <style>
        {`
         .blue-footer {
            background-color: #8aaee0;
            color: white;
            text-align: center;
            width: 100%;
            padding: 2%;
            left:0;
            right:0;
            bottom:0;
            display:flex; 
            align-items:center;
            padding-bottom:2%;
            border-radius:10px;
            height:30vh;
          }
          .socials{
              width:40vw;
              border-right: 2px solid #628ecb;
               padding-right: 15px;
              // height:30vh;
        
          }
          .reseaux{
            display:flex; 
            align-items:center;
            right:auto;
           left:auto;
          }
          .contact-us{
            border-right: 2px solid #628ecb;
            width:30vw;
            padding-left:3vw;
            text-align:left;
          }
          .contact-us h3{
            color:#395886;
            font-weight:bolder;
          }
          .title {
            display: flex;
            align-items: center;
            margin-bottom:2vh;
        
          }
          .title img{
            width:3.5vw;
            height:5.5vh;
            border-radius:100%;
          }
          .title p{
            margin-left:1vw;
            font-weight:bold;
          }
          .right{
            width:30vw;
            padding-left:3vw;
            text-align:left;
          }
          .reseau{
            margin-right:1.2vw;
          }
          .CompWiz{
            margin-bottom:2vh;
          }
          
        
                `}
      </style>

    </footer>
  );
};

export default Footer;
