import sections from "../../config/sections";
import Link from "next/link";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.title}>
        <Link href="/">Gas Induction</Link>
      </div>
      <ul className={classes.navLinksSection}>
        {sections.map((section, index) => {
          return (
            <li key={index} className={classes.navLinks}>
              <Link className={classes.link} href={`/${section}`}>
                {section}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
