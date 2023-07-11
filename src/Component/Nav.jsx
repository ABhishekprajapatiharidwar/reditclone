import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import QrCodeIcon from "@mui/icons-material/QrCode";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import "./Nav.css";
import AppsMenu from "./Appmenu";
import Login from "../login";
import GetApp from "./getApp";
import { UserContext } from "../App";
import LogoutIcon from '@mui/icons-material/Logout';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import votelyLogo from '../assets/votelylogo.png';

export default function Nav(props) {
  const { count, loginshow } = props;
  const [clicklogin, setClickLogin] = useState(false);
  const [clickgetapp, setClickGetApp] = useState(false);
  const { islogin, setislogin, closebtnlogin, setclosebtnlogin ,adminlogin,setadminlogin} =
  useContext(UserContext);
  const adminislogin = localStorage.getItem('admin');



  // Button Click Mapping
  const Btn = (props) => {
    const handleClick = () => {
      if (props.name === "GetApp") {
        setClickGetApp(true);
        console.log("clicked");
      }

      if (props.name === "Admin") {
        localStorage.setItem('admin', 'true');
        setadminlogin((prev) => {
          return !prev;
        });
      }

      if (props.name == "Login") {
        setClickLogin(true);
        console.log("login");
      }
      if(props.name == "Logout")
      {
        console.log("Logout")
        setislogin(false);
        setadminlogin(false);
        localStorage.setItem('Loginstatus', 'false');
        localStorage.setItem('admin', 'false');
      }
    };
            // return button Style and Name
    return (
      <a
        className="LoginBtn"
        style={{ backgroundColor: props.color, color: props.text }}
        href="#"
        onClick={handleClick}
      >
        {props.icon}
        {props.name}
      </a>
    );
  };





  return (
    <>
      <div className="upnavcontainer">

        <div id="logonav">                 {/*Logo Reddit */}
          <a href="">
            <img
              id="logo"
              src={votelyLogo}
              alt="votelylogo"
            />
          </a>
        </div>

        <div id="searchnav">        {/*Search Bar */}
          <input type="text" />
          <a href="">
            <SearchIcon
              id="searchbtn"
              style={{ fontSize: window.innerWidth < 600 ? 37 : 25 }}
            />
          </a>
        </div>


        {/* Button Components All Get App & Login */}
        <div className="appdownload">
          {adminlogin || adminislogin=="true"?
          <Btn name="Admin"  color="white" text="red" icon={<AdminPanelSettingsIcon/>}/>
          :<Btn name="GetApp" color="white" text="black" icon={<QrCodeIcon />} />  }     {/*GetApp Button */}

          <div                                          
            onClick={() => {
              setclosebtnlogin(true);
              
            }}
          >                                                                   {/*Login Button when Not Login*/}
            { !islogin &&                                      
            <Btn
              name="Login"
              color="#493fff"
              text="white"
              icon={<LockOpenIcon />}
              fetchfun={props.isVisiblelogin}
            />
           }                                                                   {/*Logout Button when  Login*/}
            {
              islogin &&
              <Btn
              name="Logout"
              color="red"
              text="white"
              icon={<LogoutIcon/>}
              fetchfun={props.isVisiblelogin}
              
            />
            }
          </div>

        </div>

        <div id="login">                                                     {/*Appmenu Component Show */}
          <AppsMenu onClick={props.isVisiblelogin} />
        </div>

      </div>

  
      {closebtnlogin && <Login />}                                          {/*Login Component show when click login button*/}   
      {clickgetapp ? <GetApp /> : false}                                    {/*Get App Show when Click */}
    </>
  );
}
