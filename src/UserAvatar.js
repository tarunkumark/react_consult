import { Avatar } from '@mui/material'
import React from 'react'
import './UserAvatar.css'
export default function (props) {
    return (
        <div id='UserCard'>
            <Avatar sx={{ width: 50, height: 50 }}>{props.image}</Avatar>
            <div id = 'userdetails'>
                <div className='text bold'>
                {props.userName}
                </div>
                 <div className='text grey'>
                 {props.designation}
                </div>   
                
            </div>
                
        </div>
    )
}
