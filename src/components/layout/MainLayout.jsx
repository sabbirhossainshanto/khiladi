import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";


const MainLayout = () => {
  return (
    <div className="w-full flex flex-col app-bg h-[100%] ">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
