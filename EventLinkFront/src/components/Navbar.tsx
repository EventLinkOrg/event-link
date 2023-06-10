import { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { useSelf } from "../redux/self/useSelf";
import { contains_role } from "../utils/contains_role";

type NavLinkType = {
  route: string;
  name: string;
};

const NAVLINKS: NavLinkType[] = [
  {
    route: "",
    name: "Home",
  },
  {
    route: "events",
    name: "Events",
  },
  {
    route: "sign-in",
    name: "Sign In",
  },
  {
    route: "sign-up",
    name: "Sign Up",
  },
];

const NAVLINKS_LOGGED_IN: NavLinkType[] = [
  {
    route: "",
    name: "Home",
  },
  {
    route: "events",
    name: "Events",
  },
  {
    route: "profile",
    name: "Profile",
  },
  {
    route: "log-out",
    name: "Log Out",
  },
];

const NAVLINKS_LOGGED_IN_ADMIN: NavLinkType[] = [
  {
    route: "",
    name: "Home",
  },
  {
    route: "events",
    name: "Events",
  },
  {
    route: "profile",
    name: "Profile",
  },
  {
    route: "users",
    name: "Users",
  },
  {
    route: "log-out",
    name: "Log Out",
  },
];

const NAVLINKS_LOGGED_IN_SUBSCRIBED_USER: NavLinkType[] = [
  {
    route: "",
    name: "Home",
  },
  {
    route: "events",
    name: "Events",
  },
  {
    route: "sign-in",
    name: "Sign In",
  },
  {
    route: "sign-up",
    name: "Sign Up",
  },
  {
    route: "profile",
    name: "Profile",
  },
  {
    route: "log-out",
    name: "Log Out",
  },
];

const Navbar = () => {
  const { state, response } = useSelf();

  const nav_links = useMemo(() => {
    if (state !== "success") {
      return NAVLINKS;
    }
    if (response) {
      if (contains_role(response.authorities, "ADMIN")) {
        return NAVLINKS_LOGGED_IN_ADMIN;
      }
      if (contains_role(response.authorities, "SUBSCRIBED_USER")) {
        return NAVLINKS_LOGGED_IN_SUBSCRIBED_USER;
      }
    }
    return NAVLINKS_LOGGED_IN;
  }, [state]);

  return (
    <div className="card-body ">
      <div className="navbar rounded-md">
        <div className="navbar-start">
          <a className="navbar-item">Event Link</a>
        </div>
        <div className="navbar-end">
          {nav_links.map((navLink, index) => (
            <NavLink
              className="navbar-item"
              to={`/${navLink.route}`}
              key={index}
            >
              {navLink.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Navbar };
