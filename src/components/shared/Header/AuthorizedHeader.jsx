import { settings } from "../../../api";
import useContextState from "../../../hooks/useContextState";

const AuthorizedHeader = () => {
  const { logo } = useContextState();
  return (
    <div className="top">
      <div className="header full-wrap">
        <div className="d-inline">
          <i className="fa fa-bars icon-toggle-right mobile-menu"></i>
          <a className="logo">
            <img
              width={settings.logoWidth}
              height={settings.logoHeight}
              src={logo}
              className="mainlogo"
            />
          </a>
        </div>
        <ul className="account-wrap">
          <li className="mb3 cmenu">
            <a
              className="hed-btn text-white cmenu"
              style={{ cursor: "pointer" }}
            >
              <span className="line coin cmenu">
                <img
                  alt=""
                  src="static/images/coin.svg"
                  className="pr-1 cmenu"
                />
              </span>
              <span className="pl-1 cmenu p2">0.00</span>
              <i
                className="fa fa-caret-down pl-2 cmenu rigarrow"
                aria-hidden="true"
              ></i>
            </a>
            <div
              className="wallet-detail cmenu"
              id="multiBalancePop"
              style={{ display: "none" }}
            >
              <div className="wallet-detail-group cmenu">
                <dl
                  className="wallet-detail-content mb-1 cmenu"
                  style={{ cursor: "pointer" }}
                >
                  <dt className="cmenu">Exposure</dt>
                  <dd className="wallet-balance-num cmenu">
                    <span id="mainBalance" className="cmenu">
                      <span className="cmenu">0.00</span>
                    </span>
                  </dd>
                </dl>
              </div>
              <div className="wallet-detail-group cmenu">
                <dl className="wallet-detail-content mb-1 cmenu">
                  <dt className="cmenu">P&amp;L</dt>
                  <dd className="wallet-balance-num cmenu">
                    <span id="mainBalance" className="cmenu">
                      <span className="cmenu">0.00</span>
                    </span>
                  </dd>
                </dl>
              </div>
              <div className="btn-box cmenu">
                <button className="btn">Close</button>
              </div>
            </div>
          </li>
          <li className="cmenu">
            <div
              className="wallet-detail cmenu"
              id="multiRGBalancePop"
              style={{ display: "none" }}
            >
              <div className="wallet-detail-group cmenu">
                <dl className="wallet-detail-content mb-1 cmenu">
                  <dt className="cmenu">CG Exposure</dt>
                  <dd className="wallet-balance-num cmenu">
                    <span id="mainBalance" className="cmenu">
                      <span className="cmenu">0.00</span>
                    </span>
                  </dd>
                </dl>
              </div>
              <div className="wallet-detail-group cmenu">
                <dl className="wallet-detail-content mb-1 cmenu">
                  <dt className="cmenu">CG P&amp;L</dt>
                  <dd className="wallet-balance-num cmenu">
                    <span id="mainBalance" className="cmenu">
                      <span className="cmenu">0.00</span>
                    </span>
                  </dd>
                </dl>
              </div>
              <div className="btn-box cmenu">
                <button className="btn">Close</button>
              </div>
            </div>
          </li>
          <li className="cmenu mb3">
            <a
              target="_blank"
              className="hed-btn cmenu"
              id="accountPopup"
              style={{ cursor: "pointer" }}
            >
              <span className="line cmenu">
                <i
                  className="fa fa-user darkblue pr-1 cmenu"
                  aria-hidden="true"
                ></i>
              </span>
              <span className="pl-1 cmenu p-8" style={{ color: "white" }}>
                My Account
              </span>
              <i
                className="fa fa-caret-down pl-2 cmenu rigarrow"
                aria-hidden="true"
                style={{ color: "white" }}
              ></i>
            </a>
            <ul
              id="account_pop"
              className="cmenu"
              style={{ display: "none", zIndex: 999 }}
            >
              <li className="cmenu">
                <h4 className="cmenu"></h4>
              </li>
              <li>
                <a>
                  <img
                    alt=""
                    src="static/images/change-password.svg"
                    className="ball-images-tab"
                  />
                  Profile
                </a>
              </li>
              <li>
                <a>
                  <img
                    alt=""
                    src="static/images/Account-Statement.svg"
                    className="ball-images-tab"
                  />
                  Account Statement
                </a>
              </li>
              <li>
                <a>
                  <img
                    alt=""
                    src="static/images/transactions-report.svg"
                    className="ball-images-tab"
                  />
                  Transactions Report
                </a>
              </li>
              <li>
                <a>
                  <img
                    alt=""
                    src="static/images/profit-loss-report.svg"
                    className="ball-images-tab"
                  />
                  Profit Loss Report
                </a>
              </li>
              <li>
                <a>
                  <img
                    alt=""
                    src="static/images/bet-history.svg"
                    className="ball-images-tab"
                  />
                  Bet Histroy
                </a>
              </li>
              <li>
                <a>
                  <img
                    alt=""
                    src="static/images/unsettle-bet.svg"
                    className="ball-images-tab"
                  />
                  Unsettled Bet
                </a>
              </li>
              <li>
                <a>
                  <img
                    alt=""
                    src="static/images/set-button-value.svg"
                    className="ball-images-tab"
                  />
                  Set Stake
                </a>
              </li>
              <li>
                <a>
                  <img
                    alt=""
                    src="static/images/rules.svg"
                    className="ball-images-tab"
                  />
                  Rules
                </a>
              </li>
              <li>
                <a>
                  <img
                    alt=""
                    src="static/images/change-password.svg"
                    className="ball-images-tab"
                  />
                  Change Password
                </a>
              </li>
              <li className="logout">
                <a id="logout">
                  <img
                    alt=""
                    src="static/images/log-out.svg"
                    className="ball-images-tab"
                  />
                  Logout
                </a>
              </li>
            </ul>
          </li>
          <li className="cmenu">
            <a
              id="btnPayInOut"
              target="_blank"
              className="hed-btn cmenu"
              style={{ cursor: "pointer" }}
            >
              <span className="line cmenu">
                <i
                  className="fa fa-money fa-2 darkblue pr-1 cmenu"
                  aria-hidden="true"
                ></i>
              </span>
              <span className="pl-1 cmenu p-8" style={{ color: "white" }}>
                Pay In / Out
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="menu-wrap mobile-menu-hide">
        <div className="full-wrap">
          <ul className="menu">
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
        </div>
      </div>
    </div>
  );
};

export default AuthorizedHeader;
