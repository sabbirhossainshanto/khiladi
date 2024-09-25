import images from "../../../assets/images";

const ScrollMenu = () => {
  return (
    <div className="scrollmenu marposition">
      <a>
        <span className="sports-icon inplaymobile"></span> In-Play
      </a>
      <a className="awesomemobile">
        <span id="tagLive" className="tag-livemobile">
          <strong></strong>0
        </span>
        <span className="sports-icon electionmobile"></span>Election
      </a>
      <a>
        <span id="tagLive" className="tag-livemobile">
          <strong></strong>0
        </span>
        <span className="sports-icon cricketmobile"></span>Cricket
      </a>
      <a>
        <span id="tagLive" className="tag-livemobile">
          <strong></strong>0
        </span>
        <span className="sports-icon soccermobile"></span>Soccer
      </a>
      <a>
        <span id="tagLive" className="tag-livemobile">
          <strong></strong>0
        </span>
        <span className="sports-icon tennismobile"></span> Tennis
      </a>
      <a>
        <span id="tagLive" className="tag-livemobile">
          <strong></strong>0
        </span>
        <span className="sports-icon horsemobile"></span>Horse
      </a>
      <a>
        <span id="tagLive" className="tag-livemobile">
          <strong></strong>0
        </span>
        <span className="sports-icon greyhoundmobile"></span>Greyhound
      </a>
      <a className="">
        <span className="sports-icon casinomobile"></span>Indian Poker
      </a>
      <a className="">
        <span className="sports-icon indianpokermobile"></span>Indian Poker II
      </a>
      <a className="">
        <img
          className="ball-images-tab1-aviator-mobile"
          src={images.aviatorIcon}
          alt=""
        />
        Aviator
      </a>
      <a className="">
        <span className="sports-icon casinomobile"></span>AE SEXY
      </a>
      <a className="">
        <img
          className="ball-images-tab new-scrollmenu"
          src="static/images/casino-icon.svg"
          alt=""
        />
        Evolution
      </a>
      <a className="">
        <span className="sports-icon casinomobile"></span>Live Casino
      </a>
      <a className="">
        <img
          className="ball-images-tab new-scrollmenu"
          src="static/images/casino-icon.svg"
          alt=""
        />
        Vivo
      </a>
      <a className="">
        <img
          className="ball-images-tab new-scrollmenu"
          src="static/images/casino-icon.svg"
          alt=""
        />
        Betgames
      </a>
      <a className="">
        <span className="sports-icon casinomobile"></span>Casino III
      </a>
    </div>
  );
};

export default ScrollMenu;
