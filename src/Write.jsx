import React, { useRef, useState ,useContext} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import CreateIcon from '@mui/icons-material/Create';
import './write.css';
import { UserContext } from './App';

export default function Write(props) {
  const textareaRef = useRef(null);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [images, setImages] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [newid,setnewid]=useState(21);
  const { islogin, setislogin, closebtnlogin, setclosebtnlogin,usernamef,setusernamef } =
    useContext(UserContext);

  const handleTextareaInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
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
    const newPost = {
      id: newid,
      title: title,
      content: contents,
      imageUrl: imageUrl,
      votingNumber: 0,
      commentNumber: 0,
      usernamef:usernamef,
    };
    props.fun(newPost);
    setTitle('');
    setContents('');
    setImageUrl('');
    setnewid((prev)=>prev+1);
  
  
    // Send data in Firebase Realtime database
    const response = await fetch("https://redittclone-default-rtdb.firebaseio.com/databsepost.json", {
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
        usernamef:usernamef
      })
    });
  
    if (response.ok) {
      console.log("Post request successful");
    } else {
      console.error("Error:", response.status);
    }
    
  };

  const handleImagePreview = (event) => {           {/*Image Preview suring Image Upload*/}
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className='write'>
      <Accordion style={{   backgroundImage: 'linear-gradient(to top,brown, #ff3758 , #5e2189)'}}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <CreateIcon style={{ border: '2px solid black', borderRadius: '100px', padding: '5px',color:'white',borderColor:"white" }} />
            <p style={{color:'white'}}>Add New Post</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className='writedetail'>
              <form id="details" onSubmit={handleSubmit} method='POST'>
                <input type='text' placeholder='Title of Post' id="title" value={title} onChange={handleTitleChange} />
                <textarea
                  rows={1}
                  cols={5}
                  placeholder='Write maximum 500 Words..'
                  id="areatext"
                  ref={textareaRef}
                  onInput={handleTextareaInput}
                  value={contents}
                  onChange={handleContentsChange}
                />
                <input type='file' id="imginput" value={images} onChange={handleImagePreview} />
                <img src={imageUrl} alt=''  id="preview"/>
                <div className='btngroup'>
                  <button type='button' className='btngroupbtn' id="draftbtn">Draft</button>
                  <button type='submit' className='btngroupbtn' id="postbtn">Post</button>
                </div>
              </form>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
