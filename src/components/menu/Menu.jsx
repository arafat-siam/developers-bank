import { useLocation, Link } from "@reach/router";
import classes from "./Menu.module.css";

const Menu = (props) => {
  const path = useLocation().pathname;
  let link = props.link;
  if (link === "/") {
    link = "";
  }

  return (
    <li>
      <Link
        className={path === `/${link}` ? classes.activeList : classes.list}
        to={"/" + link}
      >
        {props.value}
      </Link>
    </li>
  );
};

export default Menu;
