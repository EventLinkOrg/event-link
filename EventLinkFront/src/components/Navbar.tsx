import { NavLink } from "react-router-dom";

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
  {
    route: "profile",
    name: "Profile",
  },
  {
    route: "loading-test",
    name: "Loading",
  },
];

const Navbar = () => {
  return (
    <div className="card-body ">
      <div className="navbar rounded-md">
        <div className="navbar-start">
          <a className="navbar-item">Ripple UI</a>
        </div>
        <div className="navbar-end">
          {NAVLINKS.map((navLink, index) => (
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
