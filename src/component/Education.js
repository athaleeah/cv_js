import { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';

const Education = () => { 
    return (
      
      <div class="profileText">
            <link rel="stylesheet" href="style.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" 
    integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" />
    <div class="pic">
                <img src="athalia.jpeg"/>
            </div>
            <h2>Athalia Rupilu<br/></h2>

              <h3 class="title">Education</h3>
              <ul>
                  <li>
                     <h5>2021 - now</h5>
                     <h4>Computer Science Major Informatics</h4>
                     <h4>Universitas Klabat</h4>
                  </li>
                  <li>
                      <h5>2017 - 2020</h5>
                      <h4>Major Exacta</h4>
                      <h4>SMAS UNKLAB Airmadidi</h4>
                   </li>
                   <li>
                      <h5>2015 - 2017</h5>
                      <h4>SMP</h4>
                      <h4>SMP Advent UNKLAB Airmadidi</h4>
                   </li>
                   <li>
                      <h5>2009 - 2015</h5>
                      <h4>Sekolah Dasar</h4>
                      <h4>SD Advent UNKLAB Airmadidi</h4>
                   </li>
              </ul>
         
              <h3 class="title">Languages</h3>
              <ul>
                  <li>
                      <span class="text">Indonesia ⭐⭐⭐⭐⭐</span>
                  </li>
                  <li>
                      <span class="text">Japan⭐⭐</span>
                  </li>
                  <li>
                      <span class="text">English ⭐⭐⭐⭐</span>
                  </li>
               </ul>
               
          </div>    
      
      
  )
  };
  
  export default Education;