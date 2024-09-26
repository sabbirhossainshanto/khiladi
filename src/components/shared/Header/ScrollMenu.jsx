import { useNavigate } from "react-router-dom";
import images from "../../../assets/images";
import { useDispatch, useSelector } from "react-redux";
import { setGroupType } from "../../../redux/features/stateSlice";

const ScrollMenu = () => {
  const navigate = useNavigate();
  const { group } = useSelector((state) => state.global);
  const dispatch = useDispatch();

  return (
    <div className="scrollmenu marposition">
    <a className={`${group === 0 ? "active" : ""}`}
        onClick={() => {
          dispatch(setGroupType(0));
          navigate("/");
        }}
      >
        <span className="sports-icon inplaymobile"></span> In-Play
      </a>
      <a className="awesomemobile">
        <span id="tagLive" className="tag-livemobile">
          <strong></strong>0
        </span>
        <span className="sports-icon electionmobile"></span>Election
      </a>
      <a
      className={`${group === 4 ? "active" : ""}`}
      onClick={() => {
        dispatch(setGroupType(4));
        navigate("/");
      }}
      >
        <span id="tagLive" className="tag-livemobile">
          <strong></strong>0
        </span>
        <span className="sports-icon cricketmobile"></span>Cricket
      </a>
      <a className={`${group === 1 ? "active" : ""}`}
        onClick={() => {
          dispatch(setGroupType(1));
          navigate("/");
        }}>
        <span id="tagLive" className="tag-livemobile">
          <strong></strong>0
        </span>
        <span className="sports-icon soccermobile"></span>Football
      </a>
      <a
      className={`${group === 2 ? "active" : ""}`}
      onClick={() => {
        dispatch(setGroupType(2));
        navigate("/");
      }}
      >
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
