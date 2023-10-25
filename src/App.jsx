import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./pages/MainContainer";
import WatchPage from "./pages/WatchPage";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <Header />
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;
