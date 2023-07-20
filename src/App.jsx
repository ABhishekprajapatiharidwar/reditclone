import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./Component/Nav";
import Leftslider from "./Component/leftslider";
import Rightsection from "./Component/Rightsection";
import Login from "./Component/login";
import { createContext } from "react";
import Useragri from "./Component/userrightagri";
import Admin from "../src/Component/admin";
import toast, { Toaster } from "react-hot-toast";
import OnlineStatus from "./Component/onlinestatus";

const UserContext = createContext();
function App() {
  const [count, setCount] = useState(0);
  const [loginshow, setLoginShow] = useState(false);
  const [islogin, setislogin] = useState(false);
  const [closebtnlogin, setclosebtnlogin] = useState(false);
  const [usernamef, setusernamef] = useState("");
  const [usenamelocal, setusernamelocal] = useState("U");
  const [adminlogin, setadminlogin] = useState(false);
  const [categery, setcategery] = useState();
  const [filterdata, setfilterdata] = useState([]);

  useEffect(() => {
    var loginStatus = localStorage.getItem("Loginstatus");
    if (loginStatus === "true") {
      setislogin(true);
      const name = localStorage.getItem("username");
      setusernamef(name);
    }
    if (loginStatus === "false") {
      setislogin(false);
    }
  });

  //  Scrool Bar Style
  window.addEventListener("scroll", function () {
    const scrollBar = document.querySelector(".scroll-progress");
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const percentage = (window.pageYOffset / maxScroll) * 100;
    scrollBar.style.width = percentage + "%";
  });

  return (
    <>
      <UserContext.Provider
        value={{
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
        }}
      >
        {" "}
        {/*Context Values */}
        <div>
          <div class="scroll-progress-bar">
            <div class="scroll-progress"></div>
          </div>

          <h1> {loginshow}</h1>

          <Nav count={count} loginshow={loginshow} />
          <OnlineStatus />

          <div className="leftSlider">
            <Leftslider />
            <Rightsection />
            <Useragri />
            {adminlogin && <Admin />} {/*show admin login or not only} */}
          </div>
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
export { UserContext };
{
  /*Exporting Context Data*/
}
