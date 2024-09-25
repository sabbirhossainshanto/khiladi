import images from "../../../assets/images";


const TopBanner = () => {
    return (
        <section className="homebanner desktop-view">
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
                    width: "1916px",
                    transition: "-webkit-transform 300ms",
                  }}
                >
                  <div
                    data-index="0"
                    className="slick-slide slick-active slick-current"
                    aria-hidden="false"
                    style={{ outline: "none", width: "1916px" }}
                  >
                    <div>
                      <div
                        className="img-slider"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          src={images.mainBanner}
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
    );
};

export default TopBanner;