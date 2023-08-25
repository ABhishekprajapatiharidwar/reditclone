import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import Apps from "@mui/icons-material/Apps";
import Login from "./login";
import { useContext } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";


export default function AppsMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const {
    islogin,
    setislogin,
    closebtnlogin,
    setclosebtnlogin,
    usernamef,
    setusernamef,
  } = useContext(UserContext);
  var usernamelocally = localStorage.getItem("username");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <IconButton
        id="apps-menu-demo"
        aria-label="Applications"
        aria-controls={open ? "apps-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="plain"
        color="neutral"
        onClick={handleClick}
        sx={{ borderRadius: 20, color: "white" }}
      >
        <Apps />
      </IconButton>
      <Menu
        id="apps-menu"
        variant="solid"
        invertedColors
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        aria-labelledby="apps-menu-demo"
        sx={{
          "--List-padding": "0.5rem",
          "--ListItemDecorator-size": "3rem",
          display: "grid",
          gridTemplateColumns: "repeat(3, 100px)",
          gridAutoRows: "100px",
          gap: 1,
          backgroundColor: "black",
          border: "0.5px solid #FF64B4",
        }}
      >
        {/* for User Whose login Avtar */}
        <MenuItem
          orientation="vertical"
          onClick={handleClose}
          sx={{ gridColumn: "1 / span 3" }}
        >
          <ListItemDecorator>
          < Link to="/working">
            <Avatar 
              sx={{
                backgroundImage:
                  "linear-gradient(to right, #7068F4, #FF64B4, #FFD94A);",
              }}
            >
              {islogin
                ? usernamef.slice(0, 1) || usernamelocally.slice(0, 1)
                : "U"}
            </Avatar>
            </Link>
          </ListItemDecorator>
          {islogin ? usernamef || usernamelocally : "User"}
        </MenuItem>

        <MenuItem orientation="vertical" onClick={handleClose}>
        <Link Link to="/working">
          <ListItemDecorator>
            <Avatar>M</Avatar>
          </ListItemDecorator>
          </Link>
          More
        </MenuItem>
        <MenuItem orientation="vertical" onClick={handleClose}>
        <Link Link to="/working">
          <ListItemDecorator
            onClick={() => {
              return <Login />;
            }}
          >
            <Avatar>L</Avatar>
          </ListItemDecorator>
          </Link>
          Login
        </MenuItem>
        <MenuItem orientation="vertical" onClick={handleClose}>
        <Link Link to="/working">
          <ListItemDecorator>
            <Avatar>S</Avatar>
          </ListItemDecorator>
          </Link>
          SignUp
        </MenuItem>
      </Menu>
    </Box>
  );
}
