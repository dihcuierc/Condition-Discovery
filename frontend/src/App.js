import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ConditionList from "./component/ConditionList";
import DrugItem from "./component/DrugItem";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ConditionList />,
    },
    {
      path: ":drugs",
      element: <DrugItem />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
