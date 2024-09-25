// import { useSelector } from "react-redux";
// import AuthorizedHeader from "./AuthorizedHeader";
import MobileFooter from "./MobileFooter";
import PublicHeader from "./PublicHeader";
import ScrollMenu from "./ScrollMenu";

const Header = () => {
  // const { token } = useSelector((state) => state.auth);
  return (
    <>
      <PublicHeader />
      {/* {token && <AuthorizedHeader />} */}
      <MobileFooter />
      <ScrollMenu />
    </>
  );
};

export default Header;
