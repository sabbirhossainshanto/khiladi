import { useDispatch, useSelector } from "react-redux";
import Login from "../../modal/Login/Login";
import {
  setShowLoginModal,
  setShowRegisterModal,
} from "../../../redux/features/stateSlice";
import useContextState from "../../../hooks/useContextState";
import { settings } from "../../../api";
import Register from "../../modal/Register/Register";
import { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const PublicHeader = () => {
  const [time, setTime] = useState();
  const { logo } = useContextState();
  const { showLoginModal, showRegisterModal } = useSelector(
    (state) => state.global
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setTime(moment().format("h:mm:ss a"));
    }, 1000);
  }, [time]);
  return (
    <>
      {showLoginModal && <Login />}
      {showRegisterModal && <Register />}
      <div className="header-fix">
        <div className="header-top flex-center-space">
          <div className="header-social-w">
            <div className="left flex-center float-left">
              <ul className="socialmediaicon">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    alt="Instagram"
                    rel="noreferrer"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Instagram"
                  >
                    <i className="fa fa-instagram mr-1"></i>
                    <span className="m-hide">Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    alt="Facebook"
                    rel="noreferrer"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Facebook"
                  >
                    <i className="fa fa-facebook mr-1"></i>
                    <span className="m-hide">Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    alt="Twitter"
                    rel="noreferrer"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Twitter"
                  >
                    <i className="fa fa-twitter mr-1"></i>
                    <span className="m-hide">Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/khiladi786customercare"
                    target="_blank"
                    alt="Telegram Channel"
                    rel="noreferrer"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Telegram"
                  >
                    <i className="fa fa-telegram mr-1"></i>
                    <span className="m-hide">Telegram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/+918336991923"
                    alt="Whatsapp"
                    rel="noreferrer"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Whatsapp"
                    target="black"
                  >
                    <i className="fa fa-whatsapp mr-1"></i>
                    <span className="m-hide">Whatsapp</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    alt="FAQ"
                    rel="noreferrer"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="FAQ"
                    className=""
                  >
                    <i className="fa fa-question-circle-o mr-1"></i>
                    <span className="m-hide">FAQ</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    alt="Android"
                    rel="noreferrer"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Application"
                  >
                    <i className="fa fa-mobile mr-1"></i>
                    <span className="m-hide">Application</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="date-time-w">
            <div className="left flex-center float-right">
              <div className="header-time">
                {/* 25 Sep 2024 11:02:46 */}
                <span>
                  {moment().format("MMMM Do YYYY")} {time}
                </span>
              </div>
            </div>
          </div>
        </div>
        <header className="loginheader">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 col-sm-6 col-md-5 col-lg-4 col-xl-3">
                <div className="logo">
                  <i className="fa fa-bars icon-toggle-right cls-bx-menu baricon"></i>
                  <Link to='/' className="b2clogolink">
                    <img
                      src={logo}
                      width={settings.logoWidth}
                      height={settings.logoHeight}
                      alt="logo"
                      className="loginlogo"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-7 col-lg-8 col-xl-9 login-signup-header">
                <div className="">
                  <ul className="login-wrap">
                    <li>
                      <button
                        onClick={() => dispatch(setShowLoginModal(true))}
                        id="btnLoginb2cLogin"
                        className="b2clogin"
                      >
                        <i className="fa fa-user mr1" aria-hidden="true"></i>{" "}
                        Log in
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => dispatch(setShowRegisterModal(true))}
                        className="b2csignup"
                        style={{ cursor: "pointer" }}
                      >
                        SIGN up
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="b2cmenu inner">
          <nav>
            <div className="navbar cls-navbar">
              <i className="bx bx-menu cls-bx-menu"></i>
              <div className="nav-links cls-nav-links">
                <div className="sidebar-logo">
                  <i className="bx bx-x cls-bx-x fa fa-times-circle"></i>
                </div>
                <ul className="links afterlogin">
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>In-Play</a>
                  </li>
                  <li>
                    <a className="awesome">
                      <span id="tagLive" className="tag-live">
                        <strong></strong>0
                      </span>
                      Election
                    </a>
                  </li>
                  <li>
                    <a>
                      <span id="tagLive" className="tag-live">
                        <strong></strong>0
                      </span>
                      Cricket
                    </a>
                  </li>
                  <li>
                    <a>
                      <span id="tagLive" className="tag-live">
                        <strong></strong>0
                      </span>
                      Soccer
                    </a>
                  </li>
                  <li>
                    <a>
                      <span id="tagLive" className="tag-live">
                        <strong></strong>0
                      </span>
                      Tennis
                    </a>
                  </li>
                  <li>
                    <a>
                      <span id="tagLive" className="tag-live">
                        <strong></strong>0
                      </span>
                      Horse
                    </a>
                  </li>
                  <li>
                    <a>
                      <span id="tagLive" className="tag-live">
                        <strong></strong>0
                      </span>
                      Greyhound
                    </a>
                  </li>
                  <li>
                    <a className="">Indian Poker</a>
                  </li>
                  <li>
                    <a className="">Indian Poker II</a>
                  </li>
                  <li>
                    <a className="">
                      <span id="tagLive" className="tag-live1">
                        <img
                          className="ball-images-tab1-aviator new-scrollmenu"
                          src="static/images/aviator-icon.svg"
                          alt=""
                        />
                      </span>
                      Aviator
                    </a>
                  </li>
                  <li>
                    <a className="">AE SEXY</a>
                  </li>
                  <li>
                    <a className="">Evolution</a>
                  </li>
                  <li>
                    <a className="">Live Casino</a>
                  </li>
                  <li>
                    <a className="">Vivo</a>
                  </li>
                  <li>
                    <a className="">Betgames</a>
                  </li>
                  <li>
                    <a className="">Casino III</a>
                  </li>
                </ul>
                <button className="mobileapp">
                  <i className="fa fa-mobile mr-2"></i>Mobile App
                </button>
                <div className="header-mobile__content">
                  <ul className="mobilemenu_ul">
                    <li>
                      <a href="#innersection" className="">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#innersection" className="">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#innersection" className="">
                        Terms and Conditions
                      </a>
                    </li>
                    <li>
                      <a href="#innersection" className="">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#innersection" className="">
                        Betting Rules
                      </a>
                    </li>
                    <li>
                      <a href="#innersection" className="">
                        Deposits and Withdrawals Rules
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="header_mobile_socialicon">
                  <ul className="mobilemenuicon_ul">
                    <li>
                      <a
                        href="https://www.instagram.com/rdreamfair_official/"
                        target="_blank"
                        alt="Instagram"
                        rel="noreferrer"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Instagram"
                      >
                        <i className="fa fa-instagram mr-1"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/rdreamfair"
                        target="_blank"
                        alt="Facebook"
                        rel="noreferrer"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Facebook"
                      >
                        <i className="fa fa-facebook mr-1"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/rDreamFair"
                        target="_blank"
                        alt="Twitter"
                        rel="noreferrer"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Twitter"
                      >
                        <i className="fa fa-twitter mr-1"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://t.me/rDreamFair_official"
                        target="_blank"
                        alt="Telegram Channel"
                        rel="noreferrer"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Telegram"
                      >
                        <i className="fa fa-telegram mr-1"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        alt="Make a call"
                        rel="noreferrer"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Make a call"
                      >
                        <i className="fa fa-phone mr-1"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </>
  );
};

export default PublicHeader;
