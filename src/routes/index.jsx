import { createBrowserRouter } from "react-router-dom";
import { Home, About, Services, InternalPage, Contact } from "../pages";
import { ErrorPage } from "../components";
import { Default } from "../Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />
      },
      {
        path: "/services",
        element: <Services />,
        errorElement: <ErrorPage />
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorPage />
      },
      {
        path: "/services/basic",
        element: <InternalPage page="basic" />,
        errorElement: <ErrorPage />
      },
      {
        path: "/services/commercial",
        element: <InternalPage page="commercial" />,
        errorElement: <ErrorPage />
      },
      {
        path: "/services/construction",
        element: <InternalPage page="construction" />,
        errorElement: <ErrorPage />
      },
      {
        path: "/services/mould",
        element: <InternalPage page="mould" />,
        errorElement: <ErrorPage />
      },
      {
        path: "/services/endoflease",
        element: <InternalPage page="endoflease" />,
        errorElement: <ErrorPage />
      },
      {
        path: "/services/spring",
        element: <InternalPage page="spring" />,
        errorElement: <ErrorPage />
      }
    ]
  },
  { path: "*", element: <ErrorPage /> }
]);
