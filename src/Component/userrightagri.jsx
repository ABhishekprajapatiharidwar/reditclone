import React from "react";
import "./Useragri.css";
import { GrShield } from "react-icons/gr";

const Useragri = () => {
  return (
    <>
      <div className="reddit_clone-right_section">
        <section className="reddit_clone-right_section_premium">
          <div className="reddit_clone-right_section_premium_heading">
            <GrShield className="reddit_clone-right_section_icon" />
            <div>
              <h4>Votely Premium</h4>
              <p>The Best Votely experience, with monthly coins</p>
            </div>
          </div>
          <button>Try Now</button>
        </section>
        <section className="reddit_clone-right_Secton_community">
          <p>
            Explore Your Personalized Votely Frontpage - Connect with Your
            Favorite Communities
          </p>
          <button>Create Post</button>
          <button>Create Community</button>
        </section>

        <footer className="reddit_clone-section_right_footer">
          <div>
            <a href="">User Agreement</a>
            <a href="">Content Policy</a>
            <a href="">Privacy Policy</a>
            <a href="">Code of conduct</a>
          </div>
          <hr />
          <div>
            <a href="">English</a>
            <a href="">Deutsch</a>
            <a href="">Francais</a>

            <a href="">Italiano</a>
            <a href="">Espanol</a>
            <a href="">Portuges</a>
          </div>
          <hr />
          <p>
            <a href="https://abhishekprajapati.netlify.app/">@Abhishek Kumar</a>{" "}
            All rights reserved
          </p>
        </footer>
      </div>
    </>
  );
};

export default Useragri;
