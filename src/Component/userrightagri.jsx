import React from "react";
import "./Useragri.css";
import { GrShield } from "react-icons/gr";
import { Link } from "react-router-dom";


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
          < Link to="/working"><button>Try Now</button></Link>
        </section>
        <section className="reddit_clone-right_Secton_community">
          <p>
            Explore Your Personalized Votely Frontpage - Connect with Your
            Favorite Communities
          </p>
          {/* <button >Create Post</button> */}
          < Link to="/working" id="createcomunitybtn">Create Community</Link>
        </section>

        <footer className="reddit_clone-section_right_footer">
          <div>
            <a href="https://www.miniorange.com/usecases/miniOrange_User_Agreement.pdf">User Agreement</a>
            <a href="https://www.ruforum.org/sites/default/files/Policy%20contentTypesCycles%20&%20Analysis.pdf">Content Policy</a>
            <a href="https://static.googleusercontent.com/media/www.google.com/en//intl/en/policies/privacy/google_privacy_policy_en.pdf">Privacy Policy</a>
            <a href="https://www.think-gas.com/admin/wp-content/uploads/2019/12/CODE-OF-CONDUCT-AND-ETHICS-POLICY.pdf">Code of conduct</a>
          </div>
          <hr />
          <div>
            <a href="https://en.wikipedia.org/wiki/English_language">English</a>
            <a href="https://en.wikipedia.org/wiki/Deutsch">Deutsch</a>
            <a href="https://fr.wikipedia.org/wiki/Fran%C3%A7ais">Francais</a>

            <a href="https://fr.wikipedia.org/wiki/Fran%C3%A7ais">Italiano</a>
            <a href="https://en.wikipedia.org/wiki/Espa%C3%B1ol">Espanol</a>
            <a href="https://en.wikipedia.org/wiki/Portuguese_language">Portuges</a>
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
