import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "yet-another-react-lightbox/styles.css";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
