import { createRoot } from "react-dom/client";
import "./App.css";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";

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
      },
    ],
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
