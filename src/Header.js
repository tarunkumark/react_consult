import './Header.css'
import * as React from 'react';
import { useEffect, useRef, useState } from "react"
import Switch from '@mui/material/Switch';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import UserAvatar from './UserAvatar';
export default function Header() {
    let toggle = false;
  

    window.onload = ()=>{
        if(window.innerWidth<600){
        document.getElementById('advanced').innerHTML='BASIC';
    }
}
    
    const changeColor = () => {
        toggle = !toggle;
        const advanced = document.getElementById('advanced');
        if(window.innerWidth>=600){
            const basic = document.getElementById('basic');
            if(toggle){
                basic.style='color: #686868';
                advanced.style='color: black';
            }
            else{
                advanced.style ='color: #686868';
                basic.style ='color: black';
            }
        }
        else{
            if(!toggle){
                advanced.style='color: black';
                advanced.innerHTML='BASIC';
            }
            else{
                advanced.style ='color: #black';
                advanced.innerHTML='ADVANCED'
            }
        }
        
    }
    
    return (
        <div className="header" >
       <a className = "button " id = 'header-desktop'><HomeIcon fontSize="large"></HomeIcon></a>
       <div id='header-desktop'><UserAvatar userName='User Name' designation='User Designation' /></div>
       <div className='searchcontainer'> 
            <input id='searchbar' type='search' placeholder='SET A 100% PREREQ FOR GOOD MATCH'></input>
        </div>
       <div className="switch" >
       <label for='switch1' id='basic'>BASIC</label>
       <Switch name = 'switch1' onChange={changeColor}>

       </Switch>
       <label for='switch1' id='advanced'>ADVANCED</label>
  </div>
       <div className = "button" id="Menu" ><MenuIcon fontSize='large'></MenuIcon></div>
     
       <div id='menubar'>
       <div><UserAvatar userName='User Name' designation='User Designation' /></div>
       
       </div>
       
      </div>
      
    )
}
