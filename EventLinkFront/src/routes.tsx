import { Home } from "./pages/Home";
import { BasePage } from "./pages/BasePage";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Events } from "./pages/Events";
import { Profile } from "./pages/Profile";
import { Loading } from "./components/Loading";
import { LogOut } from "./pages/LogOut";
import { Users } from "./pages/Users";

const routes = [
  {
    path: "/",
    element: <BasePage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "loading-test",
        element: <Loading />,
      },
      {
        path: "log-out",
        element: <LogOut />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
];

export { routes };
