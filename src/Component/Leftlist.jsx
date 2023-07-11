import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import FlareIcon from '@mui/icons-material/Flare';
import SportsOutlinedIcon from '@mui/icons-material/SportsOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';

export default function NestedList() {
  const [gamingOpen, setGamingOpen] = React.useState(false);
  const [sportsOpen, setSportsOpen] = React.useState(false);
  const [businessOpen, setBusinessOpen] = React.useState(false);
  const [cryptoOpen, setCryptoOpen] = React.useState(false);
  const [tvOpen, setTvOpen] = React.useState(false);
  const [celebritiesOpen, setCelebritiesOpen] = React.useState(false);


   const popular=()=>{
     
   }

  const handleGamingClick = () => {
    setGamingOpen(!gamingOpen);
  };

  const handleSportsClick = () => {
    setSportsOpen(!sportsOpen);
  };

  const handleBusinessClick = () => {
    setBusinessOpen(!businessOpen);
  };

  const handleCryptoClick = () => {
    setCryptoOpen(!cryptoOpen);
  };

  const handleTvClick = () => {
    setTvOpen(!tvOpen);
  };

  const handleCelebritiesClick = () => {
    setCelebritiesOpen(!celebritiesOpen);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'black' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{ fontSize:"0.8rem", width: '100%', maxWidth: 360, bgcolor: 'black', color: 'white' }}
        >
          FEEDS
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon sx={{ color: 'white' }}>
          <HomeOutlinedIcon sx={{ fontSize: '2rem' }} />
        </ListItemIcon>
        <ListItemText primary="Home" sx={{ color: 'gray', bgcolor: 'black' }} />
      </ListItemButton>

      <ListItemButton onClick={popular}>
        <ListItemIcon sx={{ color: 'white' }}>
          <WhatshotOutlinedIcon sx={{ fontSize: '2rem' }} />
        </ListItemIcon>
        <ListItemText primary="Popular" sx={{ color: 'gray', bgcolor: 'black' }} />
      </ListItemButton>

      <ListSubheader
        component="div"
        id="nested-list-subheader"
        sx={{ fontSize:"0.8rem",width: '100%', maxWidth: 360, bgcolor: 'black', color: 'white' }}
      >
        TOPICS
      </ListSubheader>

      <ListItemButton onClick={handleGamingClick}>
        <ListItemIcon sx={{ color: 'white' }}>
          <SportsEsportsOutlinedIcon  sx={{ fontSize: '2rem' }}/>
        </ListItemIcon>
        <ListItemText primary="Gaming" sx={{ color: 'gray', bgcolor: 'black' }} />
        {gamingOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={gamingOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <FlareIcon/>
            </ListItemIcon>
            <ListItemText primary="Call of Duty" sx={{ color: 'gray', bgcolor: 'black' }} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <FlareIcon/>
            </ListItemIcon>
            <ListItemText primary="PUBG India" sx={{ color: 'gray', bgcolor: 'black' }} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <FlareIcon/>
            </ListItemIcon>
            <ListItemText primary="Minecraft" sx={{ color: 'gray', bgcolor: 'black' }} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <FlareIcon/>
            </ListItemIcon>
            <ListItemText primary="Fortnite" sx={{ color: 'gray', bgcolor: 'black' }} />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleSportsClick}>
        <ListItemIcon sx={{ color: 'white' }}>
          <SportsOutlinedIcon  sx={{ fontSize: '2rem' }}/>
        </ListItemIcon>
        <ListItemText primary="Sports" sx={{ color: 'gray', bgcolor: 'black' }} />
        {sportsOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={sportsOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <FlareIcon/>
            </ListItemIcon>
            <ListItemText primary="Football" sx={{ color: 'gray', bgcolor: 'black' }} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <FlareIcon/>
            </ListItemIcon>
            <ListItemText primary="Basketball" sx={{ color: 'gray', bgcolor: 'black' }} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <FlareIcon/>
            </ListItemIcon>
            <ListItemText primary="Tennis" sx={{ color: 'gray', bgcolor: 'black' }} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <FlareIcon/>
            </ListItemIcon>
            <ListItemText primary="Cricket" sx={{ color: 'gray', bgcolor: 'black' }} />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleBusinessClick}>
        <ListItemIcon sx={{ color: 'white' }}>
          <BusinessOutlinedIcon  sx={{ fontSize: '2rem' }}/>
        </ListItemIcon>
        <ListItemText primary="Business" sx={{ color: 'gray', bgcolor: 'black' }} />
        {businessOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={businessOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <FlareIcon/>
            </ListItemIcon>
            <ListItemText primary="Finance" sx={{ color: 'gray', bgcolor: 'black' }} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <FlareIcon/>
            </ListItemIcon>
            <ListItemText primary="Startups" sx={{ color: 'gray', bgcolor: 'black' }} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <FlareIcon/>
            </ListItemIcon>
            <ListItemText primary="Economy" sx={{ color: 'gray', bgcolor: 'black' }} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <FlareIcon/>
            </ListItemIcon>
            <ListItemText primary="Stock Market" sx={{ color: 'gray', bgcolor: 'black' }} />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleCryptoClick}>
        <ListItemIcon sx={{ color: 'white' }}>
          <MonetizationOnOutlinedIcon  sx={{ fontSize: '2rem' }}/>
        </ListItemIcon>
        <ListItemText primary="Crypto" sx={{ color: 'gray', bgcolor: 'black' }} />
        {cryptoOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={cryptoOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <FlareIcon/>
            </ListItemIcon>
            <ListItemText primary="Bitcoin" sx={{ color: 'gray', bgcolor: 'black' }} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <FlareIcon/>
            </ListItemIcon>
            <ListItemText primary="Ethereum" sx={{ color: 'gray', bgcolor: 'black' }} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <FlareIcon/>
            </ListItemIcon>
            <ListItemText primary="Dogecoin" sx={{ color: 'gray', bgcolor: 'black' }} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <FlareIcon/>
            </ListItemIcon>
            <ListItemText primary="Blockchain" sx={{ color: 'gray', bgcolor: 'black' }} />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleTvClick}>
        <ListItemIcon sx={{ color: 'white' }}>
          <TvOutlinedIcon  sx={{ fontSize: '2rem' }}/>
        </ListItemIcon>
        <ListItemText primary="Television" sx={{ color: 'gray', bgcolor: 'black' }} />
        {tvOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={tvOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <FlareIcon/>
            </ListItemIcon>
            <ListItemText primary="TV Shows" sx={{ color: 'gray', bgcolor: 'black' }} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <FlareIcon/>
            </ListItemIcon>
            <ListItemText primary="Series" sx={{ color: 'gray', bgcolor: 'black' }} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <FlareIcon/>
            </ListItemIcon>
            <ListItemText primary="Documentaries" sx={{ color: 'gray', bgcolor: 'black' }} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <FlareIcon/>
            </ListItemIcon>
            <ListItemText primary="Reality Shows" sx={{ color: 'gray', bgcolor: 'black' }} />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleCelebritiesClick}>
        <ListItemIcon sx={{ color: 'white' }}>
          <EmojiPeopleOutlinedIcon  sx={{ fontSize: '2rem' }}/>
        </ListItemIcon>
        <ListItemText primary="Celebrities" sx={{ color: 'gray', bgcolor: 'black' }} />
        {celebritiesOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={celebritiesOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <FlareIcon/>
            </ListItemIcon>
            <ListItemText primary="Movie Stars" sx={{ color: 'gray', bgcolor: 'black' }} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <FlareIcon/>
            </ListItemIcon>
            <ListItemText primary="Music Artists" sx={{ color: 'gray', bgcolor: 'black' }} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <FlareIcon/>
            </ListItemIcon>
            <ListItemText primary="Athletes" sx={{ color: 'gray', bgcolor: 'black' }} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <FlareIcon/>
            </ListItemIcon>
            <ListItemText primary="Influencers" sx={{ color: 'gray', bgcolor: 'black' }} />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
