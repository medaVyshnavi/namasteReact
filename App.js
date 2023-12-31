import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ContactUs from "./src/components/ContactUs";
import Cart from "./src/components/Cart";
import _404 from "./src/components/404";
import Menu from "./src/components/Menu";
import UserDetails from "./src/utils/userContext";
import appStore from "./src/utils/appStore";
import { Provider } from "react-redux";

const Grocery = lazy(() => import("./src/components/Grocery"));
const About = lazy(() => import("./src/components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // api call;
    setUserName("Vismaya");
  }, []);
  return (
    <Provider store={appStore}>
      <UserDetails.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />
        <Outlet />
      </UserDetails.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>fasten your seat belts</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense
            fallback={
              <>
                <h1>Loading</h1>
              </>
            }
          >
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/menu/:resId",
        element: <Menu />,
      },
    ],
    errorElement: <_404 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
