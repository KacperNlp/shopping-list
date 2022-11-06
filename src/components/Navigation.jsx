import { Link } from "react-router-dom";

import "./Navigation.css";

const Navigation = () => {
  const appLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Wallet",
      path: "/wallet",
    },
    {
      name: "Shop",
      path: "/shop",
    },
  ];

  return (
    <nav className="navigation">
      <ul className="navigation-list">
        {appLinks.map((link, id) => (
          <li key={id} className="navigation-element">
            <Link to={link.path} className="navigation-element-link">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
