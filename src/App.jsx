import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Profile from "./components/Profile";
import ShimmerCard from "./components/ShimmerCard";
import ContactPage from "./components/ContactPage";
//import Instamart from "./components/Instamart";

const Instamart = lazy(() => import("./components/Instamart"));

export default function AppLayout() {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<ShimmerCard />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
