import React, { useEffect } from "react";
import { useState } from "react";
// import axios from "axios";
import {Link} from 'react-router-dom';
// import backgroundImage from '../images/backk.svg';
import Navbar from './Navbar';
import Footer from './Footer';
import emailsImage from '../images/welcome1.png';

function Home() {
return (
    <body> <Navbar/>
    {/* <div className='main'style={{backgroundImage: `url(${backgroundImage})`,}}> */}
     <div className='homeee'>
        <div className="homewelcome">
        <h1>Welcome to EcoWat</h1>
<p className='textt'><span>EcoWat</span> is the ultimate platform for buying and selling electricity.</p>
<p className='textt'><span>UniCom</span> Trade energy seamlessly and efficiently.</p>
<p className='textt'> Join a smart and transparent marketplace to optimize your electricity transactions.</p>
<p className='textt'> Take control of your energy consumption today.</p>
<p className='textt'> Start your journey with <span>EcoWat</span> by creating an account</p>
<p className='textt'> or logging in if you already have one.</p>
<div class='flex'>
  <Link to='/Register'>
  <button className='starturj'>Sign up</button>
  </Link>

 
    
</div>

          
        </div>
           <div className="imgcontainer">
           <img src={emailsImage} alt="Illustration" />
         </div> 
    </div>
    <Footer />
    <style>
      {`
body {
  font-family: Arial, sans-serif;
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  overflow-x:hidden;
  background-color:#d5deef;

}

.homeee{
  font-family: Arial, sans-serif;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  // width:100vw;
  // min-height: 100vh;
  // background-image: url("/client/public/background.png");
  // background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;
}
.imgcontainer {
  width:500px;
  height: 400%;
  margin-top: -10px;
  padding: 10px 40px 10px 40px;
  border-style: none;
  margin-right:80px;
  z-index:66;
}
.imgcontainer img {
  width:100%;
  height:100%;
  margin-right:auto;
  margin-left:auto;
}

.uclogo{
  margin-top:-20px;
  width:150px;
  height:150px;
}
.homewelcome {
  margin: auto;
 
}
span{
  font-weight:bold;
  color:#8aaee0;
}
.homewelcome h1{
  font-family: 'Times New Roman', Times, serif;
  color:#395886;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 15px;
  margin-right:auto;
  margin-left:auto;
  text-align:left;
}
.textt{
  text-align:left;
}

.homewelcome .textt{
  font-family: Arial, Helvetica, sans-serif;
  font-size:16px;
  margin-right:auto;
  margin-left:auto;
  color:black;
}
.homewelcome button{
  background-color: #395886;
  color:white;
  font-size: 16px;
  border-radius: 20px;
  padding: 5px 30px 5px;
}
.buttondiv{
  position: absolute;
  top: 80px;
  right: 120px; 
  display: flex;
  flex-direction: row;
}
.buttondiv button {
  margin-left:60px;
  color:#395886;
  border-style: none;
  background-color: transparent;
}
 .download{
  background-color: #395886;
  border-radius: 20px;
  padding:5px 30px 5px;
  color:white;
  margin-bottom:20vh;
}
button:hover{
  text-decoration:underline;
}
.starturj{
  margin-top:40px;
  margin-right:20px;
}

`}
    </style>
  </body>  
  );
}

export default Home;
 