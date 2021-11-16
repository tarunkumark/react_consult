import './Header.css'
import * as React from 'react';
import Switch from '@mui/material/Switch';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import UserAvatar from './UserAvatar';
export default function Header() {
    let toggle = false;
    const changeColor = () => {
        toggle = !toggle;
        const basic = document.getElementById('basic');
        const advanced = document.getElementById('advanced');
        if(toggle){
            basic.style='color: #686868';
            advanced.style='color: black';
        }
        else{
            advanced.style ='color: #686868';
            basic.style ='color: black';
        }
    }
    return (
        <header className="header">
       <a className = "button "><HomeIcon fontSize="large"></HomeIcon></a>
      <UserAvatar userName='User Name' designation='User Designation'/>
       <div id='searchcontainer'> 
            <input id='searchbar' type='search' placeholder='SET A 100% PREREQ FOR GOOD MATCH'></input>
        </div>
       <div class="switch" >
       <label for='switch1' id='basic'>BASIC</label>
       <Switch name = 'switch1' onChange={changeColor}>

       </Switch>
       <label for='switch1' id='advanced'>ADVANCED</label>
  </div>
       <a className = "button"><MenuIcon fontSize='large' ></MenuIcon></a>
      </header>
    )
}
