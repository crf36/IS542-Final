import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DataProvider } from "./context/DataProvider";
import { NotFoundPage } from "./components/NotFoundPage";
import MainPage from "./components/MainPage";
import HomePage from "./components/HomePage";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <MainPage />,
        errorElement: <NotFoundPage />,
        children: [
          { path: "", element: <HomePage /> },
          // { path: ":id", element: <DetailsPage /> },
        ],
      },
    ],
    { basename: "/IS542-Final/" }
  );

  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  );
}

export default App;
