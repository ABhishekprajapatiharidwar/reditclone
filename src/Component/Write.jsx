import React, { useRef, useState, useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import CreateIcon from "@mui/icons-material/Create";
import "./write.css";
import { UserContext } from "../App";
import toast, { Toaster } from "react-hot-toast";

export default function Write(props) {
  const textareaRef = useRef(null);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [images, setImages] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [newid, setnewid] = useState(21);
  const {
    islogin,
    setislogin,
    closebtnlogin,
    setclosebtnlogin,
    usernamef,
    setusernamef,
  } = useContext(UserContext);
  const forbiddenWords = [
    "sex",
    "porn",
    "abuse",
    "explicit",
    "obscene",
    "vulgar",
    "nudity",
    "XXX",
    "adult",
    "erotic",
    "pornographic",
    "offensive",
    "indecent",
    "lewd",
    "sensual",
    "perverted",
    "harassment",
    "molest",
    "rape",
    "prostitute",
    "orgasm",
    "bondage",
    "fetish",
    "stripper",
    "whore",
    "gangbang",
    "blowjob",
    "handjob",
    "rimjob",
    "dildo",
    "vibrator",
    "anal",
    "orgy",
    "pedophile",
    "incest",
    "bestiality",
    "scat",
    "golden shower",
    "cum",
    "suck",
    "fuck",
    "masturbate",
    "penis",
    "vagina",
    "boobs",
    "nipples",
    "butt",
    "asshole",
    "pussy",
    "clitoris",
    "erection",
    "ejaculate",
    "sperm",
    "virgin",
    "incest",
    "domination",
    "submission",
    "sadism",
    "masochism",
    "BDSM",
    "kinky",
    "swinger",
    "escort",
    "prostitution",
    "orgasmic",
    "sexy",
    "dirty",
    "kink",
    "fetishism",
    "fornicate",
    "lust",
    "pleasure",
    "tease",
    "naughty",
    "dirty talk",
    "pervert",
    "vulva",
    "buttocks",
    "threesome",
    "cunnilingus",
    "fellatio",
    "orgasm",
    "spank",
    "dick",
    "booty",
    "hardcore",
    "cumshot",
    "gangbang",
    "prostitute",
    "sodomy",
    "panties",
    "swallow",
    "dominatrix",
    "milf",
    "exhibitionist",
    "voyeur",
    "libido",
    "kamasutra",
    "fisting",
    "nude",
    "striptease",
    "foreplay",
    "g-spot",
    "climax",
    "orgasm",
    "penetration",
    "doggystyle",
    "orgasm",
    "sexy",
    "erogenous",
    "bisexual",
    "gay",
    "lesbian",
    "transgender",
    "hentai",
    "yaoi",
    "yuri",
    "incest",
    "zoophilia",
    "necrophilia",
    "tentacle",
    "loli",
    "shota",
    "rape",
    "rapeplay",
    "gangrape",
    "sexual",
    "seduce",
    "libido",
    "fap",
    "dickpic",
    "clit",
    "vibe",
    "cock",
    "pussy",
    "tits",
    "bukkake",
    "cumslut",
    "creampie",
    "threesome",
    "foursome",
    "fisting",
    "handcuffs",
    "dom",
    "sub",
    "slut",
    "wank",
    "rimming",
    "gloryhole",
    "squirting",
    "cameltoe",
    "pantyhose",
    "upskirt",
    "cuckold",
    "golden shower",
    "watersports",
    "anal beads",
    "daddy kink",
    "foot fetish",
    "dirty talk",
    "pegging",
    "queef",
    "queer",
    "rimjob",
    "scissoring",
    "sploshing",
    "twerk",
    "voyeurism",
    "wet dream",
  ];

  const handleTextareaInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentsChange = (event) => {
    setContents(event.target.value);
  };

  const handleImagesChange = (event) => {
    setImages(event.target.value);
  };

  // After writing operation and post
  const handleSubmit = async (event) => {
    event.preventDefault();

    const forbiddenWordFound = forbiddenWords.some((word) => {
      return (
        title.toLowerCase().includes(word) ||
        contents.toLowerCase().includes(word)
      );
    });

    if (forbiddenWordFound) {
      toast.error("Censored post: Please remove offensive words.");
      // alert("Post contains forbidden words. Please remove them before submitting.");
      return;
    }

    if (!title || !contents) {
      toast.error("Please write a title and content before posting.");
      return;
    }

    const newPost = {
      id: newid,
      title: title,
      content: contents,
      imageUrl: imageUrl,
      votingNumber: 0,
      commentNumber: 0,
      usernamef: usernamef,
    };
    props.fun(newPost);
    setTitle("");
    setContents("");
    setImageUrl("");
    setnewid((prev) => prev + 1);

    // Send data in Firebase Realtime database
    const response = await fetch(
      "https://redittclone-default-rtdb.firebaseio.com/databsepost.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: newid,
          title: title,
          content: contents,
          imageUrl: imageUrl,
          votingNumber: 0,
          commentNumber: 0,
          usernamef: usernamef,
        }),
      }
    );

    if (response.ok) {
      console.log("Post request successful");
      toast.success(
        '"Thank you for submitting your post! Your contribution has been successfully submitted to Votely."'
      );
    } else {
      console.error("Error:", response.status);
    }
  };

  const handleImagePreview = (event) => {
    {
      /*Image Preview suring Image Upload*/
    }
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="write">
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>
            <CreateIcon
              style={{
                border: "2px solid black",
                borderRadius: "100px",
                padding: "5px",
              }}
            />
            <p>Add New Post</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="writedetail">
              <form id="details" onSubmit={handleSubmit} method="POST">
                <input
                  type="text"
                  placeholder="Title of Post"
                  id="title"
                  value={title}
                  onChange={handleTitleChange}
                />
                <textarea
                  rows={1}
                  cols={5}
                  placeholder="Write maximum 500 Words.."
                  id="areatext"
                  ref={textareaRef}
                  onInput={handleTextareaInput}
                  value={contents}
                  onChange={handleContentsChange}
                />
                <input
                  type="file"
                  id="imginput"
                  value={images}
                  onChange={handleImagePreview}
                />
                <img src={imageUrl} alt="" id="preview" />
                <div className="btngroup">
                  <button type="button" className="btngroupbtn" id="draftbtn">
                    Draft
                  </button>
                  <button type="submit" className="btngroupbtn" id="postbtn">
                    Post
                  </button>
                </div>
              </form>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Toaster
        toastOptions={{
          // Define default options
          className: "",
          duration: 4000,
          style: {
            backgroundImage:
              "linear-gradient(to right, #9e99fd, #ff89c6, #ffe279)",
            color: "black",
          },
        }}
        position="top-center"
      />
    </div>
  );
}
