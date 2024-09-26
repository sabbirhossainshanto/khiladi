import { settings } from "../../../api";
import images from "../../../assets/images";
import useContextState from "../../../hooks/useContextState";

const Footer = () => {
  const { logo } = useContextState();
  return (
    <div className="partner_logo">
      <ul className="footer-providers__list footer-icon-desktop">
        <li className="footer-providers__list-item">
          <a className="footer-providers__list-item-link" href="#">
            <img src={images.evolution} alt="Evolution" />
          </a>
        </li>
        <li className="footer-providers__list-item">
          <a className="footer-providers__list-item-link" href="#">
            <img src={images.ezugi} alt="Ezugi" />
          </a>
        </li>
        <li className="footer-providers__list-item">
          <a className="footer-providers__list-item-link" href="#">
            <img src={images.pragmaticLive} alt="Pragmatic Live" />
          </a>
        </li>
        <li className="footer-providers__list-item">
          <a className="footer-providers__list-item-link" href="#">
            <img src={images.betgames} alt="Betgames" />
          </a>
        </li>
        <li className="footer-providers__list-item">
          <a className="footer-providers__list-item-link" href="#">
            <img src={images.ssg} alt="Super Spade Games" />
          </a>
        </li>
        <li className="footer-providers__list-item">
          <a className="footer-providers__list-item-link" href="#">
            <img src={images.betsoft} alt="Betsoft" />
          </a>
        </li>
        <li className="footer-providers__list-item">
          <a className="footer-providers__list-item-link" href="#">
            <img src={images.spribe} alt="Spribe" />
          </a>
        </li>
        <li className="footer-providers__list-item">
          <a className="footer-providers__list-item-link" href="#">
            <img src={images.evoplay} alt="Evoplay" />
          </a>
        </li>
        <li className="footer-providers__list-item lastli">
          <a className="footer-providers__list-item-link" href="#">
            <img src={images.logo18plus} alt="+18" />
          </a>
        </li>
      </ul>
      <ul className="footer-providers__list footer-icon-mobile">
        <li className="footer-providers__list-item">
          <a className="footer-providers__list-item-link" href="#">
            <img src={images.evolution} alt="Evolution" />
          </a>
        </li>
        <li className="footer-providers__list-item">
          <a className="footer-providers__list-item-link" href="#">
            <img src={images.ezugi} alt="Ezugi" />
          </a>
        </li>
        <li className="footer-providers__list-item">
          <a className="footer-providers__list-item-link" href="#">
            <img src={images.pragmaticLive} alt="Pragmatic Live" />
          </a>
        </li>
        <li className="footer-providers__list-item">
          <a className="footer-providers__list-item-link" href="#">
            <img src={images.betgames} alt="Betgames" />
          </a>
        </li>
        <li className="footer-providers__list-item">
          <a className="footer-providers__list-item-link" href="#">
            <img src={images.superspade} alt="Super Spade Games" />
          </a>
        </li>
        <li className="footer-providers__list-item">
          <a className="footer-providers__list-item-link" href="#">
            <img src={images.betsoft} alt="Betsoft" />
          </a>
        </li>
        <li className="footer-providers__list-item">
          <a className="footer-providers__list-item-link" href="#">
            <img src={images.spribe} alt="Spribe" />
          </a>
        </li>
        <li className="footer-providers__list-item">
          <a className="footer-providers__list-item-link" href="#">
            <img src={images.evoplay} alt="Evoplay" />
          </a>
        </li>
        <li className="footer-providers__list-item lastli">
          <a className="footer-providers__list-item-link" href="#">
            <img src={images.logo18plus} alt="+18" />
          </a>
        </li>
      </ul>
      <div className="container ft-footer-widget-wrapper-2">
        <div className="row">
          <div className="col-sm-3 col-md-3 col-6">
            <div className="ft-footer-widget ul-li-block headline pera-content">
              <div className="logo-widget">
                <div className="site-logo footerlogodesktop">
                  <a href="#">
                    <img
                      src={logo}
                      width={settings.logoWidth}
                      height={settings.logoHeight}
                    />
                  </a>
                </div>
                <div className="footerlogomobile">
                  <a href="#">
                    <img
                      src={logo}
                      width={settings.logoWidth}
                      height={settings.logoHeight}
                    />
                  </a>
                </div>
                <div className="ft-footer-address">
                  <span>Website: www.khiladi786.com</span>
                  <span>Email: support@khiladi786.com</span>
                  <span className="whats-app-color">
                    Whatsapp:
                    <a href="https://wa.me/+918336991923">+91 83369 91923</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-3 col-6">
            <div className="ft-footer-widget ul-li-block headline pera-content">
              <div className="menu-widget">
                <h3 className="widget-title">khiladi786</h3>
                <ul>
                  <li>
                    <a href="#">Blog khiladi786</a>
                  </li>
                  <li>
                    <a href="#" className="">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      Responsible Gaming
                    </a>
                  </li>
                  <li>
                    <a href="https://aff.khiladi786.com/">
                      khiladi786 Affiliates
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-3 col-6">
            <div className="ft-footer-widget ul-li-block headline pera-content">
              <div className="menu-widget">
                <h3 className="widget-title">Usage and Terms</h3>
                <ul>
                  <li>
                    <a href="#" className="">
                      Terms and Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      Betting Rules
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      How to Play
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      Rules Regulations
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-3 col-6">
            <div className="ft-footer-widget ul-li-block headline pera-content">
              <div className="menu-widget">
                <h3 className="widget-title">Quick Links</h3>
                <ul>
                  <li>
                    <a
                      href="#"
                      alt="Make a call"
                      rel="noreferrer"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Have Question?"
                      className=""
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#">Make a Call</a>
                  </li>
                  <li>
                    <a href="#">Download APK</a>
                  </li>
                  <li>
                    <a href="#" className="">
                      Deposits and Withdrawals Rules
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rules">
        You must be over 18 years old, or the legal age at which gambling or
        gaming activities are allowed under the law or jurisdiction that applies
        to you. You must reside in a country in which access to online gambling
        to its residents.
      </div>
      <div className="d-none">
        <ul className="bettingrules">
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="">
              Terms and Conditions
            </a>
          </li>
          <li>
            <a href="#" className="">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="">
              Betting Rules
            </a>
          </li>
          <li>
            <a href="#" className="">
              Deposits and Withdrawals Rules
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
