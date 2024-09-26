import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTop from "../components/shared/ScrollToTop/ScrollToTop";
import App from "../App";
import Home from "../pages/Home/Home";
import EventDetails from "../pages/EventDetails/EventDetails";

const MainRouter = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <>
            <ScrollToTop />
            <App />
          </>
        ),
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/:eventTypeId/:eventId",
            element: <EventDetails />,
          },
        ],
      },
    ],
    {
      basename: import.meta.env.BASE_URL ?? "/",
    }
  );

  return <RouterProvider router={router} />;
};

export default MainRouter;
