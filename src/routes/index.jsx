import { createBrowserRouter } from "react-router-dom";
import { Home, About, Services, InternalPage, Contact } from "../pages";
import { ErrorPage } from "../components";
import { Default } from "../Layout";

export const router = createBrowserRouter([
  {
    path: "/focuscleaning/",
    element: <Default />,
    children: [
      {
        path: "/focuscleaning/",
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
        path: "/focuscleaning/about",
        element: <About />,
        errorElement: <ErrorPage />
      },
      {
        path: "/focuscleaning/services",
        element: <Services />,
        errorElement: <ErrorPage />
      },
      {
        path: "/focuscleaning/contact",
        element: <Contact />,
        errorElement: <ErrorPage />
      },
      {
        path: "/focuscleaning/services/basic",
        element: <InternalPage page="basic" />,
        errorElement: <ErrorPage />
      },
      {
        path: "/focuscleaning/services/commercial",
        element: <InternalPage page="commercial" />,
        errorElement: <ErrorPage />
      },
      {
        path: "/focuscleaning/services/construction",
        element: <InternalPage page="construction" />,
        errorElement: <ErrorPage />
      },
      {
        path: "/focuscleaning/services/mould",
        element: <InternalPage page="mould" />,
        errorElement: <ErrorPage />
      },
      {
        path: "/focuscleaning/services/endoflease",
        element: <InternalPage page="endoflease" />,
        errorElement: <ErrorPage />
      },
      {
        path: "/focuscleaning/services/spring",
        element: <InternalPage page="spring" />,
        errorElement: <ErrorPage />
      }
    ]
  },
  { path: "*", element: <ErrorPage /> }
]);
