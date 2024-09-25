const MobileFooter = () => {
  return (
    <div className="footer-menu">
      <div className="wrapper">
        <div className="button-f active">
          <div className="icon">
            <img src="static/images/home.svg" alt="" />
          </div>
          <span>Home</span>
        </div>
        <div className="button-f">
          <div className="icon">
            <img src="static/images/inplay.svg" alt="" />
          </div>
          <span>Inplay</span>
        </div>
        <div className="button-f">
          <div className="icon">
            <img src="static/images/mini_games.gif" alt="" />
          </div>
          <span>MiniGame</span>
        </div>
        <div className="button-f">
          <div className="icon">
            <img src="static/images/menu.svg" alt="" />
          </div>
          <span>Menu</span>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
