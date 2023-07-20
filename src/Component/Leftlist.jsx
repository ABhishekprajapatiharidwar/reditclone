import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BiotechIcon from "@mui/icons-material/Biotech";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsOutlinedIcon from "@mui/icons-material/SportsOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined";
import { useNavigate } from "react-router-dom";
import TagIcon from "@mui/icons-material/Tag";
import { UserContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
import jsonData from "./post.json";

export default function NestedList() {
  const [gamingOpen, setGamingOpen] = React.useState(false);
  const [sportsOpen, setSportsOpen] = React.useState(false);
  const [businessOpen, setBusinessOpen] = React.useState(false);
  const [cryptoOpen, setCryptoOpen] = React.useState(false);
  const [tvOpen, setTvOpen] = React.useState(false);
  const [celebritiesOpen, setCelebritiesOpen] = React.useState(false);
  const nevigate = useNavigate();
  const {
    islogin,
    setislogin,
    closebtnlogin,
    setclosebtnlogin,
    usernamef,
    setusernamef,
    adminlogin,
    setadminlogin,
    categery,
    setcategery,
    filterdata,
    setfilterdata,
  } = useContext(UserContext);

  React.useEffect(() => {
    const filterddta = jsonData.filter((data) => {
      return data?.category.toLowerCase() == categery?.toLowerCase();
      // console.log(data,categery);
    });
    setfilterdata(filterddta);
    console.log(filterddta);
    handlePostClick();
  }, [categery]);

  function handlePostClick() {
    // Perform necessary post-click actions here

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const popular = () => {
    setcategery("Popular");
  };

  const handleHome = () => {
    setcategery("Home");
  };

  const handleGamingClick = () => {
    setGamingOpen(!gamingOpen);
    setcategery("Gaming");
  };

  const handleSportsClick = () => {
    setSportsOpen(!sportsOpen);
    setcategery("Sports");
  };

  const handleBusinessClick = () => {
    setBusinessOpen(!businessOpen);
    setcategery("Business");
  };

  const handleCryptoClick = () => {
    setCryptoOpen(!cryptoOpen);
    setcategery("Crypto");
  };

  const handleTvClick = () => {
    setTvOpen(!tvOpen);
    setcategery("Technology");
  };

  const handleCelebritiesClick = () => {
    setCelebritiesOpen(!celebritiesOpen);
    setcategery("politics");
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "black" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{
            fontSize: "0.8rem",
            width: "100%",
            maxWidth: 360,
            bgcolor: "black",
            color: "white",
          }}
        >
          FEEDS
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleHome}>
        <ListItemIcon sx={{ color: "white" }}>
          <HomeOutlinedIcon sx={{ fontSize: "2rem" }} />
        </ListItemIcon>
        <ListItemText primary="Home" sx={{ color: "gray", bgcolor: "black" }} />
      </ListItemButton>

      <ListItemButton onClick={popular}>
        <ListItemIcon sx={{ color: "white" }}>
          <WhatshotOutlinedIcon sx={{ fontSize: "2rem" }} />
        </ListItemIcon>
        <ListItemText
          primary="Popular"
          sx={{ color: "gray", bgcolor: "black" }}
        />
      </ListItemButton>

      <ListSubheader
        component="div"
        id="nested-list-subheader"
        sx={{
          fontSize: "0.8rem",
          width: "100%",
          maxWidth: 360,
          bgcolor: "black",
          color: "white",
        }}
      >
        TOPICS
      </ListSubheader>

      <ListItemButton onClick={handleGamingClick}>
        <ListItemIcon sx={{ color: "white" }}>
          <SportsEsportsOutlinedIcon sx={{ fontSize: "2rem" }} />
        </ListItemIcon>
        <ListItemText
          primary="Gaming"
          sx={{ color: "gray", bgcolor: "black" }}
        />
        {gamingOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={gamingOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: "white" }}>
              <TagIcon />
            </ListItemIcon>
            <ListItemText
              primary="Call of Duty"
              sx={{ color: "gray", bgcolor: "black" }}
            />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: "white" }}>
              <TagIcon />
            </ListItemIcon>
            <ListItemText
              primary="PUBG India"
              sx={{ color: "gray", bgcolor: "black" }}
            />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: "white" }}>
              <TagIcon />
            </ListItemIcon>
            <ListItemText
              primary="Minecraft"
              sx={{ color: "gray", bgcolor: "black" }}
            />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: "white" }}>
              <TagIcon />
            </ListItemIcon>
            <ListItemText
              primary="Fortnite"
              sx={{ color: "gray", bgcolor: "black" }}
            />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleSportsClick}>
        <ListItemIcon sx={{ color: "white" }}>
          <SportsOutlinedIcon sx={{ fontSize: "2rem" }} />
        </ListItemIcon>
        <ListItemText
          primary="Sports"
          sx={{ color: "gray", bgcolor: "black" }}
        />
        {sportsOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={sportsOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: "white" }}>
              <TagIcon />
            </ListItemIcon>
            <ListItemText
              primary="Football"
              sx={{ color: "gray", bgcolor: "black" }}
            />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: "white" }}>
              <TagIcon />
            </ListItemIcon>
            <ListItemText
              primary="Basketball"
              sx={{ color: "gray", bgcolor: "black" }}
            />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: "white" }}>
              <TagIcon />
            </ListItemIcon>
            <ListItemText
              primary="Tennis"
              sx={{ color: "gray", bgcolor: "black" }}
            />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: "white" }}>
              <TagIcon />
            </ListItemIcon>
            <ListItemText
              primary="Cricket"
              sx={{ color: "gray", bgcolor: "black" }}
            />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleBusinessClick}>
        <ListItemIcon sx={{ color: "white" }}>
          <BusinessOutlinedIcon sx={{ fontSize: "2rem" }} />
        </ListItemIcon>
        <ListItemText
          primary="Business"
          sx={{ color: "gray", bgcolor: "black" }}
        />
        {businessOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={businessOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: "white" }}>
              <TagIcon />
            </ListItemIcon>
            <ListItemText
              primary="Finance"
              sx={{ color: "gray", bgcolor: "black" }}
            />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: "white" }}>
              <TagIcon />
            </ListItemIcon>
            <ListItemText
              primary="Startups"
              sx={{ color: "gray", bgcolor: "black" }}
            />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: "white" }}>
              <TagIcon />
            </ListItemIcon>
            <ListItemText
              primary="Economy"
              sx={{ color: "gray", bgcolor: "black" }}
            />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: "white" }}>
              <TagIcon />
            </ListItemIcon>
            <ListItemText
              primary="Stock Market"
              sx={{ color: "gray", bgcolor: "black" }}
            />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleCryptoClick}>
        <ListItemIcon sx={{ color: "white" }}>
          <MonetizationOnOutlinedIcon sx={{ fontSize: "2rem" }} />
        </ListItemIcon>
        <ListItemText
          primary="Crypto"
          sx={{ color: "gray", bgcolor: "black" }}
        />
        {cryptoOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={cryptoOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: "white" }}>
              <TagIcon />
            </ListItemIcon>
            <ListItemText
              primary="Bitcoin"
              sx={{ color: "gray", bgcolor: "black" }}
            />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: "white" }}>
              <TagIcon />
            </ListItemIcon>
            <ListItemText
              primary="Ethereum"
              sx={{ color: "gray", bgcolor: "black" }}
            />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: "white" }}>
              <TagIcon />
            </ListItemIcon>
            <ListItemText
              primary="Dogecoin"
              sx={{ color: "gray", bgcolor: "black" }}
            />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: "white" }}>
              <TagIcon />
            </ListItemIcon>
            <ListItemText
              primary="Blockchain"
              sx={{ color: "gray", bgcolor: "black" }}
            />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleTvClick}>
        <ListItemIcon sx={{ color: "white" }}>
          <BiotechIcon sx={{ fontSize: "2rem" }} />
        </ListItemIcon>
        <ListItemText
          primary="Technology"
          sx={{ color: "gray", bgcolor: "black" }}
        />
        {tvOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={tvOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: "white" }}>
              <TagIcon />
            </ListItemIcon>
            <ListItemText
              primary="Biotechnology"
              sx={{ color: "gray", bgcolor: "black" }}
            />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: "white" }}>
              <TagIcon />
            </ListItemIcon>
            <ListItemText
              primary="Drones"
              sx={{ color: "gray", bgcolor: "black" }}
            />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: "white" }}>
              <TagIcon />
            </ListItemIcon>
            <ListItemText
              primary="Renewable Energy"
              sx={{ color: "gray", bgcolor: "black" }}
            />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: "white" }}>
              <TagIcon />
            </ListItemIcon>
            <ListItemText
              primary="Nanotechnology"
              sx={{ color: "gray", bgcolor: "black" }}
            />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleCelebritiesClick}>
        <ListItemIcon sx={{ color: "white" }}>
          <EmojiPeopleOutlinedIcon sx={{ fontSize: "2rem" }} />
        </ListItemIcon>
        <ListItemText
          primary="Politics"
          sx={{ color: "gray", bgcolor: "black" }}
        />
        {celebritiesOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={celebritiesOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: "white" }}>
              <TagIcon />
            </ListItemIcon>
            <ListItemText
              primary="Democracy"
              sx={{ color: "gray", bgcolor: "black" }}
            />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: "white" }}>
              <TagIcon />
            </ListItemIcon>
            <ListItemText
              primary="Elections"
              sx={{ color: "gray", bgcolor: "black" }}
            />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: "white" }}>
              <TagIcon />
            </ListItemIcon>
            <ListItemText
              primary="Diplomacy"
              sx={{ color: "gray", bgcolor: "black" }}
            />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: "white" }}>
              <TagIcon />
            </ListItemIcon>
            <ListItemText
              primary="Human rights"
              sx={{ color: "gray", bgcolor: "black" }}
            />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
