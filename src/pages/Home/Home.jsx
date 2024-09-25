import { useSelector } from "react-redux";
import images from "../../assets/images";
import Banners from "../../components/ui/Home/Banners";
import FAQ from "../../components/ui/Home/FAQ";
import Group from "../../components/ui/Home/Group";
import TopBanner from "../../components/ui/Home/TopBanner";
import TopGames from "../../components/ui/Home/TopGames";
import LeftSidebar from "../../components/shared/LeftSidebar/LeftSidebar";
import { useGetAllGroupEventsQuery } from "../../redux/features/events/events";
import isRefetchGroupData from "../../utils/isRefetchGroupData";

const Home = () => {
  const { token } = useSelector((state) => state.auth);
  const { group } = useSelector((state) => state.global);
  const { data } = useGetAllGroupEventsQuery(group, {
    pollingInterval: isRefetchGroupData(group) ? 1000 : null,
  });


  return (
    <div className="full-wrap mar-top100  footerpd mar-top100-login mar-bottom0">
      {token ? <LeftSidebar /> : <TopBanner />}
      <div
        className={`col-center1 markets  ${
          token ? "" : "col-center-left-menu-hide"
        }`}
      >
        {token ? (
          <div className="text-center mb-2">
            <img alt="" src={images.cricketBanner} />
          </div>
        ) : (
          <Banners />
        )}
        {!token && <TopGames />}

       {
        data &&  <Group data={data} />
       }
        {!token && (
          <div className="depositbonus-box">
            <div className="depositbonus-banner">
              <img src={images.pgBanner} alt="" className="br-radius" />
            </div>
          </div>
        )}
        {!token && <FAQ />}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
