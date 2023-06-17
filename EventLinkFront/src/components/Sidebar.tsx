import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export type SidebarItem = {
  name: string;
  path: string;
  icon: ReactNode;
};

export type SidebarProps = {
  items: SidebarItem[];
};

const Sidebar = ({ items }: SidebarProps) => {
  console.log("rendered");
  return (
    <div className="card-body ">
      <div className="sticky flex h-screen flex-row gap-4 overflow-y-auto rounded-lg sm:overflow-x-hidden">
        <aside className="sidebar-sticky sidebar justify-start">
          <section className="sidebar-title items-center p-4">
            <svg
              fill="none"
              height="42"
              viewBox="0 0 32 32"
              width="42"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect height="100%" rx="16" width="100%"></rect>
              <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
            <div className="flex flex-col">
              <span>Acme</span>
              <span className="text-xs font-normal text-content2">
                Team Plan
              </span>
            </div>
          </section>
          <section className="sidebar-content min-h-[20rem]">
            <nav className="menu rounded-md">
              <section className="menu-section px-4">
                {/* start here */}
                <span className="menu-title">Main menu</span>
                <ul className="menu-items">
                  {items.map((prop, index) => (
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "menu-item menu-active" : "menu-item"
                      }
                      key={index}
                      to={prop.path}
                    >
                      {prop.icon}
                      <span>{prop.name}</span>
                    </NavLink>
                  ))}

                  {/* <li>
                    <input
                      type="checkbox"
                      id="menu-2"
                      className="menu-toggle"
                    />
                    <label
                      className="menu-item justify-between"
                      htmlFor="menu-2"
                    >
                      <div className="flex gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 opacity-75"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <span>Account</span>
                      </div>

                      <span className="menu-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </label>

                    <div className="menu-item-collapse">
                      <div className="min-h-0">
                        <label className="menu-item menu-item-disabled ml-6">
                          Accounts
                        </label>
                        <label className="menu-item ml-6">Billing</label>
                        <label className="menu-item ml-6">Security</label>
                        <label className="menu-item ml-6">Notifications</label>
                        <label className="menu-item ml-6">Integrations</label>
                      </div>
                    </div>
                  </li> */}
                </ul>
              </section>
            </nav>
          </section>
          <section className="sidebar-footer bg-gray-2 pt-2">
            <div className="divider my-0"></div>
            <div className="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray-4">
              <label
                className="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-gray-4"
                tabIndex={0}
              >
                <div className="flex flex-row gap-4 p-4">
                  <div className="avatar avatar-md">
                    <img src="https://i.pravatar.cc/150?img=30" alt="avatar" />
                  </div>

                  <div className="flex flex-col">
                    <span>Sandra Marx</span>
                    <span className="text-xs font-normal text-content2">
                      sandra
                    </span>
                  </div>
                </div>
              </label>
              <div className="dropdown-menu-right-top dropdown-menu ml-2">
                <a className="dropdown-item text-sm">Profile</a>
                <a tabIndex={-1} className="dropdown-item text-sm">
                  Account settings
                </a>
                <a tabIndex={-1} className="dropdown-item text-sm">
                  Change email
                </a>
                <a tabIndex={-1} className="dropdown-item text-sm">
                  Subscriptions
                </a>
                <a tabIndex={-1} className="dropdown-item text-sm">
                  Change password
                </a>
                <a tabIndex={-1} className="dropdown-item text-sm">
                  Refer a friend
                </a>
                <a tabIndex={-1} className="dropdown-item text-sm">
                  Settings
                </a>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export { Sidebar };
