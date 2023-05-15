import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AddCoffee from "./components/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        loader: () => fetch("http://localhost:5000/coffee"),
    },
    {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
    },
    {
        path: "/updateCoffee",
        element: <UpdateCoffee></UpdateCoffee>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
