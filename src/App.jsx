import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import GetInvolved from "./pages/GetInvolved";
import ImpactStories from "./pages/ImpactStories";
import Contact from "./pages/Contact";
import PriPolicy from "./pages/PriPolicy";
import Terms from "./pages/Terms";
import RefundPolicy from "./pages/RefundPolicy";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about-us",
          element: <About />,
        },
        {
          path: "/our-work",
          element: <OurWork />,
        },
        {
          path: "/get-involved",
          element: <GetInvolved />,
        },
        {
          path: "/impact-stories",
          element: <ImpactStories />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/privacy-policy",
          element: <PriPolicy />,
        },
        {
          path: "/terms-and-conditions",
          element: <Terms />,
        },
        {
          path: "/refund-policy",
          element: <RefundPolicy />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
