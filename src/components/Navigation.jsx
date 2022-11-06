import { Link } from "react-router-dom";

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
    <nav>
      <ul>
        {appLinks.map((link, id) => (
          <li key={id}>
            <Link to={link.path}>${link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
