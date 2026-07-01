import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Mainpage from "./Pages/MainPage/Mainpage";
import Services from "./Pages/Services/Services";
import Board from "./Pages/Board/Board";
import Contact from "./Pages/Contact/Contact";
import Leadership from "./Pages/Leadership/Leadership";
import About from "./Pages/About/About";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Mainpage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/leadership",
        element: <Leadership />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/board",
        element: <Board />,
      },
      {
        path: "/our-services",
        element: <Services />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
