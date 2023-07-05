import React, { useState, useContext } from "react";
import "./login.css";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Signup from "./Signup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "./App";
import { ConstructionOutlined } from "@mui/icons-material";

export default function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [wrongpass, setwrongpass] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isloginsuccsefull, setisloginsuccsess] = useState(false);
  const { islogin, setislogin, closebtnlogin, setclosebtnlogin,usernamef,setusernamef } =
    useContext(UserContext);

  // const userContext = useContext(UserContext); // Accessing the context value

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setusernamef(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const LoginSubmit = () => {
    const storedPass = localStorage.getItem(username);
    if (storedPass === password) {
      toast.success("Successful login");
      // onLoginSuccess(true);
      setisloginsuccsess(true);
      setislogin(true);
      setclosebtnlogin(false);
      console.log("first");
    } else {
      toast.error("Incorrect username or password. Please try again.");
    }
  };

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  return (
    <>
      {closebtnlogin && (
        <div className="containerauth">
          <div className="authentication">
            <div className="closingbtn">
              <p
                onClick={() => {
                  setclosebtnlogin(false);
                }}
                className="closebtn"
              >
                <CloseIcon style={{ color: "white" }} />
              </p>
            </div>

            <h1>Login</h1>
            <p>
              By continuing, you are setting up a Reddit account and agree to
              our User Agreement and Privacy Policy.
            </p>
            <div className="loginsection">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "100%",
                    color: "whitesmoke",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  value={username}
                  label="Username"
                  variant="standard"
                  onChange={handleUsernameChange}
                  InputLabelProps={{
                    style: { color: "gray" },
                  }}
                  inputProps={{
                    style: { color: "yellow" },
                  }}
                />
                <br />

                <TextField
                  id="standard-basic"
                  label="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  variant="standard"
                  type={showPassword ? "text" : "password"}
                  InputLabelProps={{
                    style: { color: "gray" },
                  }}
                  InputProps={{
                    style: { color: "white" },
                    endAdornment: (
                      <InputAdornment position="end">
                        {showPassword ? (
                          <VisibilityIcon
                            style={{ color: "white" }}
                            onClick={togglePasswordVisibility}
                          />
                        ) : (
                          <VisibilityOffIcon
                            style={{ color: "white" }}
                            onClick={togglePasswordVisibility}
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />

                <button onClick={LoginSubmit} id="loginbtn">
                  Login
                </button>
                <div className="foregtuser">
                  <a href="#">Forget Password</a>
                  <a href="#" onClick={handleSignupClick}>
                    New to Reddit?
                  </a>
                </div>
              </Box>
            </div>
          </div>
        </div>
      )}
      {showSignup && <Signup />}
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
}
