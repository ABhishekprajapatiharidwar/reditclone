import "./post.css";
import PublishTwoToneIcon from "@mui/icons-material/PublishTwoTone";
import GetAppTwoToneIcon from "@mui/icons-material/GetAppTwoTone";
import ChatBubbleTwoToneIcon from "@mui/icons-material/ChatBubbleTwoTone";
import { useState, useContext } from "react";
import { UserContext } from "../App";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import toast, { Toaster } from "react-hot-toast";

var usernamelocally = localStorage.getItem("username");
function Reaction(props) {
  return (
    <div
      className="ReactionLogo"
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
    >
      <div id="relogo">{props.logo}</div>
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
      toast.error("You have already upvoted.");
    } else {
      setvotenum((prev) => prev + 1);
      setHasUpvoted(true);
      setHasDownvoted(false);
    }
  }

  function downvote() {
    if (hasDownvoted) {
      toast.error("You have already downvoted.");
    } else {
      setvotenum((prev) => prev - 1);
      setHasDownvoted(true);
      setHasUpvoted(false);
    }
  }

  return (
    <div className="post">
      <h3>{props.data.title}</h3>
      <p id="Usernamef">
        {"/Posted By - @" +
          (props.data.usernamef ? props.data.usernamef : "admin")}
      </p>
      <p>{props.data.content}</p>
      <div id="postimg">
        <img src={props.data.imageUrl} alt="Post Image" />
      </div>

      <div className="reaction">
        <Reaction
          logo={
            <ThumbUpIcon
              style={{
                fontSize: "1.8rem",
                padding: "10px",
                fontWeight: "800",
                color: hasUpvoted ? "#FF64B4" : "white",
              }}
            />
          }
          reaction={votenum}
          onClick={upvote}
        />
        <Reaction
          logo={
            <ThumbDownIcon
              style={{
                fontSize: "1.8rem",
                padding: "10px",
                color: hasDownvoted ? "7068F4" : "white",
              }}
            />
          }
          onClick={downvote}
        />
        {/* <Reaction
          logo={<ChatBubbleTwoToneIcon style={{ fontSize: '1.8rem', padding: '10px' }} />}
          reaction={props.data.commentNumber}
        /> */}
      </div>
    </div>
  );
}
