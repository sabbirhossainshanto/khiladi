import images from "../../../assets/images";

const MobileFooter = () => {
  return (
    <div className="footer-menu">
      <div className="wrapper">
        <div className="button-f active">
          <div className="icon">
            <img src={images.home} alt="" />
          </div>
          <span>Home</span>
        </div>
        <div className="button-f">
          <div className="icon">
            <img src={images.inplay} alt="" />
          </div>
          <span>Inplay</span>
        </div>
        <div className="button-f">
          <div className="icon">
            <img src={images.miniGames} alt="" />
          </div>
          <span>MiniGame</span>
        </div>
        <div className="button-f">
          <div className="icon">
            <img src={images.menu} alt="" />
          </div>
          <span>Menu</span>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
