import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Home/Home";
import About from "../components/AboutUs/About";
import Pricing from "../components/Pricing/Pricing";
import Contact from "../components/Contact/Contact";
import Services from "../components/Services/Services";
import ServiceDetails from "../components/Services/ServiceDetails";
import TeamPage from "../components/TeamPage/TeamPage";
import TeamDetails from "../components/TeamPage/TeamDetails/TeamDetails";
import Blogs from "../components/Blogs/Blogs";
import BlogsDetails from "../components/Blogs/BlogsDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:
      [
        {
          path: '/',
          element: <Home />
        },

        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/pricing',
          element: <Pricing />,
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/services",
          element: <Services />
        },
        {
          path: "/service-details/:id",
          element: <ServiceDetails />
        },
        {
          path: "/team",
          element: <TeamPage />
        },
        {
          path: "/team-details/:name",
          element: <TeamDetails />
        },
        {
          path: "/blogs",
          element: <Blogs />
        },
        {
          path: "/blog-details/:id",
          element: <BlogsDetails />
        },
      ]

  }
])

export default router;