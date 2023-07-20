import "./signup.css";
import "./login.css";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import Login from "./login";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup(props) {
  const [succsesssign, setsuccsessign] = useState(false);
  const [showsignin, setshowlogin] = useState(false);
  const [username, setusername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setemail] = useState(null);
  const [reenterpass, setreenterpass] = useState(null);
  const [firstname, setfirst] = useState(null);
  const [secondname, setsecond] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isuser, setisuser] = useState();

  useEffect(() => {
    const checkuser = async () => {
      const response = await fetch(
        "https://redittclone-default-rtdb.firebaseio.com/users.json"
      );
      const data = await response.json();
      const newdata = Object.values(data);
      setisuser(data);
    };
    checkuser();
  }, []);

  function showlogin(event) {
    setshowlogin(true);
    event.preventDefault();
  }

  function chnageusername(event) {
    setusername(event.target.value);
  }

  function chnageemail(event) {
    const emailValue = event.target.value;
    setemail(emailValue);
  }

  function changepass(event) {
    setPassword(event.target.value);
  }

  function reenterchange(event) {
    setreenterpass(event.target.value);
  }

  function chnagefirst(event) {
    setfirst(event.target.value);
  }

  function chnagesecond(event) {
    setsecond(event.target.value);
  }

  async function Signupdata() {
    setFormSubmitted(true);

    if (
      username === null ||
      username === "" ||
      email === null ||
      email === "" ||
      password === null ||
      password === ""
    ) {
      toast.error("Fields cannot be empty");
    }
    if (!email.includes("@" && ".")) {
      toast.error("Invalid email address");
    }

    if (
      !password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
      )
    ) {
      toast.error(
        "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special symbol"
      );
    }

    if (password !== reenterpass) {
      toast.error("Password and Re-Enter Password do not match");
    }
    if (username === "admin") {
      toast.error(
        "You can't choose the name 'admin' because it implies administrative access."
      );
    } else if (isuser) {
      const Isuser = Object.values(isuser);
      console.log(Isuser);
      const matchedUser = Isuser.find((user) => user.username === username);

      // when user not found in databse
      if (matchedUser) {
        toast.error("Username already exists. Please choose another name.");
      } else {
        toast.success("Signup successful");
        console.log("Sucsess");
        // Set a value in local storage
        localStorage.setItem(username, password);
        const responsesignup = await fetch(
          "https://redittclone-default-rtdb.firebaseio.com/users.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: username,
              password: password,
              email: email,
              firstname: firstname,
              secondname: secondname,
            }),
          }
        );
        setsuccsessign(true);

        setusername("");
        setPassword("");
        setemail("");
        setreenterpass("");
        setsecond("");
        setfirst("");

        if (response.ok) {
          console.log("Post request successful");
        } else {
          console.error("Error:", response.status);
        }
      }
    }
  }

  return (
    <>
      <div className="containerauth">
        <div className="authentication">
          <div className="closingbtn">
            <a href="/" className="closebtn">
              <CloseIcon style={{ color: "white" }} />
            </a>
          </div>
          <h1>Sign Up</h1>
          <p id="terms">
            By continuing, you are setting up a Votely account and agree to our{" "}
            <a href="">User Agreement</a> and <a href="">Privacy Policy.</a>
          </p>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "200px", color: "whitesmoke" },
            }}
            noValidate
            autoComplete="off"
          >
            {/* First Name */}
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              InputLabelProps={{
                style: { color: "gray" },
              }}
              value={firstname}
              onChange={chnagefirst}
              inputProps={{
                style: { color: "white" },
              }}
            />

            {/* Second Name */}
            <TextField
              id="outlined-basic"
              label="Second Name"
              variant="outlined"
              InputLabelProps={{
                style: { color: "gray" },
              }}
              value={secondname}
              onChange={chnagesecond}
              inputProps={{
                style: { color: "white" },
              }}
            />

            {/* username */}
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              required
              InputLabelProps={{
                style: { color: "gray" },
              }}
              onChange={chnageusername}
              value={username}
              inputProps={{
                style: { color: "white" },
              }}
            />

            {/* email */}
            <TextField
              type="email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              required
              InputLabelProps={{
                style: { color: "gray" },
              }}
              value={email}
              onChange={chnageemail}
              inputProps={{
                style: { color: "white" },
              }}
            />

            {/* password */}
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              required
              InputLabelProps={{
                style: { color: "gray" },
              }}
              value={password}
              onChange={changepass}
              inputProps={{
                style: { color: "white" },
                type: "password",
              }}
            />

            {/* reenter pass */}
            <TextField
              id="outlined-basic"
              label="Re-Enter Password"
              variant="outlined"
              required
              InputLabelProps={{
                style: { color: "gray" },
              }}
              value={reenterpass}
              onChange={reenterchange}
              inputProps={{
                style: { color: "white" },
                type: "password",
              }}
            />
          </Box>

          <div className="signupbtn">
            <button id="signupbtn" onClick={Signupdata}>
              Sign Up
            </button>
          </div>
          {props.join ? (
            <p></p>
          ) : (
            <p>
              Already a VoteLers?{" "}
              <a href="" id="alreadyac" onClick={showlogin}>
                Login In
              </a>
            </p>
          )}
        </div>
      </div>
      {showsignin && <Login />}
      {succsesssign && <Login />}
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
}
