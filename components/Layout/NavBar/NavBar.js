import Link from "next/link";
import classes from "./NavBar.module.css";
import NavLink from "../../UI/NavLink";

const NavBar = (props) => {
  return (
    <div className={classes.largeScreenWrapper}>
      <nav className={classes.nav}>
        <div className={classes.title}>
          <div className={classes.iconContainer}>
            <img className={classes.icon} src={props.icon} alt="logo" />
          </div>
          <Link href="/">Gas Induction</Link>
        </div>
        <ul className={classes.navLinksSection}>
          {props.sections.map((section, index) => {
            return (
              <li key={index} className={classes.navLinks}>
                <NavLink
                  href={`/${section.link}`}
                  hightlighColor={section.color}
                >
                  {section.sectionName}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;

{
  /* <Link className={classes.link} href={`/${section.link}`}>
{section.sectionName}
</Link> */
}
