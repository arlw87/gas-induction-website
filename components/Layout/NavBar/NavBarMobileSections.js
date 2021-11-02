import classes from "./NavBarMobileSections.module.css";
import NavLink from "next/link";
import React from "react";

const NavBarMobileSections = (props) => {
  //if a click is link in this menu then the menu should collapse
  //onClick for parent div will execute the closeMenu function in the NavBarMobile
  //component

  //There is an issue here with timings, the navbar closes then the new page is loaded
  //this is abit odd to the user, maybe use Context and when a next page is mounted
  //then set mobile menu to false
  //using content will be easier than state and props
  return (
    <div className={classes.sectionsContainer} onClick={props.closeMenu}>
      <hr className={classes.hr}></hr>
      {props.sections.map((section) => {
        return (
          <React.Fragment key={section.id}>
            <NavLink href={`/${section.link}`} hightlighColor={"none"}>
              <div className={classes.sectionContainer}>
                <h2>{section.sectionName}</h2>
              </div>
            </NavLink>
            <hr className={classes.hr}></hr>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default NavBarMobileSections;
