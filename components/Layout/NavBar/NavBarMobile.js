import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import classes from "./NavBarMobile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavBarMobileSections from "./NavBarMobileSections";
import { useState } from "react";
import Link from "next/link";

const NavBarMobile = (props) => {
  const [isMenuShowing, toggleMenuShowing] = useState(false);

  const toggleMenuHandler = (event) => {
    event.preventDefault();
    toggleMenuShowing((prev) => !prev);
  };

  const collapseMenuHandler = (event) => {
    event.preventDefault();
    toggleMenuShowing(false);
  };

  //Note onBlur event may not work in iOS

  //giving nav a tabIndex of not -1, means that the onBlur event
  //can be applied to the element
  //onBlur is when the element losses focus
  return (
    <nav className={classes.nav} onBlur={collapseMenuHandler} tabIndex="0">
      <div className={classes.topMenu}>
        <img src={props.icon} alt="logo"></img>
        <Link href="/">
          <h1>Gas Induction</h1>
        </Link>
        <FontAwesomeIcon
          onClick={toggleMenuHandler}
          className={classes.menuToggle}
          icon={faBars}
        />
      </div>
      {isMenuShowing && (
        <NavBarMobileSections
          sections={props.sections}
          closeMenu={collapseMenuHandler}
        ></NavBarMobileSections>
      )}
    </nav>
  );
};

export default NavBarMobile;
