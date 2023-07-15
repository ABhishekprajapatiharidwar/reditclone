import { useState } from 'react'
import '../login.css'
import CloseIcon from '@mui/icons-material/Close';
import { colors } from '@mui/joy';
import AppleIcon from '@mui/icons-material/Apple';

export default function GetApp()
{
   

 
    return(
        <>
        <div className='containerauth' >
        <div className="authentication">
            <div className='closingbtn'> 
            <a href="/" className="closebtn"><CloseIcon  style={{ color: 'white' }} /></a>
            </div>
        <h1> Get the Votely app</h1>
        <div className='qrdetails'>
        <h4> Scan this QR code to</h4>
        <h4>download the app now</h4>
        <div id="qr">
        </div>
        <p>Or Check it out in the app stores</p>
        <AppleIcon style={{fontSize:"50px"}}/>
        </div>
        </div>
        </div>
        </>
    )
}