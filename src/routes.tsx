import { createBrowserRouter } from "react-router-dom";
import LayOut from "./pages/LayOut";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      { path: "games/:slug", element: <GameDetailPage></GameDetailPage> },
    ],
  },
]);

export default router;
