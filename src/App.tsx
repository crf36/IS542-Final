import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TaskDataProvider } from "./context/TaskDataProvider";
import { NotFoundPage } from "./components/NotFoundPage";
import MainPage from "./components/MainPage";
import { ErrorFallback } from "./ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import { TaskForm } from "./components/TaskForm";
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
          { path: "/new", element: <TaskForm /> },
          { path: "/:taskid/edit", element: <TaskForm /> },
        ],
      },
    ],
    { basename: "/IS542-Final/" }
  );

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <TaskDataProvider>
        <RouterProvider router={router} />
      </TaskDataProvider>
    </ErrorBoundary>
  );
}

export default App;
