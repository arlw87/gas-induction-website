import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import classes from "./NavBarMobile.module.css";

const NavBarMobile = (props) => {
  return (
    <nav className={classes.nav}>
      <div className={classes.topMenu}>
        <img src={props.icon} alt="logo"></img>
        <h1>Gas Induction</h1>
        <p>Icon</p>
      </div>
    </nav>
  );
};

export default NavBarMobile;
