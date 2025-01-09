import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home/Home";
import UserLoginLoginLayout from "./pages/UserLogin/UserLoginLoginLayout";
import Login from "./pages/UserLogin/login/Login";
import Register from "./pages/UserLogin/register/Register";
import UserInfo from "./pages/UserInfo/UserInfo";
import CarDetails from "./pages/CarDetails/CarDetails"; // Importe o novo componente

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <UserLoginLoginLayout />,
        children: [
          {
            index: true,
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
      {
        path: "/userInfo",
        element: <UserInfo />,
      },
      {
        path: "/cars/:id", 
        element: <CarDetails />,
      },
    ],
  },
]);

export default router;