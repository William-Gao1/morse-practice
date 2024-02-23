import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import TapPage from "./pages/TapPage";
import ReadPage from "./pages/ReadPage";
import WatchPage from "./pages/WatchPage";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/tap",
        element: <TapPage />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/reading",
        element: <ReadPage />,
      },
      {
        path: "/*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
