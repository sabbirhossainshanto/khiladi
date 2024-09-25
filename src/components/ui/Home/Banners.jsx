import images from "../../../assets/images";

const Banners = () => {
  return (
    <>
      <div className="mobilelogin">
        <section className="banner bannermobileshow">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="slick-slider slick-initialized">
                <div className="slick-list">
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      transform: "translate3d(0px, 0px, 0px)",
                    }}
                  >
                    <div
                      data-index="0"
                      className="slick-slide slick-active slick-current"
                      aria-hidden="false"
                      style={{ outline: "none", width: "0px" }}
                    >
                      <div>
                        <div
                          className="img-slider"
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            className="bannerimgmobile"
                            src={images.mainMobileBanner}
                            alt=""
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="offer-banner-box">
        <div
          id="carouselExampleIndicators"
          className="carousel slide top-game-box-inner"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="slick-slider slick-initialized">
              <div className="slick-list">
                <div
                  className="slick-track"
                  style={{
                    opacity: 1,
                    transform: "translate3d(0px, 0px, 0px)",
                    width: "1905px",
                  }}
                >
                  <div
                    data-index="0"
                    className="slick-slide"
                    aria-hidden="true"
                    style={{ outline: "none", width: "635px" }}
                  >
                    <div>
                      <div
                        className="img-slider top-game-login-grid-item2"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          src={images.bonus1}
                          alt=""
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="1"
                    className="slick-slide"
                    aria-hidden="true"
                    style={{ outline: "none", width: "635px" }}
                  >
                    <div>
                      <div
                        className="img-slider top-game-login-grid-item2"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          src={images.bonus2}
                          alt=""
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="2"
                    className="slick-slide slick-active slick-current"
                    aria-hidden="false"
                    style={{ outline: "none", width: "635px" }}
                  >
                    <div>
                      <div
                        className="img-slider top-game-login-grid-item2"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          src={images.bonus6}
                          alt=""
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="casino-banner-box mar-top-5">
        <div className="casino-banner-main">
          <div>
            <img alt="" src={images.rdgif1} />
          </div>
        </div>
        <div className="casino-banner-main-w5"></div>
        <div className="casino-banner-main">
          <div>
            <img alt="" src={images.rdgif2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banners;
