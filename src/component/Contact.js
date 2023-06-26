import { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';

const Contact = () => { 
    return (
      
      <div class="profileText">
            <link rel="stylesheet" href="style.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" 
    integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" />

            <div class="pic">
                <img src="athalia.jpeg"/>
            </div>
            <h2>Athalia Rupilu<br/><span>Data Analyst</span></h2>

            <div class="contactInfo">
              <h3 class="title">Contact Info</h3>
              <ul>
                  <li>
                      <span class="icon"><i class="fa fa-phone" aria-hidden="true"></i></span>
                      <span class="text">+62 8969 7875 722</span>
                  </li>
                  <li>
                      
                      <span class="icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                      <span class="text">athakawaii@gmail.com</span>
                  </li>
                  <li>
                      <span class="icon"><i class="fa fa-youtube" aria-hidden="true"></i></span>
                      
                      <a href="https://www.youtube.com/channel/UC3ZPmDJB_LBFarUAuZ8vUqw"><span class="text">Athalia Rupilu</span></a>
                  </li>
                  <li>
                      <span class="icon"><i class="fa fa-instagram" aria-hidden="true"></i></span>
                      <a href="https://www.instagram.com/"><span class="text">atha_kawaii</span></a>
                  </li>
                  <li>
                      <span class="icon"><i class="fa fa-twitter" aria-hidden="true"></i></span>
                      <a href="https://twitter.com/home"><span class="text">Athalia Rupilu</span></a>
                  </li>
                  <li>
                      <span class="icon"><i class="fa fa-map-marker" aria-hidden="true"/> <i></i> </span>
                      <span class="text">Sulut,Airmadidi,Indonesia</span>
                  </li>
              </ul>
              
          </div>
        

          

      </div>
      

      
      
  )
  };
  
  export default Contact;