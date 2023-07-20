import { useState, useContext } from "react";
import Signup from "./Signup";
import NestedList from "./Leftlist";
import "./leftslider.css";
import { UserContext } from "../App";

export default function Leftslider() {
  const [join, setjoin] = useState(false);
  const { islogin, setislogin, closebtnlogin, setclosebtnlogin } =
    useContext(UserContext);

  return (
    <>
      {/* Feed and Topic Left Slider */}

      <div className="leftslider_left">
        <NestedList /> {/*Component from Meterial UI */}
        <p
          onClick={() => {
            setjoin(true);
          }}
          className="joiningbtn"
        >
          Join Votely
        </p>
      </div>
      {join ? <Signup join={true} /> : false}
    </>
  );
}
