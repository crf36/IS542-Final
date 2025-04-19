import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DataProvider } from "./context/DataProvider";
import { NotFoundPage } from "./components/NotFoundPage";
import MainPage from "./components/MainPage";
import HomePage from "./components/HomePage";
import { ErrorFallback } from "./ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";

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
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </ErrorBoundary>
  );
}

export default App;
