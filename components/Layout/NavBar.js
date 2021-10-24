import sections from "../../config/sections";
import Link from "next/link";
import classes from "./NavBar.module.css";
import NavLink from "../UI/NavLink";

const NavBar = () => {
  console.log(sections);

  return (
    <nav className={classes.nav}>
      <div className={classes.title}>
        <div className={classes.iconContainer}>
          <img
            className={classes.icon}
            src="/media/images/GasInductionIcon.png"
            alt="logo"
          />
        </div>
        <Link href="/">Gas Induction</Link>
      </div>
      <ul className={classes.navLinksSection}>
        {sections.map((section, index) => {
          return (
            <li key={index} className={classes.navLinks}>
              <NavLink href={`/${section.link}`} hightlighColor={section.color}>
                {section.sectionName}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;

{
  /* <Link className={classes.link} href={`/${section.link}`}>
{section.sectionName}
</Link> */
}
