import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import "./style.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Users from "./pages/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/users",
    element: <Users/>,
  },
]);

function App() {
  return (
    // <div className="app">
    <RouterProvider router={router}/>
    // </div>
  );
}

export default App;
