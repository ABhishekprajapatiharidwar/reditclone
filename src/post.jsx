import './post.css';
import PublishTwoToneIcon from '@mui/icons-material/PublishTwoTone';
import GetAppTwoToneIcon from '@mui/icons-material/GetAppTwoTone';
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';
import { useState, useContext } from 'react';
import { UserContext } from './App';

function Reaction(props) {
  return (
    <div className='ReactionLogo' onClick={props.onClick} style={{ cursor: 'pointer' }}>
      <div id="relogo">
        {props.logo}
      </div>
      <div id="count">
        <h4>{props.reaction}</h4>
      </div>
    </div>
  );
}

export default function Post(props) {
  const vote = props.data.votingNumber;
  const [votenum, setvotenum] = useState(vote);
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const [hasDownvoted, setHasDownvoted] = useState(false);
  const { usernamef, setusernamef } = useContext(UserContext);

  function upvote() {
    if (hasUpvoted) {
      alert('You have already upvoted.');
    } else {
      setvotenum((prev) => prev + 1);
      setHasUpvoted(true);
      setHasDownvoted(false);
    }
  }

  function downvote() {
    if (hasDownvoted) {
      alert('You have already downvoted.');
    } else {
      setvotenum((prev) => prev - 1);
      setHasDownvoted(true);
      setHasUpvoted(false);
    }
  }

  return (
    <div className='post'>
      <h3>{props.data.title}</h3>
      <p id="Usernamef">{"/Posted By - @" + (props.data.usernamef ? props.data.usernamef : "admin")}</p>
      <p>{props.data.content}</p>
      <div id="postimg">
        <img src={props.data.imageUrl} alt="Post Image" />
      </div>

      <div className='reaction'>
        <Reaction
          logo={<PublishTwoToneIcon style={{ fontSize: '1.8rem', padding: '10px', color: hasUpvoted ? 'green' : 'white' }} />}
          reaction={votenum}
          onClick={upvote}
        />
        <Reaction
          logo={<GetAppTwoToneIcon style={{ fontSize: '1.8rem', padding: '10px', color: hasDownvoted ? 'red' : 'white' }} />}
          onClick={downvote}
        />
        <Reaction
          logo={<ChatBubbleTwoToneIcon style={{ fontSize: '1.8rem', padding: '10px' }} />}
          reaction={props.data.commentNumber}
        />
      </div>
    </div>
  );
}
