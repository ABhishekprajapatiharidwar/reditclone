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

export default function Nav(props) {
  const { count, loginshow } = props;
  const [clicklogin, setClickLogin] = useState(false);
  const [clickgetapp, setClickGetApp] = useState(false);
  const { islogin, setislogin, closebtnlogin, setclosebtnlogin } =
  useContext(UserContext);


  // Button Click Mapping
  const Btn = (props) => {
    const handleClick = () => {
      if (props.name === "GetApp") {
        setClickGetApp(true);
        console.log("clicked");
      }
      if (props.name == "Login") {
        setClickLogin(true);
        console.log("login");
      }
      if(props.name == "Logout")
      {
        console.log("Logout")
        setislogin(false);
      
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
              src="https://1000logos.net/wp-content/uploads/2017/05/Reddit-logo.png"
              alt="logo"
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
          <Btn name="GetApp" color="white" text="black" icon={<QrCodeIcon />} />       {/*GetApp Button */}


          <div                                          
            onClick={() => {
              setclosebtnlogin(true);
            }}
          >                                                                   {/*Login Button when Not Login*/}
            { !islogin &&                                      
            <Btn
              name="Login"
              color="#ff4500"
              text="white"
              icon={<LockOpenIcon />}
              fetchfun={props.isVisiblelogin}
            />
           }                                                                   {/*Logout Button when  Login*/}
            {
              islogin &&
              <Btn
              name="Logout"
              color="#ff4500"
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
